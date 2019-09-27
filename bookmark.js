class Bookmark {
  constructor(id, title, url) {
    this.id = id;
    this.title = title;
    this.url = url;
    this.read = false
  }

  toggleRead() {
    if (this.read === false) {
      this.read = true;
    }

    if (this.read === true) {
      this.read = false;
    }
  }
}
