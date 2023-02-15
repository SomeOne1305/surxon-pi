import React from "react";
import style from "../../css/newsCard.module.scss";
import RightContent from "./RightContent";
import { Routes, Route } from "react-router-dom";
import NewsCardView from "./NewsCardView";
import About from "../pages/AboutUs/About";
import Contact from "../Contact";
import Loader from "../Loading"

const DocumentList = React.lazy(() => import(/*webpackChunkName=DocumentList*/ "../pages/DocumentList"))

export default function NewsBlock() {
  // const [news, setNews] = React.useState([])
  // React.useEffect(() => {
  //   async function getNews() {
  //     let news_data = await axios.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=fb977e2e949f4ad183230ee6127538da')
  //     setNews(news_data.data)
  //   }
  //   getNews()
  // }, [])
  return (
    <div className={style.newsSection}>
      <div className={style.container}>
        <Routes>
          <Route path="/" element={<NewsCardView />} />
          <Route
            path="/docs/:title"
            element={
              <React.Suspense fallback={<Loader isLoading={true}/>}>
                <DocumentList/>
              </React.Suspense>
            }
          />
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        <RightContent />
      </div>
    </div>
  );
}
