const BurgerStack = ({ stack, removeFromBurger }) => {

    return ( 
    <ul>
        {stack.map((ingredient, index) => (
            <li style={{backgroundColor: ingredient.color}} key={index}>
                {ingredient.name}
                <button onClick={() => removeFromBurger(index)} style={{color: "white"}}>x</button>
            </li>
        ))}
    </ul>
    )
  };
  
  export default BurgerStack;