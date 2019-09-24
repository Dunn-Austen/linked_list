// Global Variables
var titleValue = document.querySelector(".website-title").value;
var urlValue = document.querySelector(".website-url").value;

// EventListeners
document.querySelector(".section-left").addEventListener('click', eventHandlerLeft);
document.querySelector(".section-right").addEventListener('click', eventHandlerRight)


// Card generating function for eventListener on the left section
function eventHandlerLeft(event) {
  event.preventDefault();
  if (event.target.classList.contains("enter-btn")) {
    insertCard(titleValue, urlValue);
  }
}

// // Function for eventListener on the right section, pertains to card clicks
function eventHandlerRight(event) {
  event.preventDefault();
  if (event.target.classList.contains("delete-btn")) {
    removeCard();
  }
  // if (event.target.classList.contains("read-btn") {
  //   removeCard();
  // }
}



// Function for dynamically generating winner cards
function insertCard(titleValue, urlValue) {
  // Is it unecessary to include these parameters?
  // Code will have to be rejiggered to include instantiation of the Bookmark instances
  var insertArticle = document.createElement("article");
  document.querySelector('.enter-btn').style.display = 'block';
  insertArticle.classList.add('bookmark-card');
  document.querySelector('.section-right').appendChild(insertArticle);
  insertArticle.innerHTML =
  `
    <header class="card-header">
      <h2>${titleValue}</h2>
    </header>
    <div class="card-middle">
      <p class="card-url">${urlValue}</p>
    </div>
    <footer class="card-footer">
      <span class="read-btn">Read</span>
      <span class="delete-btn">Delete</span>
    </footer>
  `;
};

// Function for removing card via the delete btn
function removeCard() {
  event.target.closest('.bookmark-card').remove();
};

// Function for marking card as Read
function markRead() {

}
