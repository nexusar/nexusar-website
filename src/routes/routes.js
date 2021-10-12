import { Route, Switch, Redirect } from 'react-router-dom';
import { useLocation } from 'react-router';
import Intro from '../pages/Intro/Intro';
import Splash from '../pages/Splash';
import Home from '../pages/Home';
import { Fragment } from 'react';
import Navbar from '../components/layout/navbar/NavBar';
import NotFound from '../pages/NotFound';
import Apply from '../pages/Apply';
import Blogs from '../pages/Blogs';
import Leadership from '../pages/Leadership/Leadership';
import Leader from '../pages/Leadership/Leader';
import Login from '../pages/Login/Login';
import Dashboard from '../pages/Login/Dashboard';
import Loading from '../pages/Loading';
import Admin from '../pages/Admin/Admin';

const Routes = () => {
  const location = useLocation();
  const isIntroPage = location.pathname === '/intro';

  return (
    <Fragment>
      {!isIntroPage && <Navbar />}
      <Switch>
        {/* Redirects */}
        <Route path="/" exact>
          <Redirect to="/intro" />
        </Route>
        <Route path="/nexusar" exact>
          <Redirect to="/intro" />
        </Route>

        {/* Actual Paths */}
        <Route path="/loading">
          <Loading />
        </Route>

        <Route path="/intro">
          <Intro />
        </Route>

        <Route path="/home">
          <Home />
        </Route>

        <Route path="/splash">
          <Splash />
        </Route>

        <Route path="/apply">
          <Apply />
        </Route>

        <Route path="/blogs">
          <Blogs />
        </Route>

        <Route path="/leadership" exact>
          <Leadership />
        </Route>
        <Route path="/leadership/:leaderId">
          <Leader />
        </Route>

        <Route path="/login">
          <Login />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>

        <Route path="/admin">
          <Admin />
        </Route>

        <Route path="*" exact>
          <NotFound />
        </Route>
      </Switch>
    </Fragment>
  );
};
export default Routes;
