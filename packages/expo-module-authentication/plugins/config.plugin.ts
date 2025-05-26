import { ConfigPlugin, withPlugins } from "@expo/config-plugins";
import withBuild from "./build.plugin";
import withKoin from "./koin.plugin";
import withSecureCore from "./secure-core.plugin";

const withExpoAuthenticationPlugins: ConfigPlugin = (config) => {
  return withPlugins(config, [withKoin, withSecureCore, withBuild]);
};

export default withExpoAuthenticationPlugins;
