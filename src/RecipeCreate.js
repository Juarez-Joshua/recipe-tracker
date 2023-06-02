import React, { useState } from "react";

// TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
// TODO: Add the required input and textarea form elements.
// TODO: Add the required submit and change handlers
function RecipeCreate({recipes, setRecipes}) {
  const initalData = {
    name:'',
    cuisine:'',
    photo:'',
    ingredients:'',
    preparation:'',
  }
  const [formData, setFormData] = useState(initalData);
  const changeHandler = ({target}) =>{
    setFormData({...formData,[target.name]: target.value});
  }
  const submitHandler = (event) =>{
    event.preventDefault();
    setRecipes([...recipes,formData]);
    setFormData({...initalData});
    console.log(recipes);
  }
  console.log(recipes);
  return (
    <form name="create" onSubmit={submitHandler}>
      <table>
        <tbody>
          <tr>
            <td>
            <input name="name" type="text" placeholder='Name'onChange={changeHandler}></input>  
            </td>
            <td>
            <input name ="cuisine" type="text" placeholder='Cuisine'onChange={changeHandler}></input>  
            </td>
            <td>
            <input name="photo" type="url" placeholder='URL'onChange={changeHandler}></input>  
            </td>
            <td>
            <textarea name="ingredients" type="text" placeholder='Ingredients' onChange={changeHandler}></textarea>  
            </td>
            <td>
            <textarea name="preparation" type="text" placeholder='Preparation' onChange={changeHandler}></textarea>  
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
