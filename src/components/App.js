import { Route } from 'react-router-dom';
import '../assets/css/App.css';
import Menu from './Menu';


function App() {
  return (
    <>
    <Route path='/' component={Menu}/>
    </>
  );
}

export default App;
