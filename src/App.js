import React from 'react';
import './styles/index.css'
import { useState } from 'react'

import Home from './components/Home'
import BrowsePage from './components/Browse/BrowsePage'
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
import Build from './components/HeroPage/Build'
import BuildPage from './components/BuildPage/BuildPage'
import Heroes from './components/Heroes/Heroes'
import PostBuilds from './components/PostBuilds'
import Items from './components/CreateViews/Details/Items/Items'

function App() {
  var [allBuilds, setAllBuilds] = useState([])


  let myData = []
  
  fetch('https://localhost:44388/api/builds')
  .then(builds => builds.json())
  .then(data => createBuild(data))
  
  
  function createBuild(data) {
    setAllBuilds(allBuilds = data)
  
  
    for(let i = 0; i < allBuilds.length; i++){
        let id = allBuilds[i]["Id"];
        let title = allBuilds[i]["Title"];
        let build = new Build(id, title);
  
        myData.push(build);
    }

  }


  const getBuilds = (build) => {
    var buildId = build['Id']
  }
  allBuilds.map((obj) => getBuilds(obj))

  const getHeroList = (heroListObj) => {
    var heroName = heroListObj.name
  }
  HeroList.map(heroListObj => getHeroList(heroListObj))
  
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route path='/builds/:buildId'
                render={(props) => (
                    <BuildPage {...props}
                    />
        )}
        />
        <Route component={PostBuilds} path="/postbuilds" />
        <Route component={Signin} path="/signin" />
        <Route component={HeroPage} exact path="/heroes/:heroName" />
        <Route component={Heroes} path="/heroes" />
        <Route component={BrowsePage} path="/browse" />
        <Route component={Review} path="/create/review" />
        <Route component={Customize} path="/create/customize" />
        <Route component={Abilities} path="/create/details/abilities" />
        <Route component={Compatibility} path="/create/details/compatibility" />
        <Route component={Items} path="/create/details/items" />
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
