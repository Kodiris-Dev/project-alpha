import React from 'react';
import './App.css';

import Home from './components/Home'
import BrowsePage from './components/BrowsePage'
import HeroPage from './components/HeroPage/HeroPage'
import Create from './components/Create'

import Navigation from './components/Navbar'
import { Route, Switch } from "react-router-dom"
import Customize from './components/Customize'
import Review from './components/Review'
import HeroList from './components/Hero/HeroList'
import HeroSelect from './components/CreateViews/HeroSelect/HeroSelect'
import Signin from './Signin/Signin'
import Details from './components/CreateViews/Details/Details'
import Aspects from './components/CreateViews/Details/Aspects/Aspects'
import Compatibility from './components/CreateViews/Details/Compatibility/Compatibility'
import Abilities from './components/CreateViews/Details/Abilities/Abilities'

function App() {
  const getHeroList = (heroListObj) => {
    var heroName = heroListObj.name
  }
  HeroList.map(heroListObj => getHeroList(heroListObj))
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route component={Signin} path="/signin" />
        <Route component={HeroPage} exact path="/heroes/:heroName" />
        <Route component={BrowsePage} path="/browse" />
        <Route component={Review} path="/create/review" />
        <Route component={Customize} path="/create/customize" />
        <Route component={Abilities} path="/create/details/abilities" />
        <Route component={Compatibility} path="/create/details/compatibility" />
        <Route component={Aspects} path="/create/details/aspects" />
        <Route component={Details} path="/create/details" />
        <Route component={HeroSelect} path="/create/heroselect" />
        <Route component={Create} path="/create" />
        <Route component={Home} path="/" />
      </Switch>

    </div>
  );
}

export default App;
