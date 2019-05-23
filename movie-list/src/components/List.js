import React from 'react';


const movies = [
  {title: 'My Cousin Vinny'},
  {title: 'Man on Fire'},
  {title: 'Goodfellas'},
  {title: 'Lion King'},
  {title: 'Robin Hood'}
];

class List extends React.Component {
  render() {
    return (
      <table id='movie-list'>
        <tbody>
          <tr>
            <td>{movies[0].title}</td>  
          </tr>
          <tr>
            <td>{movies[1].title}</td>  
          </tr>
          <tr>
            <td>{movies[2].title}</td>  
          </tr>
          <tr>
            <td>{movies[3].title}</td>  
          </tr>
          <tr>
            <td>{movies[4].title}</td>  
          </tr>
        </tbody>
      </table>
    )
  }
}

export default List;