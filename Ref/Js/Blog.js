const response = await fetch('/OnlyMats/Ref/json/Comments.json');
const json = await response.json();

function WriteComment(none){
    const targetElement = document.getElementById("comments-list");
    const formResults = document.getElementById("comment-form");
    const Display = '';
    targetElement.insertAdjacentHTML("afterbegin", Display)
}
onload = function loadPastComments(){
    //Load Comments from json file Coments.json
}