import React from 'react'
import NewsCard from './NewsCard'
import style from '../../css/newsCard.module.scss'
import president from '../../images/president.jpg'

export default function NewsBlock() {
  window.addEventListener('keypress', () => {
    console.log(window.getSelection().toString());
  })

  // const [news, setNews] = React.useState([])
  // React.useEffect(() => {
  //   async function getNews() {
  //     let news_data = await axios.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=fb977e2e949f4ad183230ee6127538da')
  //     setNews(news_data.data)
  //   }
  //   getNews()
  // }, [])
  const datas = [
    {
      title: "Шавкат Мирзиёев парламентга мурожаатида энг кўп қайси сўзларни ишлатди?",
      date: "21.12.2022",
      info: "Президент 20 декабрдаги парламентга мурожаатида энг кўп «таълим» (25 марта), «аҳоли» (22 марта), «мактаб» (23 марта), «халқ», «инвестиция», «тадбиркорлик», «конституция», «маҳалла» ва «энергетика» сўзларини ишлатди. Иқтисодий тадқиқотлар ва ислоҳотлар маркази мурожаат таҳлилини тақдим этишди.",
      image: "https://www.gazeta.uz/media/img/2022/12/NgSdBR16715253300656_b.jpg"
    },
    {
      title: "Ўзбек-қозоқ бизнес-форумида қиймати $3 млрддан ортиқ келишувлар имзоланди",
      date: "21.12.2022",
      info: "21 декабрь куни бўлиб ўтган ўзбек-қозоқ бизнес-форуми якунлари бўйича Самарқанд ва Туркистон шаҳарлари ўртасида савдо-иқтисодий ва маданий-гуманитар ҳамкорликни ривожлантириш тўғрисида битим имзоланди. Шунингдек, томонлар қиймати $3 млрддан ортиқ бўлган лойиҳаларни амалга оширишга келишиб олди.",
      image: "https://www.gazeta.uz/media/img/2022/12/P0JEHd16702244812140_m.jpg"
    },
    {
      title: "Ўзбекистон Қирғизистонга туркман газидан фойдаланиб ишлаб чиқарилган электр энергиясини етказиб берди",
      date: "21.12.2022",
      info: "Ўзбекистон Қирғизистонга Туркманистон газидан ишлаб чиқариладиган электр энергиясини Сирдарё дарёсини сув билан таъминловчи Тўхтагул сув омборида сув сатҳининг кескин пасайишига йўл қўймаслик учун етказиб берди.",
      image: "https://www.gazeta.uz/media/img/2022/12/Puknzy16712148965830_b.jpg"
    }
  ]
  return (
    <div className={style.newsSection}>
      <div className={style.container}>
        <div className={style.news_uz}>
          <div className={style.top_title}>
            <h3>Yangiliklar</h3>
            <a href="/">
              <i className="fa fa-rss"></i>
              Barcha Yangiliklar
            </a>
          </div>
          <div className={style.news}>
            {
              datas.map((item, index) => {
                return <NewsCard key={index} date={item.date} news_info={item.info} news_title={item.title} news_image={item.image} />
              })
            }
          </div>
        </div>
        <div className={style.const_block}>
          <div className={style.year_announcement}>
            <img src={president} alt="" />
            <div className={style.title}>
              <a href="/">
                <h3>2023 yil - "Insonga e’tibor va sifatli ta’lim" yili</h3>
              </a>
            </div>
          </div>
          <div className={style.ext_menu}>
            <div className={style.extra}>
              <i className="fa-fa-envelope"></i>
              <p>Boshqaruv raisining virtual qabulxonasi</p>
            </div>
            <div className={style.extra}>
              <i className="fa-fa-envelope"></i>
              <p>Boshqaruv raisining virtual qabulxonasi</p>
            </div>
            <div className={style.extra}>
              <i className="fa-fa-envelope"></i>
              <p>Boshqaruv raisining virtual qabulxonasi</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
