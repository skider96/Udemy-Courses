let post = {
    title : "Something",
    body : "Something",
    author : "Danail",
    views : 10,
    comments: {
        author: "Danail",
        body : 'something'
    },
    isLive : Boolean
};

post.isLive = true;

console.log(post);