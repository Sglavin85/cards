let textBoxListener = document.getElementById("textBox")
let textToPost;
let cardId = document.querySelectorAll("article").length + 1;
let btnPost = document.getElementById("createBtn")
let container = document.getElementById("container")
let deleteBtnCollector = document.getElementsByClassName("delete")

// Creates HTML to be input
function postText(textToPost, cardId){
    container.innerHTML +=
    `<article class="card" id="card--${cardId}">
        <div>${textToPost}</div>
        <div>
            <button id="delete--${cardId}" class="delete">Delete This Card</button>
        </div>
    </article`
}

//Listens to text input and pushes content into the function postText and if user hits enter the text submits the form

textBoxListener.addEventListener("keyup", event => {
    textToPost = event.target.value;
    if (event.keyCode === 13) {
        postText (textToPost, cardId);
        cardId = cardId + 1;
    }
    looper()
});

//posts the html to the dom, adds a new listener and adds 1 to the id for the next post

btnPost.addEventListener("click", () => {
    postText (textToPost, cardId);
    cardId = cardId + 1;
    looper();
});


//itereates over the existing delete buttons
function looper() {
for (i = 0 ; i < deleteBtnCollector.length; i++) {
    let articleId = deleteBtnCollector[i].id.slice(8)
    deleteBtnCollector[i].addEventListener("click", ()=>{
        document.getElementById(`card--${articleId}`).remove()
    })
};
}

//first looper runs on page load to make the posts that are hard coded work.

looper();