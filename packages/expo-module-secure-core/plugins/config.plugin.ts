import { ConfigPlugin, withDangerousMod } from "@expo/config-plugins";
import fs from "fs";
import path from "path";

const withLocalAndroidProject: ConfigPlugin = (config) => {
  return withDangerousMod(config, [
    "android",
    async (config) => {
      const settingsGradlePath = path.join(
        config.modRequest.projectRoot,
        "android",
        "settings.gradle"
      );
      const localProjectInclude = `
include(":kotlin-secure-core")
project(":kotlin-secure-core").projectDir = new File(rootDir, "../../kotlin-secure-core")
`;

      let contents = fs.readFileSync(settingsGradlePath, "utf8");

      if (!contents.includes('include(":kotlin-secure-core")')) {
        contents += `\n${localProjectInclude}`;
        fs.writeFileSync(settingsGradlePath, contents);
      }

      return config;
    },
  ]);
};

export default withLocalAndroidProject;
