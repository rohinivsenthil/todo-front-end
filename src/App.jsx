import React from 'react';
import HomePage from './HomePage';
import ProfileBar from './ProfileBar';
import AddNote from './AddNote';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCreateNew: false,
    };
  }

CreateNewClick = () => { // camel casing
  this.setState({
    isCreateNew: true,
  });
}

render() {
  const { isCreateNew } = this.state;
  return (
    <div className="App">
      <ProfileBar />
      { !isCreateNew ? (
        <HomePage CreateNewClick={this.CreateNewClick} />
      )
        : <AddNote /> }
    </div>
  );
}
}

export default App;
