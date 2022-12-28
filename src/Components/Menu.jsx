import React from 'react'
import Slider from './Slider'
import style from '../css/menu.module.scss'



export default function Menu(){
  // const [active, setActive] = React.useState()
  return (
    <div className={style.nav_block}>
      <div className={style.container}>
        <div className={style.sliding}>
          <h3>"Surxon pi" aksiyadorlik jamiyati</h3>
        </div>
        <div className={style.navigation}>
          {/* Mobile navigation start */}
          <div className={style.mob_menu}>
            <div className={style.header_nav_block}>
              <span>Menu</span>
              {/*onClick={(e) => setActive(e.target.checked)} */}
              <input type="checkbox" name="toggle" id="toggle" />
              <label htmlFor="toggle">
                <div className={style.nav_hamburger_menu}>
                  <i className="fa fa-bars"></i>
                </div>
              </label>
            </div>
            
          </div>
          {/*Mobile navigation end*/}
          <div className={style.nav_bar}>
            <div className={style.nav_items}>
              <div className={style.item}>
                <a href='/' className={style.route_name}>Jamiyat to'g'risida</a>
                <div className={style.routesToPages}>
                  <a href='/'>
                    <div className={style.route}>
                      <span>Biz haqimizda</span>
                    </div>
                  </a>
                  <a href='/'>
                    <div className={style.route}>
                      <span>Jamiyat rahbariyati</span>
                    </div>
                  </a>
                  <a href='/'>
                    <div className={style.route}>
                      <span>Jamiyat faoliyationing predmeti va maqsadlari</span>
                    </div>
                  </a>
                  <a href='/'>
                    <div className={style.route}>
                      <span>Jamiyatning ustavi</span>
                    </div>
                  </a>
                  <a href='/'>
                    <div className={style.route}>
                      <span>Jamiyatni rivojlantirish strategiyasi</span>
                    </div>
                  </a>
                  <a href='/'>
                    <div className={style.route}>
                      <span>Jamiyatning tashkiliy tuzilmasi</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                      </svg>
                      <div className={style.inner_item}>
                        <a href="/">
                          <div className={style.inner_route}>
                            <span>Tashkiliy tuzilma</span>
                          </div>
                        </a>
                        <a href="/">
                          <div className={style.inner_route}>
                            <span>Tarkibiy bo'linmalari</span>
                          </div>
                        </a>
                        <a href="/">
                          <div className={style.inner_route}>
                            <span>Sho'ba xo'jalik jamiyatlari</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </a>
                  <a href='/'>
                    <div className={style.route}>
                      <span title="komissiyalar, kengashlar, qo'mitalar">Jamiyat kollegial va maslahat organlari</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                      </svg>
                      <div className={style.inner_item}>
                        <a href="/">
                          <div className={style.inner_route}>
                            <span>Kuzatuv kengashi</span>
                          </div>
                        </a>
                        <a href="/">
                          <div className={style.inner_route}>
                            <span>Taftish komissiyasi</span>
                          </div>
                        </a>
                        <a href="/">
                          <div className={style.inner_route}>
                            <span>Sanoq komissiyasi</span>
                          </div>
                        </a>
                        <a href="/">
                          <div className={style.inner_route}>
                            <span>Monitor aksiyadorlar qo'mitasi</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </a>
                  <a href='/'>
                    <div className={style.route}>
                      <span>Affillangan shaxslar ro'yxati</span>
                    </div>
                  </a>
                  <a href='/'>
                    <div className={style.route}>
                      <span >Bo'sh ish o'rinlari</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                      </svg>
                      <div className={style.inner_item}>
                        <a href="/">
                          <div className={style.inner_route}>
                            <span>Bo'sh ish o'rinlari</span>
                          </div>
                        </a>
                        <a href="/">
                          <div className={style.inner_route}>
                            <span>Ishga qabul qilish shartlari</span>
                          </div>
                        </a>
                        <a href="/">
                          <div className={style.inner_route}>
                            <span>Nomzodga qo'yiladigan talablar</span>
                          </div>
                        </a>
                        <a href="/">
                          <div className={style.inner_route}>
                            <span>Monitor aksiyadorlar qo'mitasi</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div className={style.line}></div>

              <div className={style.item}>
                <a href='/' className={style.route_name}>Korporativ boshqaruv</a>
                <div className={style.routesToPages}>
                  <a href='/'>
                    <div className={style.route}>
                      <span>Jamiyatning ichki hujjatlari</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                      </svg>
                      <div className={style.inner_item}>
                        <a href="/">
                          <div className={style.inner_route}>
                            <span>Korporativ boshqaruv kodeksi</span>
                          </div>
                        </a>
                        <a href="/">
                          <div className={style.inner_route}>
                            <span>Aksiyadorlarning umumiy yig'ilishi nizomi</span>
                          </div>
                        </a>
                        <a href="/">
                          <div className={style.inner_route}>
                            <span>Kuzatuv kengashi nizomi</span>
                          </div>
                        </a>
                        <a href="/">
                          <div className={style.inner_route}>
                            <span>Taftish komissiyasi nizomi</span>
                          </div>
                        </a>
                        <a href="/">
                          <div className={style.inner_route}>
                            <span>Ijroiya organi nizomi</span>
                          </div>
                        </a>
                        <a href="/">
                          <div className={style.inner_route}>
                            <span>Manfaatlar qarama-qarshiligi vaqtida xarajat qilish tartibi nizomi</span>
                          </div>
                        </a>
                        <a href="/">
                          <div className={style.inner_route}>
                            <span>Ichki nazorat nizomi</span>
                          </div>
                        </a>
                        <a href="/">
                          <div className={style.inner_route}>
                            <span>Axbarot siyosati nizomi</span>
                          </div>
                        </a>
                        <a href="/">
                          <div className={style.inner_route}>
                            <span>Dividend siyosati nizomi</span>
                          </div>
                        </a>
                        <a href="/">
                          <div className={style.inner_route}>
                            <span>Boshqaruv va nazorat organlarini rag'batlantirish nizomi</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </a>
                  <a href='/'>
                    <div className={style.route}>
                      <span>Emissiyasi prospectlari</span>
                    </div>
                  </a>
                  <a href='/'>
                    <div className={style.route}>
                      <span>Jamiyatning biznes-rejalari</span>
                    </div>
                  </a>
                  <a href='/'>
                    <div className={style.route}>
                      <span>Ma'lumotlarni oshkor qilish</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                      </svg>
                      <div className={style.inner_item}>
                        <a href="/">
                          <div className={style.inner_route}>
                            <span>Choraklik hisobatlar</span>
                          </div>
                        </a>
                        <a href="/">
                          <div className={style.inner_route}>
                            <span>Yil yakuni hisobatlari</span>
                          </div>
                        </a>
                        <a href="/">
                          <div className={style.inner_route}>
                            <span>Muhim faktlar</span>
                          </div>
                        </a>
                        <a href="/">
                          <div className={style.inner_route}>
                            <span>Umumiy yig'ilish va sanoq komissiyasi bayonnomalari</span>
                          </div>
                        </a>
                        <a href="/">
                          <div className={style.inner_route}>
                            <span>MCFO</span>
                          </div>
                        </a>
                        <a href="/">
                          <div className={style.inner_route}>
                            <span>Oxirgi uch yilda hisoblangan va to'langan dividendlar</span>
                          </div>
                        </a>
                        <a href="/">
                          <div className={style.inner_route}>
                            <span>Asosiy ko'rsatkichlar</span>
                          </div>
                        </a>
                        <a href="/">
                          <div className={style.inner_route}>
                            <span>Sotib olingan aksiyalar</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </a>
                  <a href='/'>
                    <div className={style.route}>
                      <span>Tashqi audit xulosalari</span>
                    </div>
                  </a>
                  <a href='/'>
                    <div className={style.route}>
                      <span>Ichki audit xizmati</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                      </svg>
                      <div className={style.inner_item}>
                        <a href="/">
                          <div className={style.inner_route}>
                            <span>Ichki audit xizmati xodimlari</span>
                          </div>
                        </a>
                        <a href="/">
                          <div className={style.inner_route}>
                            <span>Ichki audit xizmati xulosalari</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </a>
                  <a href='/'>
                    <div className={style.route}>
                      <span>Taftish komissiyasi xulosalari</span>
                    </div>
                  </a>
                  <a href='/'>
                    <div className={style.route}>
                      <span>Aksiyadorlar uchun e'lonlar</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className={style.line}></div>
              <div className={style.item}>
                <a href="/" className={style.route_name}>
                  Maxsulotlar va xizmatlar
                </a>
                <div className={style.routesToPages}>
                  <a href="/">
                    <div className={style.route} title="turlari va qiymati (tariflar)">
                      <span>Jamiyat tomonidan ishlab chiqarikadigan maxsulotlar</span>
                    </div>
                  </a>
                  <a href="/">
                    <div className={style.route} title="turlari va qiymati (tariflar)">
                      <span>Bajariladigan ishlar va ko'rsatiladigan xizmatlar</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className={style.line}></div>
              <div className={style.item}>
                <a href="/" className={style.route_name}>Matbuot markazi</a>
                <div className={style.routesToPages}>
                  <a href="/">
                    <div className={style.route}>
                      <span>Yangiliklar</span>
                    </div>
                  </a>
                  <a href="/">
                    <div className={style.route}>
                      <span>Tenderlar</span>
                    </div>
                  </a>
                  <a href="/">
                    <div className={style.route}>
                      <span>Seminarlar</span>
                    </div>
                  </a>
                  <a href="/">
                    <div className={style.route}>
                      <span>Matbuot-xizmati</span>
                    </div>
                  </a>
                  <a href="/">
                    <div className={style.route}>
                      <span>Ommaviy tadbirlar</span>
                    </div>
                  </a>
                  <a href="/">
                    <div className={style.route}>
                      <span>Rasmiy tashriflar</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className={style.line}></div>
              <div className={style.item}>
                <a href="/" className={style.route_name}>Qayta aloqa bog'lash</a>
                <div className={style.routesToPages}>
                  <a href="/">
                    <div className={style.route}>
                      <span>Biz bilan bog'lash</span>
                    </div>
                  </a>
                  <a href="/">
                    <div className={style.route}>
                      <span>Yuridik va jismoniy shaxslarning murojaatlarini qabul qilish</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <Slider />
        </div>
      </div>
    </div>
  )
}
