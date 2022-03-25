
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
    </section>
  );
}

export default App;
