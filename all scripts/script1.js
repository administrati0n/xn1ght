function sendForm(e){
var keyBox = document.search.key;
var val = keyBox.value;
if(val.length>5){
alert("The number of characters is greater than required. Try entering the text again.");
}   
else
alert("Sending text.");
document.search.action="Send_yes";
}
var sendButton = document;
// var sendButton = document.search.action;
sendButton.addEventListener("click", sendForm);
