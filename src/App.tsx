import React, { FunctionComponent } from 'react';
import './App.css';
import Header from './component/Header/Header'
import Main from './component/Main/Main';
import Footer from './component/Footer/Footer';

interface AppProps{
  head: (val: string) => void;
  main: (ful: boolean, loc: string) => void
  update:() => void
}

const App: FunctionComponent<AppProps> = ({ head, main, update }) => {
  return (
    <div className="App">
      <Header head={head} update={update} />
      <Main main={main} />
      <Footer />
    </div>
  );

}

export default App;
