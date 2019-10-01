// Global Variables
var bookmarks = [];
var bookmarkCounter = 0;
var totalRead = 0;

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

// Function for eventListener on the right section pertaining to card clicks
function eventHandlerRight(event) {
  event.preventDefault();
    if (event.target.classList.contains('delete-btn')) {
      removeCard(event);
    }

    if (event.target.classList.contains('read-btn')) {
      changeReadStatus(event);
      changeReadStyling()
    }
}

// Function for dynamically generating winner cards
function insertCard() {
  var titleValue = document.querySelector('.website-title').value;
  var urlValue = document.querySelector('.website-url').value;
  var insertArticle = document.createElement('article');
    document.querySelector('.enter-btn').style.display = 'block';
    insertArticle.classList.add('bookmark-card');
    document.querySelector('.section-right').appendChild(insertArticle);
    instantiateBookmark();
    insertArticle.innerHTML =
    `
      <header class="card-header">
        <h2>${titleValue}</h2>
      </header>
      <div class="card-middle">
        <a href="https://${urlValue}" target="_blank" class="card-url">${urlValue}</a>
      </div>
      <footer class="card-footer">
        <span class="read-btn" data-id="${bookmarks[0].id}">Read</span>
        <span class="delete-btn" data-id="${bookmarks[0].id}">Delete</span>
      </footer>
    `;
}

// Function for instantiating new bookmarks and pushing them into the bookmarks array
function instantiateBookmark() {
  var titleValue = document.querySelector('.website-title').value;
  var urlValue = document.querySelector('.website-url').value;
  var bookmark = new Bookmark(Date.now(), titleValue, urlValue);
    bookmarks.unshift(bookmark);
    bookmarkCounter++;
    setInStorage(bookmark);
}

// Function for matching clicked card to its instance in the bookmarks array
function findId() {
  for (var i = 0; i < bookmarks.length; i++) {
    if (event.target.dataset.id == bookmarks[i].id) {
      return bookmarks[i];
    }
  }
}

// Function for removing card on delete click
function removeCard(event) {
  var currentId = findId();
    event.target.closest('.bookmark-card').remove();
    bookmarks.splice(bookmarks.indexOf(currentId), 1);
    bookmarkCounter--;
    removeJustOneItemFromStorage()
}

// Function for invoking the toggleRead method on the instance representing the clicked card
function changeReadStatus() {
  var currentId = findId();
    currentId.toggleRead();
}

// Function for altering CSS styling on click of the read btn
function changeReadStyling() {
  if (event.target.classList.contains('read')) {
    event.target.classList.remove('read');

  } else {
    event.target.classList.add('read');
  }
}

// Function for storing card object
function setInStorage(bookmark) {
  var storedString = JSON.stringify(bookmark);
    window.localStorage.setItem(bookmarks[0].id, storedString);
}

function removeJustOneItemFromStorage() {
  if (localStorage.length === 1);
    localStorage.clear();
}
