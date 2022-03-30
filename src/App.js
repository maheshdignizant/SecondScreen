import logo from './logo.svg';
import './App.css';
// import ResponsiveDialog from './components/popup/ResponsiveDialog';
import ResponsiveDialog from './components/popup/ResponsiveDialogNew';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
    
        <ResponsiveDialog/>
      </header>
    </div>
  );
}

export default App;
