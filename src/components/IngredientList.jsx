// src/components/IngredientList.jsx
const IngredientList = (props) => {

    return (
    <ul>
        {props.ingredients.map((ingredient, index) => (
            <li style={{backgroundColor: ingredient.color}} key={index}>
                {ingredient.name}
                <button style={{color: "white"}}>+</button>
            </li>
        ))}
    </ul>
    )
  };
  
  export default IngredientList;