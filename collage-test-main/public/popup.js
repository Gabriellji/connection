console.log("popup.js");
let imagesToStore = [];

const askForImages = () => {
  chrome.tabs.query({ currentWindow: true, active: true }, tabs => {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {
      message: "give me pictures, please",
    });
  });
};
/* PART 8. I AM RECIEVING THE PICTURES FROM CONTENT */
/* and deleting localstorage */
const recieveImages = async recieved => {
  localStorage.clear();
  imagesToStore = JSON.parse(recieved.message);
  console.log(imagesToStore);
};
/* part 9. passing stuff to localstorage */
const storeImages = async () => {
  imagesToStore.map((image, index) =>
    window.localStorage.setItem(
      `${index}`,
      JSON.stringify({
        caption: image.caption,
        created: image.created,
        filename: image.filename,
        origin: image.origin,
        alt: image.alt,
        size: {
          width: image.size.width,
          height: image.size.height,
        },
      })
    )
  );
  console.log(window.localStorage);
};
/* part 10. initializing */
const initialize = async () => {
  imagesToStore = [];
};
/* PART 2. I CLICK ON THE BOTTON */
window.addEventListener("load", () => {
  document.getElementById("getImages").addEventListener("click", () => {
    /* PART 3. I NEED TO SEND A MESSAGE TO CONTENT.JS, AND ASK HIM TO SEND ME IMAGES */
    askForImages();
  });
});
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  recieveImages(message).then(storeImages().then(initialize()));
});
/* PART 9 I AM SAVING THOSE PICTURES INSIDE LOCALHOST */

/* SEND MESSAGES + RECIEVING MESSAGES. WORKING COUPLES */

/* RECIEVE      WORKED FROM BACKGROUND TO CONTENT
chrome.runtime.onMessage.addListener(function (
    message,
    sender,
    sendResponse
  ) {
    images = message.message;
    alert(images);
  });

  SEND
  let images=[{name:"banana", color:"yellow"},{name:"eggplant", surname:"purple"}]
chrome.runtime.sendMessage({from:"content",message:JSON.stringify(images)}); */

/* from popup to content */
/* send:
chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {"message": "start"});
       });
       recieve
       chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "start" ) {
     alert("start");console.log("started")
         }
  }
);
       */
