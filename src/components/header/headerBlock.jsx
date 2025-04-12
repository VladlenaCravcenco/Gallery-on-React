import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./header.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Modal from "../modal/modal";
import apple from "../../resources/svg/Apple.svg";
import google from "../../resources/svg/Google.svg";
import facebook from "../../resources/svg/Facebook.svg";

const HeaderBlock = () => {
  const navigate = useNavigate();
  const [nav, setNav] = useState(false); // для бургер-меню
  const [modalActive, setModalActive] = useState(false); // для модалки

  const newMenuArr = [
    { label: "despre noi", path: "desprenoi" },
    { label: "evenimente", path: "evenimente" },
    { label: "licitaţie", path: "licitatie" },
    { label: "artiștii", path: "artistii" },
    { label: "contacte", path: "contacte" },
  ];

  const handleNavClick = (path) => {
    navigate(path, { replace: true });
    setNav(false); // Закрыть бургер
  };

  const handleLogoClick = () => {
    navigate("/", { replace: true });
    setNav(false);
  };

  const renderMenuItems = () => {
    return newMenuArr.map(({ label, path }) => (
      <li key={label}>
        <button className="nav-btn" onClick={() => handleNavClick(path)}>
          {label}
        </button>
      </li>
    ));
  };

  return (
    <header className={`navbar ${nav ? "pos-absolute" : ""}`}>
      <a onClick={handleLogoClick} className="head-logo">
        GALLERY SENTIMENT
      </a>

      <nav>
        <ul className={`menu ${nav ? "active" : ""}`}>
          {renderMenuItems()}
        </ul>
      </nav>

      <div className="right-nav">
        <input type="search" name="search" />
        <button className="btn-conectare" onClick={() => setModalActive(true)}>
          conectare
        </button>

        <Modal id="signup" active={modalActive} setActive={setModalActive}>
          <div className="login-place">
            <div className="log-container">
              <div className="form-to-fill">
                <h1>Log in</h1>
                <form method="post">
                  <div className="txt-field">
                    <input type="text" required />
                    <label>Nume de utilizator sau email</label>
                  </div>
                  <div className="txt-field">
                    <input type="password" required />
                    <label>Parolă</label>
                  </div>
                  <div className="pass">Ați pierdut parola?</div>
                  <button
                    type="button"
                    onClick={() => {
                      navigate("myroom", { replace: true });
                      setModalActive(false);
                    }}
                  >
                    conectare
                  </button>

                  <div className="signup-link">
                    Don't have an account? <a href="#">Creează un cont nou</a>
                  </div>

                  <div className="variante">
                    <div className="cuApple">
                      <img src={apple} alt="" /> Continuă cu Apple
                    </div>
                    <div className="google">
                      <img src={google} alt="" /> Continuă cu Google
                    </div>
                    <div className="facebook">
                      <img src={facebook} alt="" /> Continuă cu Facebook
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Modal>
      </div>

      <div onClick={() => setNav(!nav)} className="mobile_btn">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
    </header>
  );
};

export default HeaderBlock;