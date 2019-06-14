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
