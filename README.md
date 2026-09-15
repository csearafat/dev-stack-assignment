# Dev Stack 
Dev Stack is a browser-based tool created for developers who want to explore and choose the right technologies for their upcoming projects. It brings frontend, backend, database, programming language, styling, and DevOps options together, allowing developers to compare different technologies and create their own development stack before starting the actual coding process.

## Built with

* **React (Vite)** — used to create the component-based user interface and manage the interactive parts of the application.
* **Tailwind CSS v4** — used for styling, with one shared gradient theme applied consistently to the brand name, hero heading, and primary buttons.
* **React-Toastify** — used to display notifications when technologies are added, removed, or added more than once.
* **JSON** — used as the technology data source, which is loaded dynamically at runtime using `fetch`.

## Features

1. **Curated Technology Catalog** — The project includes fifteen technologies grouped into seven categories: Frontend, Backend, Database, Language, Styling, DevOps, and Tools. Every technology includes a rating, difficulty level, and badge, with all information coming from a local JSON file instead of being hardcoded.

2. **Live Stack Builder** — Users can add technologies to **"Your Stack"** with a single click. Individual technologies can be removed, or the complete stack can be cleared at once. The application also prevents duplicate technologies and displays toast notifications to provide feedback for each action.

3. **Fully Responsive Layout** — The application is designed to provide a smooth experience on different screen sizes. The sticky navbar changes into a hamburger menu on mobile devices, while the technology cards automatically adjust from a single-column layout on smaller screens to a three-column grid on desktop.

## React Questions and Answer

### i. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML-like markup directly inside JavaScript. It is commonly used in React because it makes the UI structure easier to create, understand, and maintain compared to writing everything using regular JavaScript function calls.

### ii. What is the difference between props and state?

**Props** are values or data passed from a parent component to a child component. The child component should not modify the props it receives directly.

**State**, on the other hand, is data managed by a component itself. State can change over time when something happens in the application, such as a user clicking a button.

### iii. What does the useState hook do, and where did you use it in this project?

The `useState` hook allows a React component to store information and update that information when necessary. In this project, I used `useState` to manage the technology list, the **"Your Stack"** list, the loading state while data is being fetched, and the mobile navigation menu state.

### iv. What does the useEffect hook do, and why did you need it to load the JSON data?

The `useEffect` hook allows us to run specific code after a component renders. It is particularly useful for side effects such as fetching external data.

In this project, I used `useEffect` to fetch the `technologies.json` file when the application initially loads, so the technology data can be displayed dynamically.

### v. Why does every item in a .map() list need a unique key prop?

React uses the `key` prop to uniquely identify each item in a list. This helps React understand which items have been added, removed, or changed.

Without a unique `key`, React may have difficulty efficiently updating the list and determining exactly which element needs to be changed.

### vi. What is conditional rendering? Show one place you used it.

Conditional rendering means displaying different UI elements depending on whether a particular condition is true or false.

In this project, I used conditional rendering in the **"Your Stack"** section. When no technology has been added, it displays **"Your stack is empty"**. Once technologies are added, the section displays the selected technology list instead.

### vii. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component can pass data to a child component through **props**. For example, the parent can pass a technology object or a function such as `onAdd` to the child.

To communicate back to the parent, the child can call a function provided by the parent as a prop. In this project, when the user clicks **"Add to Stack"**, the child component calls `onAdd(tech)`. This sends the selected technology back to the parent, where the state is updated.