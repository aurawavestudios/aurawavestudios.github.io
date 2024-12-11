'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "460da008bdf465cf535a9de4c0720b2e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "267832c057ff5e20676333acbe85b3b9",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "71456714c90f8289a0366e9a4ca7ccab",
".git/logs/refs/heads/main": "4862f6c6346aded05bfb2ee0dfd4588c",
".git/logs/refs/remotes/origin/main": "7c70887e903d09c2feca368aa76ae61e",
".git/objects/04/2b73d3e2996781107515b756112bc5228c1d97": "459531857b93f985d6779a7d8036e5ea",
".git/objects/06/511886eba16816c79b5477136dc066044111af": "7285a4f358c7f8e84c5257471e86476f",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/0f/f81975852c5ea348bdbdd6b0b8174ad8b35d39": "73a50c10b49331b961ec22c65a01fce7",
".git/objects/10/fa88ba66084347aed9e8ae272b8665db8eaf33": "55109842b7ca8bc53be0b9aeb17cc217",
".git/objects/14/a8bee5edb6805f34cd1d605e5538bbd86f523f": "96d6582edbb62e88c728779721f49e34",
".git/objects/14/dfc02606208adf78f852047293a6df581bef63": "aa15066e067942b44516cb3d2efe194a",
".git/objects/1a/74f0e37194e668d2c3ceb285cc0a709f233c03": "910c72b922203ce6da9fa93e8d854009",
".git/objects/1e/08e328170f0d2720865dbd15f84a303495a6b4": "cc091deff8e9b16e1af990bc804d8133",
".git/objects/1f/16e52358997fdef438a536f0d839756b7850dd": "00b9389e4a990ee8b96d780fc41f13de",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/26/95a906d08efa8aed22370d6a4953dd624a6c3d": "0d1601b642871884b52c93cb2d7ad849",
".git/objects/2c/157747930b2a78eab7a697c077f0380a8067df": "a784e42e4aefefc72beed51245085c54",
".git/objects/31/39dc7cf301ea55d8f5e781d98d5c58a6ee1ccd": "e26ff2b827306e1115fe3796b3329bdc",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/36/c4df6e1b3bf12002c02a851317fdc772cdfb78": "aa98012e5f94cb9158f58d12696b0afd",
".git/objects/3a/50bcf246953eac45889af16d2b3677deda2eba": "8088ab04e577ee09b6b83d07fe7586ee",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/45/38368b09a54a2e95e4013a48be12c1c20cdb2e": "2ce212a4b45239dadfd30905365da133",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/5a/a371c3af42721d348a4e4dc7b4b68916b6d501": "b653cdb4c3f9222423c450c3381d0dea",
".git/objects/5c/4790e825c9f1cf2a966a423446dbf3dfe4951e": "4b6d75ade4b5bafeac29b06a57f909f0",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/60/586c74bbb4e6036a3cff5273065e34361229ba": "c38547a530f37a8261d2d15baff5b87f",
".git/objects/6a/db02f7e4f7de2ee5671ace34a7687c354d6732": "ff395ca1efb29e3eb3129e093855be72",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6e/8501fd04b3297fb170626fe8e3a3c1665ccd07": "f8b2ba91225296285c2296f190dec152",
".git/objects/7d/60500487d3067f78b0fc3126e25deb271d4854": "cd333abb9f20495f00bcb47372a230ce",
".git/objects/83/70ccb1a10d08f36e98e1c2e946cd08831c161f": "16247208002c7f22f209e921b6ab6996",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/17148036644975d5fa84917f3ff395d406c012": "7a14f00d66aaf6ebf6ec5de2e0757ac0",
".git/objects/8f/f9ea0dbe5034828887ef28172acd1474e00978": "ae563a847319a0830b8c4142a38fd95b",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/93/8a247e56e8d75b328f81bc241b323a76da9364": "fa5b0035e39b5fd29b728b7ef69d9d92",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9c/215498d1f376273a5646ab896ecd89cc6c3193": "eb4c1b661522e1c6cbf0c644a92a5c4f",
".git/objects/a6/86c42982c693beb457b6f36c34e4f3b1daf3d6": "a02f42eb8296b80085c4694952ad5cbe",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b2/81f00f08c5e017a498b6affc34b5ea6d33fe45": "4cc460c41bb956e3de6d6a7674eb2600",
".git/objects/b4/0f48d286f44f8c0b66689b21b555fdc9b70b28": "794be3a677c6108e96adf089e7f8d3e7",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/d9873a229ec46051ef6af54ba9d632806e8b30": "0336e08d5dd5fc5c6930bf220c018b0f",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c2/600ea8491e97b17acaab19c0ade441e068f8eb": "41ffa41ea1eae6f8d9f1a27b6789cd28",
".git/objects/ce/e3c5bb4ad9ca1b7e02e3391cc1cbba998308b7": "8e23cc0d8eea61c17a30b19ec3ccb417",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/db/f1c7c9328076f9144d7d68a388646690bd29b8": "cfb3ba280df61eb747616b6e0d365a29",
".git/objects/e9/18f078ad713431d5cdd2036f331cbeb5818244": "5bff21fb07a32b20f8139e3444ca2259",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/68ef92244aa3f04545aa650855867a007e95a7": "f8ce003a92df87d596e89cad06f05e6b",
".git/objects/ee/2a6aba4e68ce9c7e9e504004618431d560bc6c": "c91260a49ec0625b96ea663b00522a0c",
".git/objects/f1/899552f487ac00cf07c33ad16573feb491111f": "a82f4716dba93c8540f6dcb277b50ba9",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/9d0ab53b4512063c0c84d370368731380464e2": "aa0ae4195436f594f6215682f3b99df3",
".git/objects/fb/d9b406fb43107cf2584a804f4055dcaa8c82cc": "540bd8e269c4215ec9094e4083caae52",
".git/objects/ff/346d1b839e0288fd2f1f6d825064eca967ba0f": "1248175a08b0ed9def9563f75e05e65e",
".git/refs/heads/main": "6da8e4e5e5544a613df81333e1d3850c",
".git/refs/remotes/origin/main": "6da8e4e5e5544a613df81333e1d3850c",
"assets/AssetManifest.bin": "aaafa4b338619dc325fcd30358683fda",
"assets/AssetManifest.bin.json": "edfccb499c6bfc8bc3455469044f0886",
"assets/AssetManifest.json": "911eb0c35eba84e941ab8d0389f980f8",
"assets/assets/images/alcohol.jpg": "a8ef15483e6409df398953979f9dfd47",
"assets/assets/images/fruits.jpg": "e0195b02f4a0e72ebe8355847ca523bf",
"assets/assets/images/groceries.jpg": "8078eb3328207e780526f9502ed9ccd5",
"assets/assets/images/meat.jpg": "3fa788abaed22c92e036c26d5f048b2d",
"assets/assets/images/offer.jpg": "f24afc3ac230a2a443473224933ac18d",
"assets/assets/images/products/famous.jpg": "9f27d1268968aab443c3b13fe8bb3e2b",
"assets/assets/images/products/vodka.jpg": "af48820bdaf1f366da1d79371b665f26",
"assets/assets/images/products/wine.jpg": "ad7349a0551efd6851c1591861de61c3",
"assets/assets/images/products/wiskey.jpg": "379f6de100d9184cf4b2b3fc0297ca94",
"assets/assets/images/rice.jpg": "4b6338311d387fcb0976c0bd9e63cd38",
"assets/assets/images/s-l1600.jpg": "e82d96aee2e20ef71a41e3443723eb73",
"assets/assets/images/seafood.jpg": "77b12ce2e0cb7a230e4edbfc1a9fb24f",
"assets/assets/images/softdrinks.jpg": "02392829e3065d5601bb54a329eb2686",
"assets/assets/images/spices.jpg": "5825158f61db76bfcd1876adbe82acf7",
"assets/assets/images/vegetables.jpg": "ebfc15ea56547e447fa40d76eed09e14",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "f83a7aada2490c5c19b2a4b56b3be865",
"assets/NOTICES": "6e3020fa16264a91bb5d906ed833a967",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "00a0d5a58ed34a52b40eb372392a8b98",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "9dc533dce3b286b32841e929c1acba9b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "661dd65deeb6d5d995e2978416fdf7bf",
"/": "661dd65deeb6d5d995e2978416fdf7bf",
"main.dart.js": "bae0e3950141aadafebedd9a38fc9c39",
"manifest.json": "54a7110cea772f3ffeef96bbe1e7ab0d",
"version.json": "e63ab6ac9f9c735ba6d194dfc34a5be3"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
