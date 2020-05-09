//Librerias
import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import * as Routes from './assets/js/Routes'

//Estilos
import './assets/css/reset.scss';
import './assets/css/general.scss';

//containers
import Home from './containers/Home';
import Error404 from './containers/Error404';
import Preguntas from './containers/Preguntas';
import Invertir from './containers/Invertir';
import Contact from './containers/Contact';

import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
    return(
      <HashRouter >
        
          <Header />

          <Switch>
            <Route exact path='/'> <Home /> </Route>
            <Route exact path={Routes.INDEX}> <Home /> </Route>
            <Route exact path={Routes.PREGUNTAS}> <Preguntas /> </Route>
            <Route exact path={Routes.INIVERTE}> <Invertir /> </Route>
            <Route exact path={Routes.CONTACTANOS}> <Contact /> </Route>
            <Route> <Error404 /> </Route>
          </Switch>

          <Footer />

      </HashRouter >
    );
};

export default App;