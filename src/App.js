import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';

const Home = () => {
  return <h2>Home</h2>;
}

const About = () => {
  return <h2>About</h2>;
}

const Contact = () => {
  return <h2>Contact</h2>;
}

const NotFound = () => {
  return <h2>404 Not Found</h2>;
}

const App = () => {
  return (
    <Router basename="/first-react-app">
      <div className="container">
        <h2>React Rotuer Demo</h2>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <a href="/about/">About (normal anchor link, page will full reload)</a>
            </li>
            <li>
              <Link to="/contact/">Contact</Link>
            </li>
            <li>
              <Link to="/foo">Foo</Link>
            </li>
          </ul>
        </nav>
        <Route path="/" exact component={Home} />
        <Route path="/about/" component={About} />
        <Route path="/contact/" component={Contact} />
        <hr />
        <p>Using Switch</p>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about/" component={About} />
          <Route path="/contact/" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

/*

//import
/* Two ways of importing named objects from a module 
1.Combine two into one
2.import separately

Combine two into one
import * as math from './math.js' //combine all exports into a math object
//combined object can be named however we like does not have to be math

console.log(math.numbers.reduce(math,sum));

Same thing but accounts for name clashes
import { sum, numbers as numbers2 } from './math.js' // create alias for numbers
const numbers = [1,2,3]; // clashing variable name


// import separately
import { sum, numbers } from './math.js' 

console.log(numbers.reduce(sum));

//import product
import product from './math.js';

console.log(product(10,5))

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/

