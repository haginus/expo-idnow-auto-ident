import { ConfigPlugin } from 'expo/config-plugins';

const withAutoIdent: ConfigPlugin = config => {
  console.log('my custom plugin');
  return config;
};

export default withAutoIdent;