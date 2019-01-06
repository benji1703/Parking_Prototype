(function(window, undefined) {
  var dictionary = {
    "c8ac9a83-b2ca-46da-a83e-50a0aca15cef": "MyParkingHistory",
    "12072a13-bca9-4a5b-a750-79dbbaef7e7f": "myInFo",
    "fdb060c0-c0bd-4307-930a-f625c774529c": "Vacating 1",
    "87c2b0f3-a91c-40d5-a49e-2e92aeb84863": "Find A Spot",
    "2e5eb7b7-cc11-4f3d-a8d8-d6249f94d78a": "Waze",
    "bdde8bdd-9a87-4bea-9fca-13dd53a1dda8": "EditMyCars",
    "50a0c892-4f2e-4ea7-86f2-42b26a088386": "MyCars",
    "41a52769-efe0-47a8-89ad-c6fadd665a41": "Find A Parking Lot",
    "7cb6e2ef-86b9-4427-bc4b-bd7c38cea2ea": "Kind Of Parking",
    "51628ec7-0c1a-4963-aa15-14fa52b81bf3": "Landing",
    "381443bb-5b66-4496-8b1b-3ad4cff247bb": "ThankYouPage",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Iphone",
    "35297cda-fd62-4efe-9530-043a91967335": "SignIn",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);