import React, { useState } from 'react'
import NavBar from "./Components/NavBar";
import News from "./Components/News";
import LoadingBar from 'react-top-loading-bar';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

function App() {
  const pageSize=20;
  const [progress, setProgress] = useState(0)
  
 function setProgressVal(val){
   setProgress(val)
 }

  return (
    <>
   <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        height={3}
      />
    <Router>
    <NavBar/>
    <Switch>
          <Route exact path="/"><News setProgressVal={setProgressVal} key="general" pageSize={pageSize} country="in" category="general" title="General"/></Route> 
          <Route exact path="/business"><News setProgressVal={setProgressVal} key="business" pageSize={pageSize} country="in" category="business" title="Business"/></Route> 
          <Route exact path="/entertainment"><News setProgressVal={setProgressVal} key="entertainment" pageSize={pageSize} country="in" category="entertainment" title="Entertainment"/></Route> 
          <Route exact path="/health"><News setProgressVal={setProgressVal} key="health" pageSize={pageSize} country="in" category="health" title="Health"/></Route> 
          <Route exact path="/science"><News setProgressVal={setProgressVal} key="science" pageSize={pageSize} country="in" category="science" title="Science"/></Route> 
          <Route exact path="/sports"><News setProgressVal={setProgressVal} key="sports" pageSize={pageSize} country="in" category="sports" title="Sports"/></Route> 
          <Route exact path="/technology"><News setProgressVal={setProgressVal} key="technology" pageSize={pageSize} country="in" category="technology" title="Technology"/></Route> 
    </Switch>
    </Router>
    </>
  );
}

export default App;
