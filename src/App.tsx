import React,{FunctionComponent} from 'react';
import './App.css';
import Header from './component/Header/Header'
import Main from './component/Main/Main';
import Footer from './component/Footer/Footer';

const App:FunctionComponent = () => {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
  
}

export default App;
