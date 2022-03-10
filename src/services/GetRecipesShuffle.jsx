import {loadRecipes} from './Recipes'

/*
This function can return a shuffled list or a alphabetic sort list
*/

function shuffle(arr){
    for (var a = 0; a < arr.length; a++) {
        var x = arr[a];
        var y = Math.floor(Math.random() * (a + 1));
        arr[a] = arr[y];
        arr[y] = x;
    }
    return arr
}

function compare_lname( a, b )
    {
    if ( a.name.toLowerCase() < b.name.toLowerCase()){
        return -1;
    }
    if ( a.name.toLowerCase() > b.name.toLowerCase()){
        return 1;
    }
    return 0;
}

export function getRecipesShuffle(recipeName){
    const recipes = loadRecipes()
    var result = recipes.sort(compare_lname);
    //var result = shuffle(recipes)
    return result
}