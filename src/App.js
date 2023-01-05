import React from 'react';
import './css/App.css';
import Navigation from './Components/Navigation';
import Menu from './Components/Menu'
import NewsBlock from './Components/News/NewsBlock';
import MediaSect from './Components/Videos/MediaSect';
import Footer from './Components/Footer';
import Wheater from './Components/Wheater';
import CalAndPoll from './Components/CalAndPoll';
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
        <Navigation/>
        <Menu/>
        <NewsBlock/>
        <MediaSect/>
        <Wheater/>
        <CalAndPoll/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
