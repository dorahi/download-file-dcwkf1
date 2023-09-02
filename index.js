// Import stylesheets
import './style.css';

// define the files to download
// html file
var htmlFilePath = "./index.html";
var htmlFile = document.querySelector("#htmlFile");
htmlFile.href = htmlFilePath;

// js file
var jsFilePath = "./index.js";
var jsFile = document.querySelector("#jsFile");
jsFile.href = jsFilePath;


// listen user interaction - download
htmlFile.addEventListener("click", function(e){
  downloadFileTagging(e)
  })
jsFile.addEventListener("click", function(e){
  downloadFileTagging(e)
  }) 

// tagging plan
function downloadFileTagging(e){
  window["dataLayer"]=window["dataLayer"]||[];
  var fileHref = e.srcElement.parentElement.href.replace("https://", "")
  var fileType = getFileType(fileHref)
  var json = {
    "event": "uaevent",
    "eventAction": fileType,
    "eventCategory": "download",
    "eventLabel": fileHref,
    "ecommerce": undefined
  }
  dataLayer.push(json)

  // only for demo
  var result = document.querySelector("#result");
  json.ecommerce = null;
  var jsonString = JSON.stringify(json, null, 7).replace("null","undefined")
  json.ecommerce = undefined;
  result.textContent = "dataLayer.push(" + jsonString + ")"

}

// utils to define file type
function getFileType(file){
  var type = "unknown";
  var htmlPattern = /\.html$/gi;
  var jsPattern = /\.js$/gi;
  if(htmlPattern.test(file)){
    type = "html";
  }
  if(jsPattern.test(file)){
    type = "javascript";
  }
  return type;
}