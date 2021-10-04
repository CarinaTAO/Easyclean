import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/General/Header";
// import Footer from './components/General/Footer';
// import TaskCard from './components/TaskCard';
import TaskDetails from "./components/TaskDetails";
// import Login from './components/Login';
import HomePage from "./pages/HomePage/HomePage";
import ContactPage from './pages/ContactPage';

// import PostTaskPage from './pages/PostTaskPage/PostTaskPage'
import Button from "./components/Button/Button";
import Modal from "./components/Modal";
import BrowseTaskPage from "./pages/BrowseTaskPage";
import UserProfilePage from "./pages/UserProfilePage";

function App() {
  return (
    <Router>
      <Header />
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/BrowseTask" exact>
            <BrowseTaskPage />
          </Route>
          <Route path="/Contact" exact component={ContactPage} />


          <Route path="/td" exact>
            <TaskDetails />
          </Route>
          <Route path="/profile" exact>
            <UserProfilePage />
          </Route>
        </Switch>
    </Router>
  );
}
export default App;
