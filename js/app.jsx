import React from "react";
import SamplePage from "./sample-page.jsx";
import ReactDOM from "react-dom";
import { Router, IndexRoute, Route, Link, Redirect, browserHistory, BrowserRouter, Switch } from "react-router-dom";
import { App } from "./components/app.jsx";
import ReactGA from 'react-ga';

ReactGA.initialize('UA-126701382-1', { standardImplementation: true });

class SampleApp extends React.Component {
  render() {
    return (
      <App
        googleAnalyticsKey="UA-126701382-1"
        segmentKey="Pd3LXILLoxlOKXi9zWTCyhK2MRvygFhF"
        stripeKey="pk_BkaOyHcEiCFaUiEADe7UH6Wq7D6f7">
        {/*  history={ browserHistory }> */}
        <div>
          <Route exact path="/home" component={ SamplePage }/>
          <Route path="*" component={ SamplePage }/>
        </div>
      </App>
    );
  }
}

ReactDOM.render((
  <BrowserRouter>
      <Route path="/" component={ SampleApp } />
  </BrowserRouter>

  // <Router history={ browserHistory }>
  //   <Route path="/" component={ SampleApp } history={ browserHistory }>
  //     <IndexRoute name="home" component={ SamplePage }/>
  //     <Route path="*" component={ SamplePage }/>
  //   </Route>
  // </Router>

), document.getElementById("main"));
