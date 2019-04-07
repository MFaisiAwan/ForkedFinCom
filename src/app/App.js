import React, { Component } from 'react';
import { Route, BrowserRouter as Router,Switch } from 'react-router-dom'
import Champions from "../components/Champions"
import Winners from "../components/Winners"
import NotFoundPage from "../components/NotFoundPage"
import Footer from "../components/Footer"

class App extends Component {
  render() {
    return (
  <Router>
	  <div>
		  <Switch>
		  <Route exact path="/" component={Champions} />
		  <Route path="/champions" component={Champions} />
		  <Route path="/winners/:year" component={Winners} />
		  <Route component={NotFoundPage} />
		  </Switch>
		  <Footer />
	  </div>
  </Router>
    );
  }
}

export default App;
