import Navbar from "./components/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/screens/Home";
import Login from "./components/screens/Login";
import Register from "./components/screens/Register";
import Profile from "./components/screens/Profile";
import CreatePost from "./components/screens/CreatePost";

import { UserContextProvider } from "./contexts/UserContext";

import PrivateLoggedInRoute from "./custom_routes/PrivateLoggedInRoute";

function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <Navbar />
        <PrivateLoggedInRoute path="/" component={Home} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/register" component={Register} exact />
        <Route path="/profile" component={Profile} exact />
        <PrivateLoggedInRoute path="/create" component={CreatePost} exact />
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
