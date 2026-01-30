import "../header/Header.css";
import Avatar from "../../assets/dasdhboard/avatar.webp";

import { useLanguage } from "../../context/LanguageContext";
import { studentFormText } from "../../i18n/studentForm";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Header = () => {
  const navigate = useNavigate();
  const { language, toggleLanguage } = useLanguage();

  const t = studentFormText[language];
  const nextLanguage = language === "en" ? "Urdu" : "English";

  const handleLogout = async () => {
    try {
      await axios.post("https://localhost:7000/api/Account/logout");
    } catch {
      console.warn("Logout API failed, clearing local data anyway");
    } finally {
      localStorage.removeItem("auth");
      navigate("/", { replace: true });
    }
  };

  return (
    <header className="app-header">
      {/* LEFT */}
      <div className="header-left">
        <img
          src="/images/JMLogo.png"
          alt="Logo"
          className="header-logo"
          onClick={() => window.location.reload()}
          style={{ cursor: "pointer" }}
        />
      </div>


      {/* CENTER */}
      <div className="header-center">
        <h5 className="header-title">{t.WebsiteName}</h5>
      </div>

      {/* RIGHT */}
      <div className="header-right">
        <button
          className="btn btn-primary lang-btn"
          onClick={toggleLanguage}
        >
          {nextLanguage}
        </button>

        <div className="profile-wrapper">
          <img src={Avatar} className="user-avatar" alt="User" />

          <div className="dropdown-menu">
            <div className="dropdown-item-custom" onClick={handleLogout}>
              <img src="/images/log-out.svg" alt="Logout" width="18" />
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
