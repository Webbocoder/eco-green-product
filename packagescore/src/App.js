import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import data from './data/data.json'

import Header from './components/Header'
import Search from './components/Search'
import ProductList from './components/ProductList'
import Basket from './components/Basket'

function App() {
  return (
    <div className='App'>
      <Header/>
      <Search/>
      <ProductList data={data}/>
      <Basket/>
    </div>
  );
}

export default App;