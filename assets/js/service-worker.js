if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
        navigator.serviceWorker
            .register("/sw.js")
            .then(function (registration) {
                console.log("ServiceWorker registration :", registration.scope);
                requestPermissionNotification();
            })
            .catch(function (error) {
                console.log("ServiceWorker registration failed:", error);
            });
    });
}

function requestPermissionNotification() {
    Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
            sendTokenDeviceForNotification();
        } else {
            console.log('Unable to get permission to notify.');
        }
    });
}
