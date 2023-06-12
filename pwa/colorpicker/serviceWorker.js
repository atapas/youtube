const staticColorPicker = "static-color-picker-v1"
const assets = [
  "/",
  "/index.html",
  "/style.css",
  "/main.js",
  "/colors.js",
  "/vite.svg"
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticColorPicker).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})