import './NewRecipe.css'
import { useNavigate } from 'react-router'

function NewRecipe() {

    const navigate = useNavigate();

    function goToPrompt() {
        navigate('/')
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
                        <h2>Chef Notes</h2>
                        <p>How can you expect this recipe to differ from the original?</p>
                    </div>

                    <div className='recipe-component-box'>
                        <p className='chef-notes-text'>
                            TO BE COMPLETED
                        </p>
                    </div>
                </div>


                <div className='recipe-component-container'>
                    <div className='recipe-component-heading'>
                        <h2>Ingredients</h2>
                        <p>Mouse over your substitutions to learn more</p>
                    </div>

                    <div className='recipe-component-box'>
                    </div>
                </div>

                <button className='btn-grad' onClick={goToPrompt}>
                    Try Another Recipe
                </button>

            </div>

        </>
    )
}

export default NewRecipe