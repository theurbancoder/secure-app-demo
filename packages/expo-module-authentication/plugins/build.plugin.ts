import { ConfigPlugin, withAppBuildGradle } from "@expo/config-plugins";

const TARGET_LINE = 'implementation("com.facebook.react:react-android")';

const DEPENDENCIES_TO_ADD = [
  'implementation(project.dependencies.platform("io.insert-koin:koin-bom:4.0.4"))',
  'implementation("io.insert-koin:koin-core")',
  'implementation("io.insert-koin:koin-android:4.0.4")',
  'implementation project(":kotlin-secure-core")',
];

const withAppBuildGradleDependencies: ConfigPlugin = (config) => {
  return withAppBuildGradle(config, (modConfig) => {
    let contents = modConfig.modResults.contents;

    if (contents.includes(TARGET_LINE)) {
      const lines = contents.split("\n");

      const targetIndex = lines.findIndex((line) =>
        line.trim().startsWith(TARGET_LINE)
      );

      if (targetIndex !== -1) {
        // Filter out already present dependencies
        const toInsert = DEPENDENCIES_TO_ADD.filter(
          (dep) => !contents.includes(dep)
        );

        if (toInsert.length > 0) {
          lines.splice(
            targetIndex + 1,
            0,
            ...toInsert.map((dep) => `    ${dep}`)
          );
          contents = lines.join("\n");
        }
      }
    } else {
      console.warn(`Target line not found in build.gradle: ${TARGET_LINE}`);
    }

    modConfig.modResults.contents = contents;
    return modConfig;
  });
};

export default withAppBuildGradleDependencies;
