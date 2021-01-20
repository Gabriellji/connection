console.log("content.js");

let imagesToSend = [];
let imagesOnBrowser = []; /* need to clear this later */

const getImages = async () => {
  /* part 5 i first get images from broswer */
  imagesOnBrowser = Array.from(document.querySelectorAll("img"));
  /* reinitialize images to send */
  imagesToSend = [];
};

const sortImages = async () => {
  /* part 6 and then i decide which one to save as imagesToSend */
  imagesOnBrowser.map(
    image =>
      (imagesToSend = [
        ...imagesToSend,
        {
          filename: "name",
          caption: "caption",
          origin: image.src,
          size: { width: "", height: "" },
          created: "",
          alt:image.alt
        },
      ])
  );
  console.log(imagesToSend);
};
const sendImages = async () => {
  /* patt 7. sending images to popup.js as a string */
  chrome.runtime.sendMessage({from:"content",message:JSON.stringify(imagesToSend)});
};
const initialize = async () => {
  imagesToSend = [];
  imagesOnBrowser = [];
};

/* PART 4. WHEN I RECIEVE A MESSAGE FROM POPUP.JS I DO STUFF */
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  request.message === "give me pictures, please" &&
    getImages().then(sortImages().then(sendImages().then(initialize())));
});
