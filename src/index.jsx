import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { About } from './pages/About';
import { App } from './pages/App';
import { Blog } from './pages/Blog';
import { Contact } from './pages/Contact';
import { Services } from './pages/Services';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
      <React.StrictMode>
            <Router>
                  <Switch>
                        <Route exact path="/" component={App} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/services" component={Services} />
                        <Route exact path="/blog" component={Blog} />
                        <Route exact path="/contact" component={Contact} />
                  </Switch>
            </Router>
            {/* //   <App /> */}
      </React.StrictMode>,
      document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
