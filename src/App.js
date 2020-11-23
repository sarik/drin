import drink from './drinkk.jpeg';
import './App.css';
import Timeline from './Timeline'

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <img src={drink} className="App-logo"  alt="logo" />
        <p>
          Time to next drink{/* <code>src/App.js</code>*/}
        </p>
        <br/>
        <br/>
        <br/>
        <Timeline/>
      </header>
    </div>
  );
}

export default App;
