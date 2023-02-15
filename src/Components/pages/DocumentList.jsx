import React from "react";
import "../../css/document.scss";
import { Files } from "../Files";
import Notify from "simple-notify";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function DocumentList() {
  const { title } = useParams();
  const [files, setFiles] = React.useState([]);
  const [docTitle, setDocTitle] = React.useState("");
  React.useEffect(() => {
    async function getData() {
      let documents = await axios
        .get(`https://api.npoint.io/caea5dad651121aea40c/documents/${title}`)
        .catch((err) => console.log("error is", err));
      setFiles(documents.data.files);
    }
    async function getByTitle() {
      let tit = await axios.get(
        `https://api.npoint.io/caea5dad651121aea40c/documents/${title}/title`
      );
      setDocTitle(tit.data);
    }
    getByTitle();
    getData();
  }, [title]);
  function checkTypeOfFile(file) {
    let fullFile = file.toLowerCase().split(".");
    let fileType = fullFile[fullFile.length - 1];
    return fileType;
  }
  const docs = files.filter((url) =>
    /\.(docx|doc|pdf|xls|xlsx|ppt|pptx)$/.test(url.fileUrl.toLowerCase())
  );
  const images = files.filter((url) =>
    /\.(jpe?g|png|webp)$/.test(url.fileUrl.toLowerCase())
  );
  function openFile(fileType, fileUrl) {
    if (
      fileType === "doc"  ||
      fileType === "docx" ||
      fileType === "ppt"  ||
      fileType === "pptx" ||
      fileType === "xls"  ||
      fileType === "xlsx"
    ) {
      new Notify({
        status: "warning",
        title: "Ogohlantirish",
        text: "Bu fayl brauzer tomonidan qo'llab quvvatlanmaydi.",
        effect: "slide",
        speed: 300,
        customClass: null,
        customIcon: null,
        showIcon: true,
        showCloseButton: true,
        autoclose: true,
        autotimeout: 3000,
        gap: 20,
        distance: 20,
        type: 1,
        position: "right top",
      });
      console.log(typeof fileType);
    } else {
      // new Notify({
      //   status: 'success',
      //   title: 'Muvaffaqiyatli',
      //   text: "2 soniya kuting",
      //   effect: 'slide',
      //   speed: 200,
      //   customClass: null,
      //   customIcon: null,
      //   showIcon: true,
      //   showCloseButton: true,
      //   autoclose: true,
      //   autotimeout: 3000,
      //   gap: 20,
      //   distance: 20,
      //   type: 1,
      //   position: 'right top'
      // })
      // setTimeout(()=>{
      //   window.open(fileUrl, '_blank')
      // }, 2000)
      window.open(fileUrl, "_blank");
    }
  }
  return (
    <div className="document">
      <h2>{docTitle}</h2>
      <div className="docs">
        <ul>
          {docs.length !== 0 || docs !== undefined
            ? docs.map((item) => (
                <li key={item.fileName}>
                  <img
                    src={
                      Files.find(
                        (e) => e.type === checkTypeOfFile(item.fileUrl)
                      ).icon
                    }
                    alt=""
                    className="icon"
                  />
                  <div
                    className="fileName"
                    onClick={() =>
                      openFile(checkTypeOfFile(item.fileUrl), item.fileUrl)
                    }
                  >
                    <span>{item.fileName}</span>
                  </div>
                  <a
                    href={`${process.env.PUBLIC_URL}${item.fileUrl}`}
                    className="download"
                    download
                  >
                    <i className="fa fa-download"></i>
                  </a>
                </li>
              ))
            : ""}
          {images.length !== 0 || images !== undefined
            ? images.map((item) => (
                <div className="imageFile" key={item.fileName}>
                  <div className="top">
                    <h3>{item.fileName}</h3>
                    <a href={item.fileUrl}>
                      <i className="fa fa-download"></i>
                    </a>
                  </div>
                  <a href={item.fileUrl} target={"_blank"} rel={"noreferrer"}>
                    <img src={item.fileUrl} alt="" />
                  </a>
                </div>
              ))
            : ""}
          {/* <li>
            <img src={Files[0].icon} alt="" className="icon" />
            <div className="fileName">
              <a href="/">
                <span>{licence[0].fileName}</span>
              </a>
            </div>
            <a href="/" className="download">
              <i className="fa fa-download"></i>
            </a>
          </li>
          <div className="imageFile">
            <h3>{licence[0].fileName}</h3>
            <a href={licence[0].fileUrl} target={"_blank"} rel={"noreferrer"}>
              <img src={licence[0].fileUrl} alt="" />
            </a>
          </div> */}
        </ul>
      </div>
    </div>
  );
}
