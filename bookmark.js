class Bookmark {
  constructor(id, title, url) {
    this.id = id;
    this.title = title;
    this.url = url;
    this.read = false
  }
  
  toggleRead() {
    // This method should be invoked when someone changes whether a Bookmark has been read or not
    // This method should update the read property on the Bookmark
  }
}
