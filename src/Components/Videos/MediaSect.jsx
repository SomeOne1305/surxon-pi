import React from 'react'
import style from '../../css/media-sect.module.scss'

export default function MediaSect() {
  return (
    <div className={style.media_section}>
        <div className={style.container}>
            <div className={style.media_section__block}>
                <div className={style.media_section__block__images}>
                <div className={style.media_section__block__images_title}></div>
                <div className={style.media_section__block__images_img}>
                  <div className={style.media_section__block__images_img_1}>
                    <img src="" alt=""/>
                  </div>
                  <div className={style.media_section__block__images_img_1}>
                    <img src="" alt=""/>
                  </div>
                  <div className={style.media_section__block__images_img_1}>
                    <img src="" alt=""/>
                  </div>
                  <div className={style.media_section__block__images_img_1}>
                    <img src="" alt=""/>
                  </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
