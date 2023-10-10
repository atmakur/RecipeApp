import React, { useState } from "react";

function RecipeCreate({handleCreateRecipe}) {
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photo, setPhoto] = useState("");
  //const [rating, setRating] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");

  const handleChangeName = (event) => setName(event.target.value);
  const handleChangeCuisine = (event) => setCuisine(event.target.value);
  const handleChangePhoto = (event) => setPhoto(event.target.value);
  const handleChangeIngredients = (event) => setIngredients(event.target.value);
  const handleChangePreparation = (event) => setPreparation(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    handleCreateRecipe({name, cuisine, photo, ingredients, preparation});
    setName("");
    setCuisine("");
    setPhoto("");
    setIngredients("");
    setPreparation("");
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                type="text"
                value={name}
                name="name"
                onChange={handleChangeName}
              />
            </td>
            <td>
              <input
                type="text"
                value={cuisine}
                name="cuisine"
                onChange={handleChangeCuisine}
              />
            </td>
            <td>
              <input
                type="text"
                value={photo}
                name="photo"
                onChange={handleChangePhoto}
              />
            </td>
            <td>
              <textarea
                value={ingredients}
                name="ingredients"
                onChange={handleChangeIngredients}
              />
            </td>
            <td>
              <textarea
                value={preparation}
                name="preparation"
                onChange={handleChangePreparation}
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
