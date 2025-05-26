"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_plugins_1 = require("@expo/config-plugins");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const withLocalAndroidProject = (config) => {
    return (0, config_plugins_1.withDangerousMod)(config, [
        "android",
        async (config) => {
            const settingsGradlePath = path_1.default.join(config.modRequest.projectRoot, "android", "settings.gradle");
            const localProjectInclude = `
include(":kotlin-secure-core")
project(":kotlin-secure-core").projectDir = new File(rootDir, "../../kotlin-secure-core")
`;
            let contents = fs_1.default.readFileSync(settingsGradlePath, "utf8");
            if (!contents.includes('include(":kotlin-secure-core")')) {
                contents += `\n${localProjectInclude}`;
                fs_1.default.writeFileSync(settingsGradlePath, contents);
            }
            return config;
        },
    ]);
};
exports.default = withLocalAndroidProject;
