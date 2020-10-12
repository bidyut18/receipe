import React, { useEffect, useState } from 'react';
import Recipe from './recipe';
import './App.css';

const App = () => {
  const APP_ID = 'ID';
  const APP_KEY = 'APP_KEY';


  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('Mango')

  useEffect(() => {
    getRecipes();
  }, [query]);
  const getRecipes = async () => {
    const response = await fetch(
      `https://XYZABC.../search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };
  const updatesearch = e => {
    setSearch(e.target.value);
  }


  const getsearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }
  return (
    <div className="App">
      <form onSubmit={getsearch} className='search-form'>
        <input className='search-bar' type="text" value={search} onChange={updatesearch} />
        <button className='search-button' type='submit'>
          Search
          </button>
      </form>
      <div className='recipes'>
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>

    </div>
  )
}
export default App;
