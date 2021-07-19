import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {},
      isLoaded: false
    }
  }
  componentDidMount() {
    fetch('https://xkcd.com/614/info.0.json')
      .then(res => res.json())
      .then(data => console.log(data))
      .then(json => {
        this.setState({
          isLoaded: true,
        })
      }).catch((err) => {
        console.log(err);
      });
  }
  render() {
    const { isLoaded, items } = this.state;
    if (!isLoaded)
      return <div>Loading...</div>;

    return (
      <div className="App">
        <ul>
          {items.map(item => (
            <li key={item.num}>
              Year: {item.year} | Month: {item.month}
            </li>
          ))}
        </ul>

      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;

