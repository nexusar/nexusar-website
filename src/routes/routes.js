import { Route, Switch, Redirect } from 'react-router-dom';
import { useLocation } from 'react-router';
import Intro from '../pages/Intro/Intro';
import Home from '../pages/Home';
import { Fragment } from 'react';
import Navbar from '../components/layout/navbar/NavBar';
import NotFound from '../pages/NotFound';
import Careers from '../pages/Careers';
import Blogs from '../pages/Blogs';
import Leadership from '../pages/Leadership/Leadership';
import Leader from '../pages/Leadership/Leader';
import Login from '../pages/Login/Login';
import Dashboard from '../pages/Login/Dashboard';
import Loading from '../pages/Loading';
import Admin from '../pages/Admin/Admin';
import Solutions from '../pages/Solutions/Solutions';
import SolutionPage from '../pages/Solutions/SolutionPage';
import Products from '../pages/Products/Products';
import Support from '../pages/Support/Support';
import AboutUs from '../pages/About';

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

        <Route path="/about-us">
          <AboutUs />
        </Route>

        <Route path="/solutions" exact>
          <Solutions />
        </Route>
        <Route path="/solutions/:solutionId" exact>
          <SolutionPage />
        </Route>

        <Route path="/products">
          <Products />
        </Route>

        <Route path="/careers">
          <Careers />
        </Route>

        <Route path="/blogs">
          <Blogs />
        </Route>

        <Route path="/support">
          <Support />
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
