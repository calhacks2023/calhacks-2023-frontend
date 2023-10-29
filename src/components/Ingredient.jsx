import './Ingredient.css'

function Ingredient(props) {

    return (
        <>
        <div className='ingredient-container'>
            <div className='custom-checkbox'></div>
            <p className={props.highlight ? 'highlight ingredient-text' : 'ingredient-text'}>
                {props.ingredient}
            </p>
        </div>
        </>
    )
}

export default Ingredient