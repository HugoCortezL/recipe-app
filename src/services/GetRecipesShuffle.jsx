import {loadRecipes} from './Recipes'


function shuffle(arr){
    for (var a = 0; a < arr.length; a++) {
        var x = arr[a];
        var y = Math.floor(Math.random() * (a + 1));
        arr[a] = arr[y];
        arr[y] = x;
    }
    return arr
}

export function getRecipesShuffle(recipeName){
    const recipes = loadRecipes()
    var result = shuffle(recipes)
    return result
}