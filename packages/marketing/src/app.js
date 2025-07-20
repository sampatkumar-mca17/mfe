import React from 'react'
import {StylesProvider, stylesProvider} from '@material-ui/core/styles';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Landing from './components 2/Landing';
import Pricing from './components 2/Pricing';

function App() {
  return (
 <StylesProvider>
    <Router>
      <Switch>
        <Route path="/pricing" exact component={Pricing} />
        <Route path="/" component={Landing} />
      </Switch>
    </Router>
 </StylesProvider>
  )
}

export default App