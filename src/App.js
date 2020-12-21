import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

import Home from './pages/Home';
import Login from './pages/Login';
import Tshirt from './pages/Products/Tshirt';
import Hoodie from './pages/Products/Hoodie';
import Jacket from './pages/Products/Jacket';
import Pants from './pages/Products/Pants';
import Exchanges from './pages/Exchanges';
import Questions from './pages/Questions';

function App() {
  return (
    <>
    <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/camisetas' component={Tshirt} />
          <Route path='/moletons' component={Hoodie} />
          <Route path='/jaquetas' component={Jacket} />
          <Route path='/calcas' component={Pants} />
          <Route path='/troca-e-devolucoes' component={Exchanges} />
          <Route path='/perguntas-frequentes' component={Questions} />
        </Switch>
        <Newsletter />
        <Footer />
      </Router>
    </>
  );
}

export default App;
