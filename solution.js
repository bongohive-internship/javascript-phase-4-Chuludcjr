// your solution should go here
// for demo purposes use the console for any out you will need.
// Solutions to 1
 var recipe = {
    'title': 'Cooking Beef',
    'servings': 2,
    'ingredients': ['Beef','Cooking oil ', 'Tomato ', 'Onion']
};

console.log(recipe.title);
console.log('Servings: ' + recipe.servings);
console.log('Ingredients:');

//The loop outputs all the items in the array
for(let todo of recipe.ingredients){
    console.log(todo);
}

//solutions to 2
var books = [
    {title: 'Ticklish Sansation',
     author: 'Gideon Phiri',
     //variable book status to store boolean
     bookStatus: true
    },
    {title: 'Imitation is limitation',
    author: 'John Mason',
    //variable book status to store boolean
    bookStatus: false
    }];
    //loop to output the elements in the array
  for (var i = 0; i < books.length; i++) {
    var book = books[i];
    var bookInfo = book.title + ' by ' + book.author;
    //if & else to check if book status is true or false to give output
    if (book.bookStatus) {
      console.log('You already read ' + bookInfo);
    } else {
      console.log('You still need to read ' + bookInfo);
    }
  }
