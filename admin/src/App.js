import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HydraAdmin from 'api-platform-admin/lib/hydra/HydraAdmin';
import platformVar from 'platformsh_variables';
console.log(platformVar);
let entrypoint = Object.keys(platformVar).find(url => url.startsWith('https://api---'));

if(!entrypoint) {
  entrypoint = 'https://api---master-7rqtwti-kpfnplkpyfk2k.eu.platform.sh/';
}
entrypoint = entrypoint.substring(0, entrypoint.length - 1);
console.log(entrypoint);

class App extends Component {
  render() {
    return <HydraAdmin entrypoint={entrypoint}/>
  }
}

export default App;
