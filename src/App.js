import "./App.css";

function App() {
  const products = [
    { name: "Photoshop", price: "$90.99" },
    { name: "Illustrator", price: "$890.99" },
    { name: "Pdf Reader", price: "$780.99" },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>
      </header>
    </div>
  );
}
function Product(props) {
  const productStyles = {
    border: "1px solid gray",
    borderRadius: "5px",
    backgroundColor: "lightgray",
    height: "200px",
    width: "200px",
    float: "left",
  };
  return (
    <div style={productStyles}>
      <h2>{props.product.name}</h2>
      <h2>{props.product.price}</h2>
      <button>Buy</button>
    </div>
  );
}

export default App;
