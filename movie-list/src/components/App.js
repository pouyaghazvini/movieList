import React from 'react';
import List from './List';

class App extends React.Component {
  render() {
    return (
      <div className='App' style={{border: '2px solid lightgray', width: '60%'}}>
       
       <div className='App-Header'>
         <h1>Movie List</h1>
       </div>
      
       <div>
         <List/>
       </div>
      
      </div>
    );
  }
}

export default App;