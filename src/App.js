//Librerias
import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import * as Routes from './assets/js/Routes'

//Google
import ReactGA from 'react-ga';
import { GAKey } from './assets/js/GAKet';

//Facebook
import ReactPixel from 'react-facebook-pixel'
import { fbPixelKey } from './assets/js/FBpixel'

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

  ReactGA.initialize(GAKey);
  ReactGA.pageview(window.location.pathname + window.location.search);

  ReactGA.pageview(Routes.INDEX);
  ReactGA.pageview(Routes.INIVERTE);
  ReactGA.pageview(Routes.PREGUNTAS);
  ReactGA.pageview(Routes.CONTACTANOS);

  ReactPixel.init( fbPixelKey );

    return(
      <HashRouter >
          <Header />

          <Switch>
            <Route exact path={Routes.INDEX}> <Home modal={false}/> </Route>
            <Route exact path={Routes.HOME}> <Redirect to={Routes.INDEX}> <Home modal={false}/> </Redirect> </Route>
            <Route exact path={Routes.PREGUNTAS}> <Preguntas /> </Route>
            <Route exact path={Routes.INIVERTE}> <Invertir /> </Route>
            <Route exact path={Routes.CONTACTANOS}> <Contact /> </Route>
            <Route exact path={Routes.REGISTRO}> <Home modal={true}/> </Route>
            <Route> <Home /> </Route>
          </Switch>

          <Footer />

      </HashRouter >
    );
};

export default App;