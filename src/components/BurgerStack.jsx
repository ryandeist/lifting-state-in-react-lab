// `src/components/BurgerStack.jsx`
const BurgerStack = (props) => {
    console.log(props.stack)
    return ( 
    <ul>
        {props.stack.map((ingredient, index) => (
            <li style={{backgroundColor: ingredient.color}} key={index}>
                {ingredient.name}
                <button onClick={props.removeFromBurger(event)} style={{color: "white"}}>+</button>
            </li>
        ))}
    </ul>
    )
  };
  
  export default BurgerStack;