import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { About } from './pages/About';
import { Home } from './pages/Home';
import { GmTech } from './pages/GmTech';
import { Blog } from './pages/Blog';
import { Contact } from './pages/Contact';
import { Services } from './pages/Services';
import { NotFound } from './pages/NotFound';
import { Map } from './pages/Map'

ReactDOM.render(
      <React.StrictMode>
            <Router>
                  <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/services" component={Services} />
                        <Route exact path="/blog" component={Blog} />
                        <Route exact path="/contact" component={Contact} />
                        <Route exact path="/gmtech" component={GmTech} />
                        <Route exact path="/map" component={Map} />
                        <Route component={NotFound} />
                  </Switch>
            </Router>
      </React.StrictMode>,
      document.getElementById('root')
);
