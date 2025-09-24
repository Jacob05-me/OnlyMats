

function WriteComment(none){
    const targetElement = document.getElementById("comments-list");
    const formResults = document.getElementById("comment-form");
    const Display = '';
    targetElement.insertAdjacentHTML("afterbegin", Display)
}
function loadPastComments() {
    console.log("loadPastComments running")
    fetch('/OnlyMats/Ref/json/Comments.json')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            jsonComments = JSON.parse(data);
            const targetElement = document.getElementById("comments-list");
            for(comment in jsonComments.Comments){
                let replys = ''
                for(reply in comment.Replys){
                    replys = replys + '<br><div id="MainCommentContainer"><div id="commentContainer"><div id="CommentInfoContainer"><div id="CommentName">'+reply.User+'</div><div id="CommentTime">'+reply.Timecode+'</div></div><br><hr><div id="CommentContentContainer"><div id="CommentContents">'+reply.Text+'</div></div><div id="CommentIDContainer"><div id="CommentID">ID : '+reply.ID+'</div></div><hr>'
                }
                let Display = '<div id="MainCommentContainer"><div id="commentContainer"><div id="CommentInfoContainer"><div id="CommentName">'+comment.User+'</div><div id="CommentTime">'+comment.Timecode+'</div></div><br><hr><div id="CommentContentContainer"><div id="CommentContents">'+comment.Text+'</div></div><div id="CommentIDContainer"><div id="CommentID">ID : '+comment.ID+'</div></div><hr><div id="CommentReplyButtonContainer"><form id="reply-form"><div>Reply?</div><label for="reply-author">Name:</label><input type="text" id="reply-author" name="author" required><label for="reply-text">Comment:</label><textarea id="reply-text" name="comment" rows="1" required></textarea><button onclick="Writereply()" type="submit">Reply</button></form></div><hr><div>replys:</div><div id="reply-container">'+replys+'</div></div></div>'
                targetElement.insertAdjacentHTML("afterbegin", Display)
            }
        })
    console.log("loadPastComments ran")
}