import React from 'react'
import style from '../css/main.module.scss'
import logo from '../images/logo.png'
import call_man from '../images/support_man.png'
import {motion} from 'framer-motion'

export default function Navigation() {

    const input = React.useRef()
    function shrink(){
        input.current.style.width = input.current.offsetWidth + (input.current.offsetWidth / 100 * 15) +'px'
    }
    function defaultCont(){
        input.current.style.width = 'auto'
    }
    
    return (
        <nav>
            <motion.div className={style.navbar_top} initial={{opacity: 0, y:-10}} animate={{opacity:1, y:0}} transiton={{duration:5, ease:'linear'}}>
                <div className={style.container}>
                    <ul>
                        <li>
                            <a href="/">
                                <div className={style.icon}>
                                    <i className="fa fa-home"></i>
                                </div>
                                <span>Бош саҳифа</span>
                            </a>
                        </li>
                        <li>
                            <a href="/">                        
                                <div className={style.icon}>
                                    <i className="fas fa-sitemap"></i>
                                </div>
                                <span>Сайт харитаси</span>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <div className={style.icon}>
                                    <i className="fa fa-mobile-screen-button"></i>
                                </div>
                                <span>Мобил талқин</span>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <div className={style.icon}>
                                    <i className="fa fa-eye"></i>
                                </div>
                                <span>Заиф кўрувчилар учун</span>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <div className={style.icon}>
                                    <i className="fa fa-sign-in"></i>
                                </div>
                                <span>Тизимга кириш</span>
                            </a>
                        </li>
                    </ul>
                    <div className={style.second_part}>
                        <div className={style.search} security="ri990103" ref={input}>
                            <input type="text" placeholder='Сайт бўйлаб излаш' onFocus={()=>shrink()} onBlur={()=>{defaultCont()}}/>
                            <i className="fa fa-search"></i>
                        </div>
                        <div className={style.languages}>
                            <div className={style.language}>

                            </div>
                            <div className={style.language}>

                            </div>
                            <div className={style.language}>

                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
            <div className={style.nav_contact}>
                <div className={style.container}>
                    <div className={style.contact}>
                        <div className={style.logo}>
                            <img src={logo} alt="" />
                        </div>
                        <div className={style.call}>
                            <h2 className={style.comp_name}>"Surxon Pi" aksiyadorlik jamiyati</h2>
                            <div className={style.call_number}>
                                <div className={style.call_title}>
                                    <img src={call_man} alt="" />
                                    <span>ishonch telefonlari:</span>
                                </div>
                                <div className={style.numbers}>
                                    <span>+99871-234-25-14</span>
                                    <br />
                                    <span>+99871-277-42-14</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className={style.call}>
                        <div className={style.call_number}>
                            <span><img src={phone_icon} alt="" /></span>
                        </div>
                    </div> */}
                </div>
            </div>
        </nav>
    )
}
