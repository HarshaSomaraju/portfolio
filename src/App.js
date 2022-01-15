import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Loading from "./components/Loading";
import ErrorBoundary from "./pages/ErrorBoundary";

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./components/About'));

const App = () => {
  return (
      <Router>
          <ErrorBoundary>
              <Suspense fallback={<Loading/>}>
                  <Switch>
                      <Route exact path="/" component={Home}/>
                      <Route path="/about" component={About}/>
                  </Switch>
              </Suspense>
          </ErrorBoundary>
      </Router>
  );
}

export default App;
