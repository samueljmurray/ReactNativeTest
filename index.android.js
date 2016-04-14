import React, { AppRegistry } from 'react-native';
import App from './src/App'
import { initPushNotifications, sendPushNotification } from './src/utils/pushNotifications'

initPushNotifications()
sendPushNotification()

AppRegistry.registerComponent('ReactNativeTest', () => App);
