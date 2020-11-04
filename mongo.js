console.log("are you working?")
// ✔️ ⏱️ 💻 😉  📗🌳 💯 ✨
/*
✨ query all comments in posts that are less than 5 and greater than 0
db.getCollection('posts').find({
    $and: [
    {comments: {$lt: 5}},
    {comments: {$gt: 0}}
    ]})

*/

/*
✨ query posts with shared as true OR tags "programming"
db.getCollection('posts').find({
    $or: [
    {shared: true},
    {tags: "programming"}
    ]})

*/