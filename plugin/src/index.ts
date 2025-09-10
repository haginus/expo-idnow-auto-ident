import { ConfigPlugin } from 'expo/config-plugins';
import withAndroidBuildProperties from './withAndroidBuildProperties';
import withPermissions from './withPermissions';
import { PluginConfigOptions } from './types';

const withAutoIdent: ConfigPlugin<PluginConfigOptions> = (config, options) => {
  config = withAndroidBuildProperties(config);
  config = withPermissions(config, options);
  return config;
};

export default withAutoIdent;