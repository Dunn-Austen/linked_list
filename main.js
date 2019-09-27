// Global Variables
var bookmarks = [];

// EventListeners
document.querySelector('.section-left').addEventListener('click', eventHandlerLeft);
document.querySelector('.section-right').addEventListener('click', eventHandlerRight);


// Card generating function for eventListener on the left section
function eventHandlerLeft(event) {
  event.preventDefault();
  var titleValue = document.querySelector('.website-title').value;
  var urlValue = document.querySelector('.website-url').value;
    if (event.target.classList.contains('enter-btn')) {
      insertCard();
    }
}

// Function for disabling / enabling enter btn invoked onkeydown of input elements
function disableBtn() {
  var titleValue = document.querySelector('.website-title').value;
  var urlValue = document.querySelector('.website-url').value;
    if (titleValue.length && urlValue === 0 || urlValue.length === 0) {
    document.querySelector('.enter-btn').disabled = true;

    } else if (titleValue.length && urlValue != 0 || urlValue.length != 0) {
      document.querySelector('.enter-btn').disabled = false;
    }
}

// // Function for eventListener on the right section, pertains to card clicks
function eventHandlerRight(event) {
  event.preventDefault();
  if (event.target.classList.contains('delete-btn')) {
    removeCard(event);
  }

  if (event.target.classList.contains('read-btn')) {
    changeReadStatus(event);
  }
}

// Function for dynamically generating winner cards
function insertCard() {
  // Is it unecessary to include these parameters?
  // Code will have to be rejiggered to include instantiation of the Bookmark instances
  var titleValue = document.querySelector('.website-title').value;
  var urlValue = document.querySelector('.website-url').value;
  var insertArticle = document.createElement('article');
  document.querySelector('.enter-btn').style.display = 'block';
  insertArticle.classList.add('bookmark-card');
  document.querySelector('.section-right').appendChild(insertArticle);
  insertArticle.innerHTML =
  `
    <header class="card-header">
      <h2>${titleValue}</h2>
    </header>
    <div class="card-middle">
      <a href="https://${urlValue}" target="_blank" class="card-url">${urlValue}</a>
    </div>
    <footer class="card-footer">
      <span class="read-btn">Read</span>
      <span class="delete-btn">Delete</span>
    </footer>
  `;
  instantiateBookmark();
};

// Function for instantiating new bookmarks and pushing them into an array
function instantiateBookmark() {
  var titleValue = document.querySelector('.website-title').value;
  var urlValue = document.querySelector('.website-url').value;
  var bookmark = new Bookmark();
    bookmark.id = Date.now();
    bookmark.title = titleValue;
    bookmark.url = urlValue;
    bookmarks.push(bookmark);
    console.log(bookmarks);
}

// Function for removing clicked card via the delete btn
// Needs to be adjusted so that the bookmarks array is impacted as well (Same core problem of getting the clicked ID to match the specific object id within the array)
function removeCard(event) {
  event.target.closest('.bookmark-card').remove();
};

// Function for marking card as Read
function changeReadStatus(event) {
  for (var i = 0; i < bookmarks.length; i++) {
    if (bookmarks[i].id = this.id) {
      bookmarks[i].toggleRead();
      console.log(bookmarks[i]);
    }
  }

    if (event.target.classList.contains('read')) {
      event.target.classList.remove('read');

    } else {
      event.target.classList.add('read');
    }
}
