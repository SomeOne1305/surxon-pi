import React from 'react'
import { Link } from 'react-router-dom'
import style  from '../css/footer.module.scss'
import logo from '../images/logo.png'

export default function Footer(){
    return(
        <footer>
            <div className={style.container}>
                <div className={style.footer_block}>
                    <div className={style.footer_}>
                        <div className={style.logo}>
                            <img src={logo} alt="" />
                        </div>
                        <div className={style.items}>
                            <p className={style.name}>"Surxon parmalash ishlari" aksiyadorlik jamiyati</p>
                            <h3 className={style.community_name}>"Surxon PI" AJ</h3>
                            <p className={`${style.name} ${style.privacy}`}>Sayt ma'lumotlaridan foydalanilganda <span
                                className={`${style.community_name} ${style.source_url}`}>surxonpi.uz</span> manbasi ko'rsatilishi shart.</p>
                            <Link to={"/"}>
                                <img src="" alt="www.uz | statistics" />
                            </Link>
                        </div>
                    </div>
                    <div className={style.location_of_com}>
                        <div className={style.item}>
                            <i className="fa fa-phone" id={style.phone}></i>
                            <span>+998(71)-234-51-64</span>
                        </div>
                        <div className={style.item}>
                            <i className="fa fa-envelope" id={style.envelope}></i>
                            <span>info@surxonpi.uz</span>
                        </div>
                        <div className={style.item}>
                            <i className="fa fa-earth" id={style.earth}></i>
                            <span>https://surxonpi.uz</span>
                        </div>
                        <div className={style.item}>
                            <i className="fa fa-location-dot" id={style.location}></i>
                            <p>Surxondaryo viloyati Qumqo'rgon tumani Neftchilar mahallasi Lorem ko'chasi 19-uy</p>
                        </div>
                    </div>
                    <div className={style.no_copywrite}>
                        <span>2022 © Barcha huquqlar himoyalangan</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}