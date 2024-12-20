// src/components/IngredientList.jsx
const IngredientList = ({ ingredients, addToBurger }) => {

    return (
    <ul>
        {ingredients.map((ingredient, index) => (
            <li style={{backgroundColor: ingredient.color}} key={index}>
                {ingredient.name}
                <button onClick={() => addToBurger({ name: ingredient.name, color: ingredient.color})} style={{color: "white"}}>+</button>
            </li>
        ))}
    </ul>
    )
  };
  
  export default IngredientList;