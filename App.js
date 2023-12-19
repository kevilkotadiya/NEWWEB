import './App.css';
import { Component } from 'react';
import { Routes , Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  state ={
    progress : 0
  }
  setprogress = (progress)=>{
    this.setState({progress: progress});
  }
  render(){
    return (
      <div>
        <NavBar/>
        <LoadingBar
        height={2.5}
          color='#f11946'
          progress={this.state.progress}
        />
              <Routes>
                <Route path='/' element={<News setprogress={this.setprogress} key="general" pageSize={5} country="us" category="general"/>} />
                <Route path='/business'element={<News setprogress={this.setprogress} key="business" pageSize={5} country="us" category="business"/>} />
                <Route path='/entertainment' element={<News setprogress={this.setprogress} key="entertainment" pageSize={5} country="us" category="entertainment"/>} />
                <Route path='/general' element={<News setprogress={this.setprogress} key="general" pageSize={5} country="us" category="general"/>} />
                <Route path='/health' element={<News setprogress={this.setprogress} key="health" pageSize={5} country="us" category="health"/>} />
                <Route path='/science' element={<News setprogress={this.setprogress} key="science" pageSize={5} country="us" category="science"/>} />
                <Route path='/sports' element={<News setprogress={this.setprogress} key="sports" pageSize={5} country="us" category="sports"/>} />
                <Route path='/technology' element={<News setprogress={this.setprogress} key="technology" pageSize={5} country="us" category="technology"/>} />
              </Routes>
      </div>
    );
  }
}


