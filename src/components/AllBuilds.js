
import { useState } from 'react'

function AllBuilds() {
    var [allBuilds, setAllBuilds] = useState([])



    fetch('https://localhost:44388/api/builds')
    .then(builds => builds.json())
    .then(data => createBuild(data))
    
    
    function createBuild(data) {
      setAllBuilds(allBuilds = data)
    
    /*
      for(let i = 0; i < allBuilds.length; i++){
          let id = allBuilds[i]["Id"];
          let title = allBuilds[i]["Title"];
          let build = new Build(id, title);
    
          myData.push(build);
          
      } */ 
      return (allBuilds)
    } 

    
}

export default AllBuilds