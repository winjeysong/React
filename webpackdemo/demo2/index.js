require("style-loader!css-loader!./index.css");
document.body.appendChild(document.createElement("div"));
document.getElementsByTagName("div")[0].innerHTML="打包成功！"