'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "f7a55a2e0816d82125d19b12be43e23f",
"assets/assets/allstoreresize1.png": "89fbe2bb88a6674c5b3b10003d2887da",
"assets/assets/appstoreresize.png": "15854aef2cd3b94acef6d4c14afb6717",
"assets/assets/appsttreat.png": "b6892a4ac7a93a7f5b37bb24b10992fe",
"assets/assets/appupdate.jpg": "0165664d24804d133d0eb538ead8d5c0",
"assets/assets/backstep.jpg": "6c4fd9b5442a6d62f05e844beb451b6d",
"assets/assets/bestprice1.jpg": "3122284547f5d2256eec676d9c8bd7fe",
"assets/assets/business1.jpg": "88bf534eddb4d74799f409f203e385cd",
"assets/assets/checkb.png": "882e34cdd6b5b4d6d06b9b4923d3cb08",
"assets/assets/checkc.png": "387183a780461f7a01963a653267acf8",
"assets/assets/compareprice.jpg": "155903ccd7ce463d10d5ea011dd00b2a",
"assets/assets/competitiviteresize.png": "8bf7796d0746f100a45dcf7c980ce1a0",
"assets/assets/coursiers1.jpg": "14af03a2766bc4178f1981b000de4a96",
"assets/assets/delivery.jpg": "331aa1519beaced00c3df7f01bd8fdd7",
"assets/assets/deliveryworks.jpg": "402845d72c33d9cc9770fb3f5c1561ed",
"assets/assets/deliv_planifier.jpg": "508e618096809c80ba35e5c7c97a09e7",
"assets/assets/deliv_planifier2.jpg": "508d9d051932c5b0007c72afe1f52079",
"assets/assets/focusfoods.jpg": "896fff0a06e94c6968bb7e3a29b6f1ce",
"assets/assets/foods1.jpg": "70fcb2811b43c1868149cafd8ea881de",
"assets/assets/footstore1.png": "1c6c602ffde44834b094b504168df4d8",
"assets/assets/footstore1B.png": "19b29f35bea8b2acd9ae0d1c7de655c2",
"assets/assets/globalban1.png": "e76a8d755198a89a4e0783ae54bc0bc5",
"assets/assets/iosappstoretreat.png": "daebe3f1670a088e765874b502ce7e26",
"assets/assets/loginbackc.jpg": "545202f95efd8686ad409b119872f644",
"assets/assets/marketingresize.png": "847b38cfae4746e02c83b6f64933334f",
"assets/assets/mdaymenucat.jpg": "daa5d38b466f2f6c57620e497f3cb6f4",
"assets/assets/menu202.jpg": "4ba42a9baad5794994afc21372648f73",
"assets/assets/mobglobalban2.png": "61edfe532de87414a476240063dcf658",
"assets/assets/mobilephoneuser.jpg": "6820fa38133eb21ced61d7f53b68ad6e",
"assets/assets/mobilewelcome.jpg": "b8177ab02c2087dbb60a4fc8d6c5f5cf",
"assets/assets/mobilewelcome2.jpg": "4d530183b762e5edbeedd34e5d7e338d",
"assets/assets/mobwelcombigbanV2.png": "dca7bd08d028d37d5861025f831b566a",
"assets/assets/mobwelcomtopban4.png": "74fe3c97ff426c0002674a455a8cd30d",
"assets/assets/mobwelcomtopbanV2.png": "11a48e544659c3fcb8dd3785e5eb19f2",
"assets/assets/order.jpg": "980d328dc3c575a35620132c78682a79",
"assets/assets/playstore.png": "bee965ee61faa141cd927696f9f42b5f",
"assets/assets/registration.png": "5250556e56b63eb498627eecfbe1f3f7",
"assets/assets/sideban1.png": "7918f106b73682b1febb1f6a9e3a575d",
"assets/assets/store2.png": "9ea9837195d630c368013f1a9e4a7ba6",
"assets/assets/store2parra.png": "6aa3c36a235bf704a7718984659ee1f6",
"assets/assets/storesoon.png": "cd4011bb8761a4b8fda0a56ca5294b0e",
"assets/assets/update.jpg": "e58da85c03e53650876e79e11344cd58",
"assets/assets/welcmessb.png": "bedcceed12e2877d7875bb54b477863e",
"assets/assets/welcom2.png": "01a9313727ebf65de2ec386939ee1f1f",
"assets/assets/welcome.jpg": "d1b2a9568ebef4a6d58a0d20eef90711",
"assets/assets/welcomv1.png": "61a2b7777f04e017b54c51cfaf942075",
"assets/assets/welcomv2.png": "116ca2a14ab2a0dd0377c4e79c912132",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "a9b44648331f473e6ecf176393ef3b98",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d526eccd696fa4f6eb8f647815de76a5",
"/": "d526eccd696fa4f6eb8f647815de76a5",
"main.dart.js": "53dce939d22869b10420f8b2e9f705ca",
"manifest.json": "0ba160ce5e4589d6a4dfcc360b785e04",
"version.json": "9c922f33014271b297c5b6777f4ebfdb"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
