import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const products = [
    { name: "Photoshop", price: "$90.99" },
    { name: "Illustrator", price: "$890.99" },
    { name: "Pdf Reader", price: "$780.99" },
  ];
  const productNames = products.map((product) => product.name);
  console.log(productNames);
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <User></User>
        <ul>
          {products.map((product) => (
            <li>{product.name}</li>
          ))}
        </ul>
        {products.map((product) => (
          <Product product={product}></Product>
        ))}
      </header>
    </div>
  );
}

// count starts
function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count + 1);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}
//count ends


/***** User Starts From Here *****/
function User(){
  const [users,setUsers] = useState([0]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>{
      setUsers(data);
    })
  },[])
  return(
    <div>
      <h3>Dynamic User</h3>
      <ul>
        {
          users.map(user=><li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}
/***** User Ends From Here *****/



function Product(props) {
  const productStyles = {
    border: "1px solid gray",
    borderRadius: "5px",
    backgroundColor: "black",
    height: "200px",
    width: "200px",
    float: "left",
    color: "green",
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
