import Navbar from "./components/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/screens/Home";
import Login from "./components/screens/Login";
import Register from "./components/screens/Register";
import Profile from "./components/screens/Profile";
import CreatePost from "./components/screens/CreatePost";
import FetchStuff from "./components/FetchStuff";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/profile" component={Profile} />
      <Route path="/create" component={CreatePost} />
      <Route path="/fetchstuff" component={FetchStuff} />
    </BrowserRouter>
  );
}

export default App;
