

function ConstructorFunction(title, body, author) {
this.title = title;
this.body = body;
this.author = author;
this.views = 0;
this.comments = [];
this.isLive = false;
}
let constructedFunction = new ConstructorFunction('something', 'nehto si', 'dani');
console.log(constructedFunction.title);
