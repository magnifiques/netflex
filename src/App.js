import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Browse from "./pages/Browse";
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import * as ROUTES from "./constants/Routes"
import { IsUserRedirect, ProtectedRoute } from "./helpers/Routes";
import useAuthListener from "./hooks/use-auth-listener";
import { PageNotFound } from "./pages/PageNotFound";

function App() {

  const { user } = useAuthListener();

  return (
    <Router>
    
      <Switch>
      <IsUserRedirect 
            user={user}
            loggedInPath={'/browse'}
            path={ROUTES.SIGN_IN}>

          <SignIn/>

      </IsUserRedirect>
      
      <IsUserRedirect 
            user={user}
            loggedInPath={'/browse'}
            path={ROUTES.SIGN_UP}>
          <SignUp/>
        </IsUserRedirect>

        <ProtectedRoute 
            user={user}
            path={ROUTES.BROWSE}>
        <Browse/>
        </ProtectedRoute>
      
        <IsUserRedirect 
            loggedInPath={ROUTES.BROWSE}
            path={ROUTES.HOME}>
          <Home/>
        </IsUserRedirect>

        <Route component={PageNotFound}></Route>
        </Switch>
    </Router>
  );
}

export default App;
