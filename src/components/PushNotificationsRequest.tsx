import React from 'react';

export const PushNotificationsRequest = () => {

  const handleClick = () => {
    Notification.requestPermission().then((result) => {
      console.log(`Notification permission: ${result}`);
      if (result === "granted") {
        new Notification("Notifications enabled!", {
          body: "You will now receive notifications about the summit.",
        });
      }
    });
  };

  return (
    <button className='btn btn-secondary' onClick={handleClick}>
      Get notifications!
    </button>
  );
};

export default PushNotificationsRequest;