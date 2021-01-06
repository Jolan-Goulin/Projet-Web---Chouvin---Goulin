function outputDrink(drinkarray , val)
{    
    var Cont = 0;
    var drink = drinkarray
    var text = '';
    console.log(drink);
    let index = 1;
    let ingredientArray = [];
    while (drink['strIngredient' + index]) {
        ingredientArray.push({name: drink['strIngredient' + index], amount: (drink['strMeasure' + index]||'').trim() ? drink['strMeasure' + index]: "A dash "});
    index++;
    }

    text += `<br/><br/>`
    text += `<b>Drink: </b><br/>${drink.strDrink}<br/><br/>`;
    text += `<b>Glass: </b><br/>${drink.strGlass}<br/><br/>`;
    text += '<b>Ingredients:</b></br>';
    ingredientArray.forEach((ingredient) => {
        text += `<li>${ingredient.amount} of ${ingredient.name}</li>`;
    });

    text += `</br><b>Instructions: </b></br>${drink.strInstructions}<br/>`;

    $( "#result"+ val ).html(text);     

    
}


function downloadCocktail(drink, val){
    let cocktailName = drink;
    console.log('Downloading details for: ', cocktailName);
    var cocktail = encodeURIComponent(cocktailName);
    $.ajax({
        type: 'GET',
        url:  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + cocktail,
        timeout:5000,
        crossDomain: true,
        dataType:'json',
        success: function(result, status){
            if (!result.drinks || result.drinks.length <= 0) {
                return;
            }

            // Get the first drink.
            var drinks = result.drinks[0];
            outputDrink(drinks, val)
            return drinks;
        },
        error: function (errorMessage) {
            console.error(errorMessage);
        }
    });
}

function main(){
    var c;
    for (c = 0; c < 4 ; c++) {
        var val = 3-c;
        $( "#result"+ val ).html('No drinks found !');
    } 
    let cocktailName = $('#cocktail').val();
    console.log('Downloading details for: ', cocktailName);
    var cocktail = encodeURIComponent(cocktailName);
    $.ajax({
        type: 'GET',
        url:  'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + cocktail,
        timeout:5000,
        crossDomain: true,
        dataType:'json',
        success: function(result, status){
            if (!result.drinks || result.drinks.length <= 0) {
                return;
            }

            // Get the first drink.
            var drink1 = downloadCocktail(result.drinks[0].strDrink, 1);
            var drink2 = downloadCocktail(result.drinks[1].strDrink, 2);
            var drink3 = downloadCocktail(result.drinks[2].strDrink, 3);
    
  
        },
        error: function (errorMessage) {
            console.error(errorMessage);
        }
    });
}


function mainAl(){
    var c;
    for (c = 0; c < 4 ; c++) {
        var val = 3-c;
        $( "#result"+ val ).html('No drinks found !');
    } 
    let cocktailName = $('#cocktail').val();
    console.log('Downloading details for: ', cocktailName);
    var cocktail = encodeURIComponent(cocktailName);
    $.ajax({
        type: 'GET',
        url:  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + cocktail,
        timeout:5000,
        crossDomain: true,
        dataType:'json',
        success: function(result, status){
            if (!result.drinks || result.drinks.length <= 0) {
                return;
            }

            // Get the first drink.
            var drink1 = downloadCocktail(result.drinks[0].strDrink, 1);
            var drink2 = downloadCocktail(result.drinks[1].strDrink, 2);
            var drink3 = downloadCocktail(result.drinks[2].strDrink, 3);
    
  
        },
        error: function (errorMessage) {
            console.error(errorMessage);
        }
    });
}