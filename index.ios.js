import React, { AppRegistry } from 'react-native';
import App from './src/App'
import { initPushNotifications } from './src/utils/pushNotifications'

initPushNotifications()

AppRegistry.registerComponent('ReactNativeTest', () => App);
