function comments(input) {

  let commentsObj = {};
  let listOfUsers = [];
  let listOfArticles = [];

  for (const commandLine of input) {

    if ( commandLine.includes("user ") ) {
    let user = commandLine.replace("user ", "");
    listOfUsers.push(user)
    }
    else if ( commandLine.includes("article ") ) {
      let article = commandLine.replace("article ", "");
      listOfArticles.push(article);
    }
    else {
      let [leftSide, rightSide] = commandLine.split(": ");
      let [userName, articleName] = leftSide.split(" posts on ");
      let [commentTitle, commentContent] = rightSide.split(", ");

      if ( listOfUsers.includes(userName) && listOfArticles.includes(articleName) ) {
        // console.log(userName, articleName);
        let obj = {};

        obj[userName] = { userName, commentTitle, commentContent };

        // leadersObj.hasOwnProperty(leader)

        commentsObj[articleName] = obj[userName];
      }
    }

  }

  sorting(commentsObj);

  function sorting(commentsObj) {
    let entries = Object.entries(commentsObj);
    console.log(entries);
    for (const [articleName, comments] of entries) {
      console.log(articleName);
      console.log(comments);
    }
  }


  console.log("====================================");

  console.table(commentsObj);
}
comments([
  "user aUser123",
  "someUser posts on someArticle: NoTitle, stupidComment",
  "article Books",
  "article Movies",
  "article Shopping",
  "user someUser",
  "user uSeR4",
  "user lastUser",
  "uSeR4 posts on Books: I like books, I do really like them",
  "uSeR4 posts on Movies: I also like movies, I really do",
  "someUser posts on Shopping: title, I go shopping every day",
  "someUser posts on Movies: Like, I also like movies very much",
]);