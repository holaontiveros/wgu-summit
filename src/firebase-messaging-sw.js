importScripts(
  "https://www.gstatic.com/firebasejs/9.22.1/firebase-app-compat.js",
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.22.1/firebase-messaging-compat.js",
);

const firebaseConfig = {
  apiKey: "AIzaSyDfdNUWbr3d5XBVIHJ47QGDS1GI_w5E5JQ",
  authDomain: "wgu-summit.firebaseapp.com",
  projectId: "wgu-summit",
  storageBucket: "wgu-summit.appspot.com",
  messagingSenderId: "443766700141",
  appId: "1:443766700141:web:bd2a2552af6e3485e52764",
};

const messaging = firebase.messaging();
// Handle background messages
messaging.onBackgroundMessage(function (payload) {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload,
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/favicon.svg", // Optional
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
