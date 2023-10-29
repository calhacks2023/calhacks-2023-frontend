import './LoadingPage.css'

import { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';

import remy_loading from '../assets/remy_loading.gif'

function LoadingPage(props) {

    const { state } = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        // POST request using fetch inside useEffect React hook
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
            body: JSON.stringify(
                {
                    recipe: state.recipe,
                    restrictions: state.restrictions
                }
            )
        };

        console.log(requestOptions)

        fetch('http://127.0.0.1:8000/submitrecipe', requestOptions)
            .then(response => response.json())
            .then((data) => navigate('/new_recipe', { state: { ingredients: data.ingredients, changes: data.changes} }))

        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    console.log(state.data)

    return (
        <div className='loading-page-container'>
            <h2 className='hang-tight'>Hang Tight!</h2>
            <img src={remy_loading} alt='A rat running around a stock pot' />
            <p className='loading-description'> Our team is working hard preparing your recipe</p>
        </div>
    )
}
export default LoadingPage