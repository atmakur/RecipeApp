import React from "react";
import "./App.css"

function RecipeView({recipe, deleteHandle}) {
    return (
        <tr>
            <td><p>{(recipe.name)}</p></td>
            <td><p>{(recipe.cuisine)}</p></td>
            <td><p>{(<img alt="" src={recipe.photo} />)}</p></td>
            <td className="content_td"><p>{(recipe.ingredients)}</p></td>
            <td className="content_td"><p>{(recipe.preparation)}</p></td>
            <td><button onClick={deleteHandle} name="delete">Delete</button></td>
        </tr>
    );
}

export default RecipeView;
