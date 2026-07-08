import Greeting from "./Greeting";
// Fragment (<>...</>) groups multiple elements without creating an extra HTML element.
// A <div> adds an extra element to the DOM, while a Fragment does not.
// Fragment is useful when you only need grouping and want cleaner HTML.
// A React component is a reusable function that returns UI elements.
function App() {
  return (
    <>
      <h1>Hello React</h1>
      <Greeting />
    </>
  );
}

export default App;

// Reusing components is better than copying HTML because the code is shorter,
// easier to maintain, and any change made in one component updates everywhere it is used.