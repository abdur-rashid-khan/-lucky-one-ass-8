
import './App.css';
import Header from './components/header/Header';
import Products from './components/products/Products';

function App() {
  return (
    <section>
      <header>
        <Header></Header>
      </header>
      <main>
        <div className="container">
          <Products></Products>
        </div>
    </main>
    <section className='container'>
      
      <p className='ans'> <strong>1. How works react ??? : </strong> <br /> to make it faster, React implements a virtual DOM that is basically a DOM tree    representation in JavaScript. 
        Unlike browser DOM elements, React elements are plain objects and are cheap to create. React DOM takes care of updating the DOM to match the React elements.
        it can also be used in the server with Node.js</p>
        <p className='ans'> <strong> 2. Props bs state ??? : </strong> <br /> 
          <strong>props</strong>
            <span>props are read only</span>
            <span>props con not be modified </span>
          <br />
          <strong>state</strong>
            <span>state changes can be asynchronous</span>
            <span>state can be modified . </span>
        </p>
        <p className='ans'>
      <strong>How state work ?? </strong>
      State is a plain JavaScript object used by React to represent an information about the component's current situation. It's managed in the component (just like any variable declared in a function
    </p>
    </section>
    </section>
  );
}

export default App;
