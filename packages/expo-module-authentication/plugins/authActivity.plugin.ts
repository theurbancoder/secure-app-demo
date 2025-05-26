import {
  AndroidConfig,
  ConfigPlugin,
  withAndroidManifest,
} from "@expo/config-plugins";

const { getMainApplication } = AndroidConfig.Manifest;

const withAuthActivity: ConfigPlugin = (config) => {
  return withAndroidManifest(config, (config) => {
    const manifest = config.modResults;
    const mainApplication = getMainApplication(manifest);

    if (!mainApplication) {
      throw new Error("Cannot find <application> in AndroidManifest.xml");
    }

    const existingActivities = mainApplication["activity"] ?? [];

    const activityAlreadyExists = existingActivities.some(
      (activity: any) =>
        activity.$?.["android:name"] ===
        "expo.modules.moduleauthentication.AuthActivity"
    );

    if (!activityAlreadyExists) {
      mainApplication["activity"] = [
        ...existingActivities,
        {
          $: {
            "android:name": "expo.modules.moduleauthentication.AuthActivity",
          },
        },
      ];
    }

    return config;
  });
};

export default withAuthActivity;
