
function WriteComment(form){
    var formData = new FormData(form)
    // output as an object
    console.log(Object.fromEntries(formData));

    // ...or iterate through the name-value pairs
    for (var pair of formData.entries()) {
        console.log(pair[0] + ": " + pair[1]);
    }
    const targetElement = document.getElementById("comments-list");

    var OldID = jsonComments.Data.LAST-ID
    var NewID = OldID + 1;
    var Name = formData["comment-author"];
    var NowDate = new Date(month, day, year, hours, minutes, seconds);
    var Text = formData["comment-text"];

    var obj = {};
    obj.push({"ID" : NewID, "User" : Name, "Timecode": NowDate, "Text":Text, "Replys":[]});
    var json = JSON.stringify(obj);
    var fs = require('fs')
    
    fetch('/OnlyMats/Ref/json/Comments.json')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            const jsonComments = JSON.parse(data);
            jsonComments.Data = json;
            fs.writeFile('/OnlyMats/Ref/json/Comments.json', jsonComments, 'utf-8', callback);
        })

    const Display = '';
    targetElement.insertAdjacentHTML("afterbegin", Display)
}

function parseObject(){
        var obj = {
            "Comments": [
                {
                    "ID": 1,
                    "User": "Jacob",
                    "Timecode": "1/12/25 1:12pm",
                    "Text": "This is a a test comment. [1]",
                    "Replys": [
                        {
                            "ID": 3,
                            "User": "Jacob",
                            "Timecode": "1/15/25 12:00pm",
                            "Text": "This is a a test comment. [1]"
                        }
                    ]
                },
                {
                    "ID": 2,
                    "User": "Jacob",
                    "Timecode": "1/12/25 1:50pm",
                    "Text": "This is a a test comment. [2]",
                    "Replys": []
                }
            ]
        }
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            var item = obj[key];
            if(typeof item == 'string'){
                console.log(key + ' -> ' + obj[key]);
            }
            else if(typeof item == 'object'){
                console.log(key + ' -> ' + obj[key]);
                var x = JSON.stringify(obj[key])
                var y = JSON.parse(x)
                console.log(key + ' -> ' + x);
                console.log(key + ' -> ' + y.ID);
            }
            else{
                console.log(key + ' -> ');
                parseObject(item);
            }
        }
    }
}

// // onload = loadPastComments();
// var x = document.getElementById("comment-form");
// x.addEventListener("submit", function (e){
//     e.preventDefault();
//     WriteComment(e.target)
// })