/// <reference lib="WebWorker" />
import { PushManager } from "@remix-pwa/push/client";

export {}

declare let self: ServiceWorkerGlobalScope;

self.addEventListener("install", (event) => {
    console.log("Service Worker: Installed")

    event.waitUntil(self.skipWaiting())
})

self.addEventListener("activate", (event) => {
    console.log("Service Worker: Activated")

    event.waitUntil(self.clients.claim())
})

const pushManager = new PushManager({
    handlePushEvent: (event) => {

        const data = event.data.json()

        console.log("Service Worker: Push Event", data)
        const options = {
            body: data.body,
            icon: 'pwa/icon.png',
            badge: 'pwa/badge.png',
        }

        event.waitUntil(self.registration.showNotification(data.title, options))
    },
    handleNotificationClick: (event) => {
        console.log("Service Worker: Notification Click", event)
    },
    handleNotificationClose: (event) => {
        console.log("Service Worker: Notification Close", event)
    },
    handleNotificationError: (event) => {
        console.log("Service Worker: Notification Error", event)        
    }
})