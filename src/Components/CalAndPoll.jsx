import React from 'react'
import style from '../css/calendar&poll.module.scss'
import { Calendar } from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import '../css/calendar.scss'
import axios from 'axios';

export default function CalAndPoll() {

    const [poll_items, setPoll_items] = React.useState()
    const [poll_value, setPoll_value] = React.useState()
    
    React.useEffect(() => {
        async function getPollItems() {
            let items = await axios.get('http://localhost:8080/api')
            setPoll_items(items.data)
        }
        getPollItems()
    }, [])
    console.log(poll_items)
    const [pollActive, setPollActive] = React.useState()
    const [pollIndex, setPollIndex] = React.useState(poll_items[pollActive].id)
    return (
        <div className={style.activation_sect}>
            <div className={style.container}>
                <div className={style.web_activity}>
                    <div className={style.voting_poll}>
                        <h3>Lorem ipsum dolor sit amet consectetur.</h3>
                        <div className={style.voting_poll_items}>
                            {/* <div className={style.voting_poll_item}>
                                <div className={style.radio_btn}>
                                    <div className={style.radio_btn_active}></div>
                                </div>
                                <span>Lorem ipsum dolor sit amet consectetur.</span>
                            </div>
                            <div className={style.voting_poll_item}>
                                <div className={style.radio_btn}>
                                    <div className="radio_btn-active"></div>
                                </div>
                                <span>Lorem, ipsum dolor.</span>
                            </div>
                            <div className={style.voting_poll_item}>
                                <div className={style.radio_btn}>
                                    <div className={style.radio_btn_active}></div>
                                </div>
                                <span>Lorem, ipsum dolor.</span>
                            </div> */}

                            {
                                poll_items.map((item, index) => {
                                    return (
                                        <div key={index} className={pollIndex === item.id ? `${style.voting_poll_item} ${style.active}` : style.voting_poll_item} onClick={()=>setPollActive(index)}>
                                            <div className={style.radio_btn}>
                                                <div className={style.radio_btn_active}></div>
                                            </div>
                                            <span>{item.body}</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <span className={style.warning}>You have already voted these !</span>
                        <div className={style.options}>
                            <div className={`${style.button} ${style.send}`}>
                                <span>Yuborish &#10148;</span>
                            </div>
                            <div className={`${style.button} ${style.results}`}>
                                <span>Natijalar</span>
                            </div>
                        </div>
                        <span className={style.voted_people} id="voted">12 answers</span>
                    </div>
                    <Calendar calendarType='ISO 8601' />
                </div>
            </div>
        </div>
    )
}