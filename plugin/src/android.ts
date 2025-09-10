import { AndroidConfig } from '@expo/config-plugins';

export const withAndroidBuildProperties = AndroidConfig.BuildProperties.createBuildGradlePropsConfigPlugin([
  {
    propName: 'android.extraMavenRepos',
    propValueGetter: (config) => {
      const extraMavenRepos = (config.android?.extraMavenRepos ?? []).map((item: any) => {
        if (typeof item === 'string') {
          return { url: item };
        }
        return item;
      });
      extraMavenRepos.push({ url: "https://raw.githubusercontent.com/idnow/de.idnow.android.sdk/master" });
      return JSON.stringify(extraMavenRepos);
    },
  },
]);