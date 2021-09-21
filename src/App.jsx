import { Route } from 'react-router';
import './App.scss';
import ProductChanger from './components/ProductChanger/ProductChanger';
import Sidebar from './components/Sidebar/Sidebar';

function App(props) {
  // debugger
  return (
    <div className="App">

      <div className="sidebar">
        <Sidebar/>
      </div>

      <div className="content">
        <Route path="/productChange" render={ () => <ProductChanger state={props.state.ProductChanger} dispatch={props.dispatch}/> }/>
      </div>
    </div>
  );
}

export default App;
