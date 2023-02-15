import axios from "axios";
import React from "react";
import { useIMask } from "react-imask";
import { PulseLoader } from "react-spinners";
import "../css/contact.scss";

const Contact = () => {
  React.useEffect(() => {
    let head = document.querySelector("head");
    let em = document.createElement("script");
    em.setAttribute("src", "https://smtpjs.com/v3/smtp.js");
    head.append(em);
    return () => {
      head.removeChild(em);
    };
  });
  const [open, setOpen] = React.useState(false);
  const [text, setText] = React.useState("");
  const [email, setEmail] = React.useState([]);
  const { ref, maskRef, value, setValue } = useIMask(
    { mask: "+{998}(00)000-00-00" },
    "onComplete"
  );
  const textarea = React.useRef();

  React.useEffect(() => {
    textarea.current.style.height = "150px";
    textarea.current.style.height = textarea.current.scrollHeight + "px";
  }, [text]);
  React.useEffect(() => {
    (async function () {
      let ema = await axios.get(
        "https://api-surxon.surxonpi.uz/api/v1/documents/?format=json"
      );
      setEmail(ema.data);
    })();
  }, []);
  function focused(e) {
    e.target.parentElement.parentElement.classList.add("focused");
    if (e.target.type === "tel") {
      setValue(" ");
    }
  }
  function blurred(e) {
    e.target.parentElement.parentElement.classList.remove("focused");
    if (e.target.type === "tel") {
      if (e.target.value === "+998(") {
        e.target.value = "";
      }
    }
  }
  async function sendEmail(e) {
    e.preventDefault();
    let inputs = [
      e.target[0],
      e.target[1],
      e.target[2],
      e.target[3],
      e.target[4],
    ];
    if (
      e.target[0].value !== "" &&
      e.target[1].value !== "" &&
      e.target[2].value !== "" &&
      e.target[3].value !== "" &&
      e.target[4].value !== "" &&
      e.target[5].value !== ""
    ) {
      setOpen(true);
      let post = await axios
        .post(
          "https://api-surxon.surxonpi.uz/api/v1/applications/?format=json",
          {
            first_name: e.target[0].value,
            last_name: e.target[1].value,
            phone_number: e.target[3],
            email: e.target[2].value,
            message: e.target[4].value,
          }
        )
        .then((res) => console.log(res.status))
        .then(() => setOpen(false))
    } else {
      inputs.map((item) => {
        if (item.value === "" || item.value === "+998(") {
          if (item.id === "textarea") {
            item.classList.add("warned");
          } else {
            item.parentElement.parentElement.classList.add("warned");
          }
        }
      });
    }
  }
  console.log(email);
  return (
    <div className="contact-us">
      <div className={`loading ${open ? "" : "loaded"}`}>
        <PulseLoader color="#2B3A55" />
      </div>
      <h2>Murojaatingizni qoldiring</h2>
      <form action="" onSubmit={(e) => sendEmail(e)}>
        <div className="inputs">
          <div className="input">
            <div className="__input_field">
              <input
                type="text"
                placeholder="Ism"
                onFocus={(e) => focused(e)}
                onBlur={(e) => blurred(e)}
              />
              <div className="__title">Ism</div>
            </div>
            <div className="warning-text">Bu yer to'ldirilishi kerak !</div>
          </div>
          <div className="input">
            <div className="__input_field">
              <input
                type="text"
                placeholder="Familiya"
                onFocus={(e) => focused(e)}
                onBlur={(e) => blurred(e)}
              />
              <div className="__title">Familiya</div>
            </div>
            <div className="warning-text">Bu yer to'ldirilishi kerak !</div>
          </div>
          <div className="input">
            <div className="__input_field">
              <input
                type="email"
                placeholder="e-pochta"
                onFocus={(e) => focused(e)}
                onBlur={(e) => blurred(e)}
              />
              <div className="__title">Email</div>
            </div>
            <div className="warning-text">Bu yer to'ldirilishi kerak !</div>
          </div>
          <div className="input">
            <div className="__input_field">
              <input
                value={value}
                type="tel"
                placeholder="+998(xx) xxx-xx-xx"
                ref={ref}
                onFocus={(e) => focused(e)}
                onChange={(ev) => setValue(ev.target.value)}
                onBlur={(e) => blurred(e)}
              />
              <div className="__title">Telefon raqam</div>
            </div>
            <div className="warning-text">Bu yer to'ldirilishi kerak !</div>
          </div>
        </div>
        <div className="contact-text">
          <h3>Murojaatingiz :</h3>
          <div className="text-area">
            <textarea
              name="request"
              id="textarea"
              placeholder="Fikringizni qoldiring..."
              ref={textarea}
              value={text}
              onInput={(e) => setText(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="submit">
          <button type="reset" className="reset"><i className="fa-solid fa-rotate-right"></i></button>
          <button type="submit">Yuborish</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
