
import React, { Component } from "react";
import SearchField from "react-search-field";
import {Link, Route, Switch} from "react-router-dom"
import Home from "./Home"
import Books from "./Books"
 



class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/books/">Books</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Home} />
        <Route path="/books/" component={Books} />

      </div>
  
)  
}
}
export default App;
