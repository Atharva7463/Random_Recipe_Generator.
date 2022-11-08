const getMealBtn = document.getElementById('get_meal');

const mealContainer = document.getElementById('meal')


getMealBtn.addEventListener('click', () => {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(res => res.json())
        .then(res => {
            cerateMeal(res.meals[0]);

        });
});

function cerateMeal(meal) {

    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
        if (meal[`strIngredient${i}`]) {
            ingredients.push(
                `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]} `
            )
        }
        else {
            break;
        }
    }


    console.log(ingredients)





    mealContainer.innerHTML = `
        <div class = "row">
            <div class = "coloums one">
                <img src = "${meal.strMealThumb}" />
                <p><strong>Category: </strong>${meal.strCategory}</p>

                <p><strong>Area: </strong>${meal.strArea}</p>

                <p><strong>Tags: </strong>${meal.strTags}</p>

                <h5>Ingredients</h5>
                <ul>

                    ${ingredients.map(ingredient => `
                        <li>${ingredient} </li>
                    `).join(' ')}

                </ul>
            </div>
            
            <div class = "columns two">
                <h4>${meal.strMeal} </h4>
                <p class = "instructions">${meal.strInstructions}</p>



            </div>
        </div>
    `;
}

