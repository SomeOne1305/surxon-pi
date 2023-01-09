import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Calendar } from 'react-calendar'
import axios from 'axios';
import MyLoader from './MyLoader';
import Notify from 'simple-notify'
import style from '../css/calendar&poll.module.scss'
import 'react-calendar/dist/Calendar.css';
import 'simple-notify/dist/simple-notify.min.css'
import '../css/calendar.scss'

ChartJS.register(ArcElement, Tooltip, Legend);

export default function CalAndPoll() {
    const warning = React.useRef()
    const results = React.useRef()
    const sendBtn = React.useRef()
    const [pollItems, setPollItems] = React.useState([])
    const [userIp, setUserIp] = React.useState('')
    const [users, setUsers] = React.useState([])

    // const [isVoted, setIsVoted] = React.useState(false)

    React.useEffect(() => {
        async function getDatas() {
            let items = await axios.get('https://63581c07c27556d28937782a.mockapi.io/voting-poll')
            setPollItems(items.data)
        }
        async function getIp() {
            let ip = await axios.get('https://geolocation-db.com/json/')
            setUserIp(ip.data.IPv4)
        }
        async function getUserList() {
            let user = await axios.get('https://63581c07c27556d28937782a.mockapi.io/voted-users')
            setUsers(user.data)
        }
        getDatas()
        getIp()
        getUserList()
    }, [])

    // let isAuth = users.find(e=> e.name === userIp)
    // localStorage.setItem('isTrue',isAuth === undefined ? false : true)
    const [active, setActive] = React.useState()
    async function postData() {
        if (users.find(el => el.name === userIp) === undefined) {
            let data = {
                name: userIp
            }
            await axios.put(`https://63581c07c27556d28937782a.mockapi.io/voting-poll/${active}`, { votes: pollItems[active - 1].votes + 1 })
            await axios.post('https://63581c07c27556d28937782a.mockapi.io/voted-users', data)
            console.log('Data was sent successfully');
            new Notify({
                status: 'success',
                title: 'Notify Title',
                text: 'Notify text lorem ipsum',
                effect: 'fade',
                speed: 300,
                customClass: null,
                customIcon: null,
                showIcon: true,
                showCloseButton: true,
                autoclose: false,
                autotimeout: 3000,
                gap: 20,
                distance: 20,
                type: 1,
                position: 'top end'
            })
        } else {
            setTimeout(() => {
                warning.current.style.display = "block"
                setTimeout(() => (warning.current.style.display = "none"), 2000)
            }, 50)
            console.log('user is checked in voted users list');

        }
    }
    let data = [{},{}]

   function showResults(){
    results.current.style.display = "flex"
     data = {
        
        // [pollItems[0].body, pollItems[1].body, pollItems[2].body]
        labels: [pollItems[0].body, pollItems[1].body,pollItems[2].body],
        datasets: [
            {
                label: "Ovozlar soni",
                data: [pollItems[0].votes,pollItems[1].votes, pollItems[2].votes],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1
            }
        ]
    }
   }

    return (
        <div className={style.activation_sect}>
            <div className={style.container}>
                <div className={style.results_window} ref={results}>
                    {/* <div className={style.poll_res}>
                        <div className={style.res_items}>
                            <div className={style.res_item}>
                                <span className={style.percent_index}>17%</span>
                                <div className={style.percent_path}>
                                    <div className={style.percent_line}></div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className={style.chart}>
                        <Doughnut data={data} style={{ width: 400, height: 400 }} />;
                    </div>
                </div>
                <div className={style.web_activity}>
                    <div className={style.voting_poll}>
                        <h3>Lorem ipsum dolor sit amet consectetur.</h3>
                        <div className={style.voting_poll_items}>
                            {
                                pollItems === undefined || pollItems.length === 0 ?
                                    (<MyLoader />)
                                    : pollItems.map((item, index) => {
                                        return (
                                            <div key={index} onClick={() => setActive(item.id)} className={active === item.id ? `${style.voting_poll_item} ${style.active}` : `${style.voting_poll_item}`} >
                                                <div className={style.radio_btn}>
                                                    <div className={active === item.id ? `${style.radio_btn_active} ${style.active_rad}` : `${style.radio_btn_active}`}></div>
                                                </div>
                                                <span>{item.body}</span>
                                            </div>
                                        )
                                    })
                            }
                        </div>
                        <span className={style.warning} ref={warning}>You have already voted these !</span>
                        <div className={style.options} >
                            <button className={`${style.button} ${style.send}`} ref={sendBtn} onClick={postData}>
                                <span>Yuborish &#10148;</span>
                            </button>
                            <div className={`${style.button} ${style.results}`} onClick={(() => showResults())} >
                                <span>Natijalar</span>
                            </div>
                        </div>
                        <span className={style.voted_people} id="voted">{users.length} answers</span>
                    </div>
                    <Calendar calendarType='ISO 8601' />
                </div>
            </div>
        </div>
    )
}