import React, { Component } from 'react';
import Tabs from './Tabs'
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activeTab: 1
    }

    // Bind the changeTab function to the current state
    // so when the function is called (even by children)
    // it affects This state. call using => function to avoid bind
    this.changeTab = this.changeTab.bind(this)
  }

  changeTab(newTab) {
    this.setState({activeTab: newTab})
  }

  render() {
    return (
      <div>
        <Tabs 
          activeTab={this.state.activeTab}
          changeTab={this.changeTab}
        />
      </div>
    );
  }
}

export default App;
