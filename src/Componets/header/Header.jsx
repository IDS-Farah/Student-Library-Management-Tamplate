import Bars from "../../assets/dasdhboard/bars.svg";
import Avatar from "../../assets/dasdhboard/avatar.webp";
import ChevronDown from "../../assets/dasdhboard/chevron-down.svg";
import "../header/Header.css";

import { useLanguage } from "../../context/LanguageContext";
import { studentFormText } from "../../i18n/studentForm";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Header = () => {

  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();


  const { language, toggleLanguage } = useLanguage();

  const nextLanguage = language === "en" ? "Urdu" : "English";

    const t = studentFormText[language];


  return (
    <div className="header">
      <header>
        <div className="row align-items-center">
          <div className="col-md-3">
            <h3>{t.StudentLibrary}</h3>
          </div>



          <div className="col-md-9">
            <div className="row align-items-center">
              <div className="col-md-2">
                <img src={Bars} alt="Menu" />
              </div>

              <div className="col-md-3"></div>

              <div className="col-md-7 text-end">
                <div className="row align-items-center">
                  <div className="col-md-5">
                    <p className="me-1 mt-2">10-01-2026 11:05 AM</p>
                  </div>

                  <div className="col">
                    <img
                      src={Avatar}
                      alt="User"
                      style={{ width: "40px", height: "40px" }}
                    />
                    <img
                      src={ChevronDown}
                      alt="Dropdown"
                      style={{ width: "20px", height: "20px", margin: "10px" }}
                    />
                  </div>

                  <div className="col-md-4">
                    <button
                      className="btn btn-primary"
                      onClick={toggleLanguage}
                    >
                      Switch to {nextLanguage}
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
