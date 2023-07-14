import styled from "styled-components";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../assets/images/logo.png";
import miro from "../assets/images/miro.jpg";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const avatar = Cookies.get("avatar");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setScrolled(scrollTop > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function logout() {
    navigate("/");
    Cookies.remove("avatar");
    Cookies.remove("user");
    Cookies.remove("token");
    Cookies.remove("name");
    alert("Usuario deslogado com sucesso");
  }

  return (
    <HeaderPages scrolled={scrolled}>
      <Logo
        onClick={() => {
          navigate("/");
          window.scrollTo(0, 0);
        }}
        src={logo}
      />
      <div>
        <h2
          onClick={() => {
            navigate("/");
            window.scrollTo(0, 0);
          }}
        >
          HOME
        </h2>
        <h2
          onClick={() => {
            navigate("/history");
            window.scrollTo(0, 0);
          }}
        >
          QUEM SOMOS
        </h2>
        <h2
          onClick={() => {
            navigate("/gallery");
            window.scrollTo(0, 0);
          }}
        >
          GALERIA
        </h2>
        <h2
          onClick={() => {
            navigate("/request");
            window.scrollTo(0, 0);
          }}
        >
          SERVIÇOS
        </h2>
        <CircleImage src={avatar ? avatar : miro} />
        {avatar ? (
          <h2 onClick={() => logout()}>Sair</h2>
        ) : (
          <h2 onClick={() => navigate("/signin")}>Entar</h2>
        )}
      </div>
    </HeaderPages>
  );
}
const Logo = styled.img`
  width: 200px;
  height: 70px;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 100px;
    height: 30px;
  }
`;
const CircleImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-left: 20px;
  object-fit: cover;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;
const HeaderPages = styled.header`
  display: flex;
  z-index: 99;
  background-color: ${({ scrolled }) => (scrolled ? "#1d1d1d" : "transparent")};
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  box-shadow: 0 0.5px 0.5px rgba(131, 131, 131, 0.281);
  padding: 0 30px;
  position: fixed;
  top: 0;
  left: 0;
  transition: all ease 0.5s;
  @media (max-width: 768px) {
    width: 100vw;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 60px;
    @media (max-width: 768px) {
      display: none;
    }
  }
  h2 {
    font-family: "Montserrat", sans-serif;
    font-size: 11px;
    font-weight: 600;
    line-height: 24px;
    color: #ffffff;
    margin-left: 20px;
    cursor: pointer;
    @media (max-width: 768px) {
      font-size: 5px;
    }
  }
`;
