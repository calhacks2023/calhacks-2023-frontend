import "./LoadingPage.css";

import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import remy_loading from "../assets/remy_loading.gif";

function LoadingPage(props) {
  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // POST request using fetch inside useEffect React hook
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        recipe: state.recipe,
        restrictions: state.restrictions,
      }),
    };

    console.log(requestOptions);

    fetch(
      "http://localhost:10000/submitrecipe", // change to render backend later
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        const requestOptionsDatabase = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            recipe: data.ingredients,
            restrictions: state.restrictions,
          }),
        };
        fetch("http://localhost:10000/insertrecipe", requestOptionsDatabase);
        console.log("Inserted recipe.");
        fetch("http://localhost:10000/searchrecipe", requestOptionsDatabase)
          .then((searchData) => searchData.text())
          .then((newText) =>
            navigate("/new_recipe", {
              state: {
                ingredients: data.ingredients,
                changes: data.changes,
                newRecipe: newText,
              },
            })
          );
      });

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);

  console.log(state.data);

  return (
    <div className="loading-page-container">
      <h2 className="hang-tight">Hang Tight!</h2>
      <img src={remy_loading} alt="A rat running around a stock pot" />
      <p className="loading-description">
        {" "}
        Our team is working hard preparing your recipe
      </p>
    </div>
  );
}
export default LoadingPage;
