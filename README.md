# Lifting State in React Lab

![reactville hero](https://pages.git.generalassemb.ly/modular-curriculum-all-courses/lifting-state-in-react-lab/assets/reactville.png)

## About
Today, you’re stepping into the Reactville Burger Shop, a favorite local eatery known for its mouth-watering burgers. In this interactive app, users build their dream burger, choosing from various breads, meats, and toppings. But there’s a catch: it’s also a lesson in ‘lifting state’ in React. Get ready to stack ingredients and elevate your React skills!

![example of finished product](https://pages.git.generalassemb.ly/modular-curriculum-all-courses/lifting-state-in-react-lab/assets/burger.png)

In this lab, students will create burger builder app that that has two main components: an ingredients list and a burger stack. Users will be able to add items from the ingredients list to the the burger stack to create the perfect burger.

## Setup
Open your Terminal application and navigate to your `~/code/ga/labs directory`:

```
cd ~/code/ga/labs
```

Create a new Vite project for your React app:

```
npm create vite@latest
```

You’ll be prompted to choose a project name. Let’s name it `lifting-state-in-react-lab`.

* Select a framework. Use the arrow keys to choose the `React` option and hit `Enter`.
* Select a variant. Again, use the arrow keys to choose `JavaScript` and hit `Enter`.

Navigate to your new project directory and install the necessary dependencies:

```
cd lifting-state-in-react-lab
npm i
```

Open the project’s folder in your code editor:

```
code .
```

### Configuring ESLint
Before we begin, we need to adjust the ESLint configuration. Add the following rules to the .`eslintrc.cjs` file:

```js
rules: {
  'react-refresh/only-export-components': [
    'warn',
    { allowConstantExport: true },
  ],
  'react/prop-types': 'off', // add this line
  'react/no-unescaped-entities': 'off' // add this line
},
```

The first addition prevents warnings if you’re not declaring types for your props (which we’re not), and the second prevents warnings if you’re using contractions within JSX.

### Running the development server
To start the development server and view our app in the browser, we’ll use the following command:

```
npm run dev
```

You should see that `Vite` is available on port number 5173:

```
localhost:5173
```

### Github setup
To add this project to GitHub, initialize a Git repository:

```
git init
git add .
git commit -m "init commit"
```

Make a new repository on GitHub named lifting-state-in-react-lab.

Link your local project to your remote GitHub repo:

```
git remote add origin https://github.com/<github-username>/lifting-state-in-react-lab.git
git push origin main
```
>  Do not copy the above command. It will not work. Your GitHub username will replace `<github-username>` (including the `<` and `>`) in the URL above.

## Add starter code
In this lab, we’ve included some starter code for you. This approach is designed to help you concentrate on learning about lifting state, without the need to focus on the initial setup, layout, or styling. Don’t worry, there’s still plenty of work for you to do! Your task is to build on this foundation, primarily focusing on the concept of lifting state in React.

### Clear `App.jsx`
Remove any existing code and add the following to src/App.jsx:

```jsx
// src/App.jsx

import './App.css';

export const availableIngredients = [
  { name: 'Kaiser Bun', color: 'saddlebrown' },
  { name: 'Sesame Bun', color: 'sandybrown' },
  { name: 'Gluten Free Bun', color: 'peru' },
  { name: 'Lettuce Wrap', color: 'olivedrab' },
  { name: 'Beef Patty', color: '#3F250B' },
  { name: 'Soy Patty', color: '#3F250B' },
  { name: 'Black Bean Patty', color: '#3F250B' },
  { name: 'Chicken Patty', color: 'burlywood' },
  { name: 'Lettuce', color: 'lawngreen' },
  { name: 'Tomato', color: 'tomato' },
  { name: 'Bacon', color: 'maroon' },
  { name: 'Onion', color: 'lightyellow' },
  { name: 'Cheddar Cheese', color: '#FDE18B' },
  { name: 'Swiss Cheese', color: '#F1E1A8' },
];

const App = () => {
  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
      {/* List & Stack components */}
      </section>
    </main>
  );
};

export default App;
```

### Clear `App.css`
Replace any existing code in src/App.css with the following:

```css
/* src/App.css */
* {
  box-sizing: border-box;
}

:root {
  line-height: 1;
  font-weight: 400;
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html,
body,
#root {
  margin: 0;
  height: 100%;
  overflow-x: hidden;
}

main {
  width: 100%;
  height: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

section {
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

h1 {
  text-align: center;
}

ul {
  width: 100%;
  height: 100%;

  margin: 0;
  padding: 16px;
  list-style: none;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

li {
  padding: 8px;
  margin-bottom: 4px;
  border-radius: 8px;
  font-weight: bold;
  text-shadow: 0px 0px 2px #000000;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

button {
  cursor: pointer;
  border-radius: 8px;
  background-color: #1a1a1a;
  border: 1px solid transparent;
}
```

### Creat Two Components
Run the following commands in your terminal:

```
mkdir components
touch src/components/IngredientList.jsx
touch src/components/BurgerStack.jsx
```

These will serve as the starting components for your burger stacking app.

#### Ingredient List
Add the following to `src/components/IngredientList.jsx`:

```jsx
// src/components/IngredientList.jsx
const IngredientList = (props) => {
  return <ul>// map through props.ingredients</ul>;
};

export default IngredientList;
```

#### BurgerStack
Add the following to `src/components/BurgerStack.jsx`:

```jsx
// `src/components/BurgerStack.jsx`
const BurgerStack = (props) => {
  return <ul>// map through props.ingredients</ul>;
};

export default BurgerStack;
```

# Exercise

## Introduction
Before diving into the exercise, take a moment to inspect the code provided to you during setup. You’ll find code for two new components and a complete CSS stylesheet. Your primary focus will be on using React to execute the user stories below, reinforcing the concept of **lifting state**.

## Finished Product
![](https://pages.git.generalassemb.ly/modular-curriculum-all-courses/lifting-state-in-react-lab/assets/burger.png)

In this lab, you’ll be building a burger stacker application. The interface will be divided into two main areas. On one side, you’ll have a list of ingredients. Users can select from these ingredients, and upon selection, these items will move to the other side of the screen. This second area is where the user’s burger is visually constructed. As ingredients are added, they’ll appear stacked in the order they were selected, forming a burger.

Below is a component hierarchy diagram to illustrate how the application will be structured:
![](https://pages.git.generalassemb.ly/modular-curriculum-all-courses/lifting-state-in-react-lab/exercise/assets/burger-chd.png)

* **App**: The parent component containing `<BurgerStack>` and `<IngredientList>`. It will also contain `stack` state, and two functions for manipulating that state.
* **BurgerStack**: A `<ul>` that renders the elements held in `stack`. Each ingredient rendered in this component should contain a button for **removing** the ingredient from the `stack`.
* **IngredientList**: A `<ul>` that renders the elements held in `availableIngredients`. Each ingredient rendered in this component should contain a button for **adding** the ingredient to the `stack`.

> Pay special attention to the `availableIngredients` array held in `src/App.jsx`. You’ll likely begin by rendering this data.

## User Stories
Here are the user stories for this lab:

> As a user, I want to be able to see a list of the ingredients that can be added to my burger on the left side of the screen.

> As a user, I want to be able to see a stack of the ingredients that make up my burger on the right side of the screen.

> As a user, I want to click a ‘+’ button on an ingredient to `add it` to my burger stack. This action will place the ingredient on the stack displayed on the right side of the screen, while keeping the original ingredient list on the left unchanged.

> As a user, I want to click an ‘X’ button on an ingredient in my burger stack to `remove` it. This will take the ingredient off the stack on the right side of the screen, without changing the ingredient list on the left.

## Lab Exercise
Your primary goal is to implement the user stories listed above. To get started, follow the steps below:

1. In `src/App.jsx`, import `src/components/IngredientList.jsx` and `src/components/BurgerStack.jsx` and add them to the provided `<section>`.

```jsx
const App = () => {
  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
        <IngredientList />  // add here! 
        <BurgerStack />
      </section>
    </main>
  );
};
```

2. Initialize a new `useState` variable titled stack in `src/App.jsx`.

3. Reference the provided user stories to build out the remaining functionality of this application.

### Hints
1. There should be two child components in `src/App.jsx`. One will be responsible for rendering elements in `availableIngredients`, and the other for elements in `stack`.

2. Your application will require two functions in `src/App.jsx`. One called `addToBurger` and another called `removeFromBurger`. Think carefully about what arguments might need to be passed in to each function.

3. Notice the properties of each object held in `availableIngredients`. The color property can be applied to elements with inline styling, as shown in the example below:
```
      <li style=>
        {ingredient.name}
      </li>
```
> *Inline styling* in React involves applying CSS styles directly to elements using the `style` attribute. The attribute accepts an object with camelCased properties as its value.

## Level up
1. Create a component called `Ingredient` that can be reused by both `src/components/IngredientList.jsx` and `src/components/BurgerStack.jsx`. It should display the name of a single ingredient, and conditionally render the add or remove button based on its parent.

2. Apply conditional rendering within `src/components/BurgerStack.jsx`, so that a message of `‘No Ingredients’` is displayed if there are no ingredients in the stack.







