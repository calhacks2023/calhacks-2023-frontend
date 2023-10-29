import './Ingredient.css'

function Ingredient(props) {

    return (
        <>
        <div className='ingredient-container'>
            <div>
                <div className='custom-checkbox'></div>

            </div>
            <p className={props.highlight ? 'highlight ingredient-text' : 'ingredient-text'}>
                {props.ingredient}
            </p>
        </div>
        </>
    )
}

export default Ingredient