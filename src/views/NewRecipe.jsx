import Ingredient from '../components/Ingredient';
import './NewRecipe.css'
import { useNavigate, useLocation } from 'react-router'

function NewRecipe() {

    const navigate = useNavigate();
    const { state } = useLocation();

    console.log("New Recipe")
    console.log(state.ingredients)
    console.log(state.changes)

    function goToPrompt() {
        navigate('/')
    }

    const generateIngredients = (ingredientString) => {
        const ingredientsArray = ingredientString.split(',').map((ingredient, index) => {
          const isHighlighted = ingredient.trim().startsWith('*');
          const ingredientText = isHighlighted ? ingredient.slice(1).trim() : ingredient.trim();
          return (
            <Ingredient ingredient={ingredientText} highlight={isHighlighted} />
          );
        });
      
        return ingredientsArray;
    }


    return (
        <>
            <div className='new-recipe-container'>
                <div className='new-recipe-header'>
                    <p className='let-them-cook-title'>Let Them Cook</p>
                    <h1>Your Customized Recipe</h1>
                </div>

                <div className='recipe-component-container'>
                    <div className='recipe-component-heading'>
                        <h2>Ingredients</h2>
                        <p>Substituted ingredients are highlighted in yellow!</p>
                    </div>

                    <div className='recipe-component-box'>
                        <div className='ingredients'>
                        { generateIngredients(state.ingredients) }
                        </div>
                    </div>
                </div>

                <div className='recipe-component-container'>
                    <div className='recipe-component-heading'>
                        <h2>Chef Notes</h2>
                        <p>How can you expect this recipe to differ from the original?</p>
                    </div>

                    <div className='recipe-component-box'>
                        <p className='chef-notes-text'>
                            {state.changes}
                        </p>
                    </div>
                </div>

                <button className='btn-grad' onClick={goToPrompt}>
                    Try Another Recipe
                </button>

                <div className="recipe-component-container">
                    <div className="recipe-component-heading">
                        <h2>Another Chef Special</h2>
                        <p>Here's a similar recipe from our database!</p>
                    </div>
                    
                    <div className="recipe-component-box">
                        <p className="chef-notes-text">
                            {state.newRecipe}
                        </p>
                    </div>
                </div>

            </div>

        </>
    )
}

export default NewRecipe