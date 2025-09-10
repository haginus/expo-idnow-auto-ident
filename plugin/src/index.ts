import { ConfigPlugin } from 'expo/config-plugins';
import { withAndroidBuildProperties } from './android';

const withAutoIdent: ConfigPlugin = config => {
  config = withAndroidBuildProperties(config);
  return config;
};

export default withAutoIdent;