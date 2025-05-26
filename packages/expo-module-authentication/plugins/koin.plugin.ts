import { ConfigPlugin, withMainApplication } from "@expo/config-plugins";

const KOIN_IMPORTS = [
  "import org.koin.dsl.module",
  "import com.theurbancoder.kotlin.secore.core.SecureCore",
];

const KOIN_BLOCK = `import com.theurbancoder.kotlin.secore.core.SecureCore
import org.koin.core.context.startKoin
import org.koin.dsl.module

val koinModules = module {
  single { SecureCore() }
}`;

const KOIN_START_BLOCK = `startKoin() {
    modules(koinModules)
}`;

const withMainApplicationKoin: ConfigPlugin = (config) => {
  return withMainApplication(config, (modConfig) => {
    let contents = modConfig.modResults.contents;

    // Inject imports if not already there
    for (const importLine of KOIN_IMPORTS) {
      if (!contents.includes(importLine)) {
        contents = contents.replace(
          /^package .*;\s*/m,
          (match) => `${match}\n${importLine}`
        );
      }
    }

    // Inject Koin block above class MainApplication
    const classRegex = /class\s+MainApplication[^{]*\{/;
    if (!contents.includes(KOIN_BLOCK) && classRegex.test(contents)) {
      contents = contents.replace(classRegex, `${KOIN_BLOCK}\n\n$&`);
    }

    const regex =
      /ApplicationLifecycleDispatcher\.onApplicationCreate\s*\(\s*this\s*\)/g;
    if (!contents.includes(KOIN_START_BLOCK) && regex.test(contents)) {
      contents = contents.replace(regex, `${KOIN_START_BLOCK}\n\n$&`);
    }

    modConfig.modResults.contents = contents;
    return modConfig;
  });
};

export default withMainApplicationKoin;
