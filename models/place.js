class Place {
    constructor(title, imageUri, address, location) {
        this.title = title;
        this.imageUri = imageUri;
        this.address = address;
        this.location = location;
        this.id = new Date().toString() + Math.random().toString(); //we use this to get a unique id
    }
}