// This is a placeholder service worker file
// It exists to prevent 404 errors from third-party scripts
// No actual service worker functionality is implemented

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});
