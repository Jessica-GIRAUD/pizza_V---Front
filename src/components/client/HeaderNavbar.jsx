import React, { useState } from "react";
import logo from "../images/logo.png";
import "./styles/navbar.css";
import { useLocation, useNavigate } from "react-router-dom";
import { push as Menu } from "react-burger-menu";
import { HashLink as Link } from "react-router-hash-link";

const HeaderNavbar = () => {
  const { hash } = useLocation();
  const navigate = useNavigate();

  // state for mobile navbar
  const [isOpen, setOpen] = useState(false);

  // handle open for menu burger
  const handleIsOpen = () => {
    setOpen(!isOpen);
  };

  // handle close for menu burger
  const closeSideBar = () => {
    setOpen(false);
  };

  // change url while scrolling
  window.addEventListener("load", () => {
    const sections = document.querySelectorAll("section");
    const accueilSection = document.getElementById("accueil");
    const titleId = document.getElementById("title");
    document.addEventListener("scroll", (e) => {
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const rectAccueil = titleId.getBoundingClientRect();
        if (rect.top > 0 && rect.top < 150) {
          navigate.push("#" + section.id);
        }
        if (rectAccueil.top > 0 && rectAccueil.top < 150) {
          navigate.push("#" + accueilSection.id);
        }
      });
    });
  });

  const navbarItems = [
    { title: "Accueil", path: "/#accueil", hashed: "#accueil" },
    { title: "Nos Pizzas", path: "/#pizzas", hashed: "#pizzas" },
    { title: "Contact", path: "/#contact", hashed: "#contact" },
  ];

  return (
    <header className="navbar-container">
      <Link
        to="/#accueil"
        scroll={(el) =>
          el.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
        className="logo-link"
      >
        <img src={logo} alt="Pizza Kika" id="logo" className="navbar-logo" />
      </Link>

      <nav className="mobile-menu">
        <Menu
          right
          isOpen={isOpen}
          onOpen={handleIsOpen}
          onClose={handleIsOpen}
        >
          <ul className="navbar-list">
            {navbarItems.map(({ title, path, hashed = "" }, index) => {
              return (
                <li
                  key={index}
                  className={hash === hashed ? "active" : ""}
                  onClick={closeSideBar}
                >
                  <Link
                    to={path}
                    scroll={(el) =>
                      el.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      })
                    }
                  >
                    {title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </Menu>
      </nav>
    </header>
  );
};

export default HeaderNavbar;
