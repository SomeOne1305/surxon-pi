import React from 'react';
import './css/App.css';
import Navigation from './Components/Navigation';
import Menu from './Components/Menu'
import NewsBlock from './Components/News/NewsBlock';
import MediaSect from './Components/Videos/MediaSect';
import Loading from './Components/Loading';



function App() {
  const [loading, setLoading] = React.useState(true)
  window.addEventListener('load', ()=>{
    setLoading(false)
  })
  return (
    <>
      <Loading isLoading={loading}/>
      <div className="All" style={{display: loading ? "none" : "block"}}>
        <Navigation/>
        <Menu/>
        <NewsBlock/>
        <MediaSect/>
    </div>
    </>
  );
}

export default App;
