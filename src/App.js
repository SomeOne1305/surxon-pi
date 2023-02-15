import React from 'react';
import './css/App.css';
// import Navigation from './Components/Navigation';
// import Menu from './Components/Menu'
// import NewsBlock from './Components/News/NewsBlock';
// import MediaSect from './Components/Videos/MediaSect';
// import Footer from './Components/Footer';
// import Wheater from './Components/Wheater';
// import CalAndPoll from './Components/CalAndPoll';
// import { Route, Routes } from 'react-router-dom';
import Router from './Components/Router';
// import Loading from './Components/Loading';




function App() {
  // const [loading, setLoading] = React.useState(true)
  // window.addEventListener('load', ()=>{
  //   setLoading(false)
  // })
  return (
    <>
      {/* <Loading isLoading={loading}/> */}
      <div className="All">
        <Router/>
      </div>
    </>
  );
}

export default App;
