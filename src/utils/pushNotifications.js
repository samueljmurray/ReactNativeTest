import PushNotification from 'react-native-push-notification'

function initPushNotifications () {
  PushNotification.configure({
    // (optional) Called when Token is generated (iOS and Android)
    onRegister: function(token) {
        console.log( 'TOKEN:', token );
    },

    // (required) Called when a remote or local notification is opened or received
    onNotification: function(notification) {
        console.log( 'NOTIFICATION:', notification );
    },

    // ANDROID ONLY: (optional) GCM Sender ID.
    // senderID: "YOUR GCM SENDER ID",

    // IOS ONLY (optional): default: all - Permissions to register.
    // permissions: {
    //     alert: true,
    //     badge: true,
    //     sound: true
    // },

    // Should the initial notification be popped automatically
    // default: true
    popInitialNotification: true,

    /**
      * IOS ONLY: (optional) default: true
      * - Specified if permissions will requested or not,
      * - if not, you must call PushNotificationsHandler.requestPermissions() later
      */
    requestPermissions: true,
  })
}

function sendPushNotification () {
  PushNotification.localNotification({
    /* Android Only Properties */
    //id: 0, // (optional) default: Autogenerated Unique ID
    title: "My Notification Title", // (optional)
    ticker: "My Notification Ticker", // (optional)
    largeIcon: "ic_launcher", // (optional) default: "ic_launcher"
    smallIcon: "ic_notification", // (optional) default: "ic_notification" with fallback for "ic_launcher"

    /* iOS and Android properties */
    message: "My Notification Message" // (required)
  });
}

export {
  initPushNotifications,
  sendPushNotification
}