import { Route, Switch, Redirect } from 'react-router-dom';
import { useLocation } from 'react-router';
import Intro from '../pages/Intro';
import Splash from '../pages/Splash';
import Home from '../pages/Home';
import { Fragment } from 'react';
import Navbar from '../components/ui/navbar/NavBar';
import NotFound from '../pages/NotFound';
import Apply from '../pages/Apply';

const Routes = () => {
  const location = useLocation();
  const isIntroPage = location.pathname === '/intro';

  return (
    <Fragment>
      {!isIntroPage && <Navbar />}
      <Switch>
        <Route path="/" exact>
          <Redirect to="/intro" />
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
        <Route path="*" exact>
          <NotFound />
        </Route>
      </Switch>
    </Fragment>
  );
};
export default Routes;
