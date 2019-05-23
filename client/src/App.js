import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Header from "./shared/Header";
import "./styles/App.css";
import RentalList from "./components/rental/RentalList";
import RentalDetail from "./components/rental/RentalDetail";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={() => <Redirect to="/rentals" />} />
          <Route exact path="/rentals" component={RentalList} />
          <Route path="/rentals/:id" component={RentalDetail} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
