import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styled from "styled-components";
import banner from "../../assets/images/banner.jpg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import getGallery from "../../services/gallery-api";
import getDeposition from "../../services/depositions-api";
import Cookies from "js-cookie";

export default function Home() {
  const navigate = useNavigate();
  const [currentSlideLeft, setCurrentSlideLeft] = useState(0);
  const [currentSlideRight, setCurrentSlideRight] = useState(0);
  const [slides, setSlides] = useState([{}]);
  const [depositions, setDepositions] = useState([{}]);

  useEffect(() => {
    getGallery()
      .then((data) => {
        setSlides(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
        alert("erro na galeria");
      });
  }, []);

  useEffect(() => {
    getDeposition()
      .then((data) => {
        setDepositions(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
        alert("erro no depoimentos");
      });
  }, []);

  useEffect(() => {
    const interval1 = setInterval(() => {
      setCurrentSlideLeft((prevSlide) => (prevSlide + 1) % (slides.length / 3));
    }, 2000);

    return () => clearInterval(interval1);
  }, [slides.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideRight(
        (prevSlide) => (prevSlide - 1 + slides.length / 3) % (slides.length / 3)
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <>
      <Header />
      <ContainerBody>
        <div>
          <Banner src={banner} alt="Banner" />
          <Container>
            <p>teste CD/CI 3</p>
            <h1>
              Transformando momentos em memórias inesquecíveis, A Festas, onde
              cada celebração ganha vida!
            </h1>
            <button
              onClick={() => {
                navigate("/request");
                window.scrollTo(0, 0);
              }}
            >
              SOLICITE UM ORÇAMENTO
            </button>
          </Container>
        </div>
        {!Cookies.get("noticeCookie") && (
          <CookieNoticeWrapper>
            <p>
              Este site utiliza cookies para melhorar sua experiência. Ao
              continuar navegando, você concorda com o uso de cookies.
            </p>
            <button
              onClick={() => Cookies.set("noticeCookie", false, { expires: 2 })}
            >
              Entendi
            </button>
          </CookieNoticeWrapper>
        )}
        <History>
          <div>
            <h2>SOMOS O A FESTAS</h2>
            <h3>
              Venha nos conhecer e permita-nos dar vida à sua festa dos sonhos.
              A Festa Ornamentações - Celebrando com Estilo e Dedicação
            </h3>
          </div>
          <div>
            <p>
              <span>A </span>Festa Ornamentações é uma empresa especializada em
              criar eventos memoráveis e encantadores. Com sede em um país
              conhecido por sua diversidade cultural e amor por celebrações,
              somos movidos pela paixão em transformar cada ocasião em momentos
              únicos e inesquecíveis. O nome &quot;A Festa&quot; foi escolhido
              com um propósito especial. O &quot;A&quot; representa a inicial de
              &quot;Aparecida&quot;, em homenagem à Nossa Senhora Aparecida,
              padroeira do Brasil. Essa escolha reflete nossa devoção e crença
              na proteção divina em todos os eventos que ornamentamos. Com uma
              vasta experiência no mercado, acumulamos mais de 100 montagens de
              festas em nosso portfólio. Desde casamentos elegantes e
              sofisticados a aniversários cheios de alegria, estamos presentes
              em cada detalhe para criar uma atmosfera mágica e personalizada.
            </p>
          </div>
        </History>

        <Targe>
          <h1>Consulte nossos preços e serviços e faça um orçamento!</h1>
          <button
            onClick={() => {
              navigate("/request");
              window.scrollTo(0, 0);
            }}
          >
            SOLICITE UM ORÇAMENTO
          </button>
        </Targe>

        <Service>
          <TitleService>
            <h2>SOLUÇÕES PREPARADAS ESPECIALMENTE PARA REALIZAR SEU EVENTO</h2>
            <h1>Soluções para seu tipo de evento</h1>
            <p>
              A Festas oferece uma ampla gama de serviços de ornamentação e
              decoração para diversos tipos de eventos especiais. Seja para uma
              formatura, casamento, aniversário, festa temática ou qualquer
              outra ocasião especial, estamos aqui para transformar seu evento
              em um momento inesquecível.
            </p>
          </TitleService>
          <ServiceTypes>
            <CardServiceTypes>
              <img src="https://cdn0.casamentos.com.br/article-real-wedding-o/7022/3_2/960/jpg/13_52207.jpeg" />
              <ContaineDescriptionService>
                <h1>Casamentos</h1>
                <p>
                  Uma festa de casamento é um momento mágico e especial, onde
                  dois corações se unem em uma celebração de amor e compromisso.
                  Na A Festas, compreendemos a importância desse dia único e
                  estamos aqui para torná-lo ainda mais especial.
                </p>
                <button
                  onClick={() => {
                    navigate("/request");
                    window.scrollTo(0, 0);
                  }}
                >
                  SOLICITE UM ORÇAMENTO
                </button>
              </ContaineDescriptionService>
            </CardServiceTypes>
            <CardServiceTypes>
              <img src="https://ltoquedesaborbuffet.com.br/wp-content/uploads/2015/02/festa-de-15-anos-03.jpg" />
              <ContaineDescriptionService>
                <h1>Fromaturas</h1>
                <p>
                  A formatura é um marco significativo na vida de cada
                  estudante, um momento de celebração e conquista após anos de
                  dedicação acadêmica. Na A Festas, entendemos a importância
                  desse evento e estamos aqui para tornar sua formatura
                  verdadeiramente memorável.
                </p>
                <button
                  onClick={() => {
                    navigate("/request");
                    window.scrollTo(0, 0);
                  }}
                >
                  SOLICITE UM ORÇAMENTO
                </button>
              </ContaineDescriptionService>
            </CardServiceTypes>
            <CardServiceTypes>
              <img src="https://marciatravessoni.com.br/wp-content/uploads/2022/07/15-Anos-Natalia-Queiros-21.jpg" />
              <ContaineDescriptionService>
                <h1>15 anos</h1>
                <p>
                  A festa de debutante, também conhecida como festa de 15 anos,
                  é um momento especial na vida de toda jovem. Na A Festas,
                  estamos aqui para tornar esse dia único e encantador,
                  transformando sonhos em realidade.
                </p>
                <button
                  onClick={() => {
                    navigate("/request");
                    window.scrollTo(0, 0);
                  }}
                >
                  SOLICITE UM ORÇAMENTO
                </button>
              </ContaineDescriptionService>
            </CardServiceTypes>
          </ServiceTypes>
        </Service>

        <Testimonial>
          <img src={depositions[0].photo} />
          <div>
            <p>&ldquo;{depositions[0].depositions}&rdquo;</p>
            <h3>{depositions[0].name}</h3>
          </div>
        </Testimonial>

        <Carrosel>
          <TitleService>
            <h1>Galeria A Festas</h1>
            <p>
              Aqui você encontrará um verdadeiro tesouro visual de festas
              encantadoras e decorações deslumbrantes criadas pela A Festa
              Ornamentações. Explore nossa coleção de imagens e deixe-se
              envolver pela magia e criatividade que trazemos para cada
              celebração. De aniversários a casamentos, eventos corporativos a
              festas temáticas, cada foto conta uma história única de momentos
              especiais e memórias felizes. Deixe-se inspirar por nossa paixão
              pela arte de ornamentar festas e descubra como podemos transformar
              sua próxima comemoração em algo verdadeiramente extraordinário.
            </p>
            <button
              onClick={() => {
                navigate("/gallery");
                window.scrollTo(0, 0);
              }}
            >
              IR PARA GALERIA
            </button>
          </TitleService>
          <CarouselContainer>
            {slides.map((slide, index) => (
              <Slide
                key={index}
                style={{
                  transform: `translateX(-${currentSlideLeft * 200}px)`,
                }}
              >
                <SlideImage src={slide.photo} alt={`Slide ${index + 1}`} />
              </Slide>
            ))}
          </CarouselContainer>
          <CarouselContainer>
            {slides.map((slide, index) => (
              <Slide
                key={index}
                style={{
                  transform: `translateX(-${currentSlideRight * 200}px)`,
                }}
              >
                <SlideImage src={slide.photo} alt={`Slide ${index + 1}`} />
              </Slide>
            ))}
          </CarouselContainer>
        </Carrosel>

        <Testimonial>
          {!depositions[1] ? (
            <>
              <div>
                <p>&ldquo;Carregando...&rdquo;</p>
                <h3>Carregando...</h3>
              </div>
            </>
          ) : (
            <>
              <div>
                <p>&ldquo;{depositions[1].depositions}&rdquo;</p>
                <h3>{depositions[1].name}</h3>
              </div>
              <img src={depositions[1].photo} />
            </>
          )}
        </Testimonial>
      </ContainerBody>
      <Footer />
    </>
  );
}
const ContainerBody = styled.div`
  width: 100vw;
`;
const Banner = styled.img`
  height: 100vh;
  width: 100%;
  object-fit: cover;
`;
const CookieNoticeWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #192d44;
  padding: 10px;
  text-align: center;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    color: white;
    font-family: "Montserrat", sans-serif;
    font-size: 14px;
  }
  button {
    background-color: #4caf50;
    color: white;
    border: none;
    margin: 0 20px;
    padding: 8px 16px;
    border-radius: 4px;
    font-family: "Montserrat", sans-serif;
    font-size: 14px;
    cursor: pointer;
  }
`;
const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  background-color: #00000086;
  padding: 20px;
  @media (max-width: 768px) {
    width: 80%;
  }

  h1 {
    font-family: "Montserrat", sans-serif;
    font-size: 40px;
    font-weight: 600;
    line-height: 40px;
    color: #ffffff;
    @media (max-width: 768px) {
      font-size: 20px;
      line-height: 20px;
    }
  }
  p {
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
    font-weight: 300;
    line-height: 10px;
    color: #ffffff;
    @media (max-width: 768px) {
      font-size: 12px;
      line-height: 20px;
    }
  }
  button {
    background-color: #d6a233;
    color: #dadada;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    margin: 0 30px;
    font-family: "Montserrat", sans-serif;
    font-size: 14px;
    line-height: 20px;
    color: #ffffff;
    cursor: pointer;
    @media (max-width: 768px) {
      font-size: 12px;
      line-height: 20px;
    }
  }
`;
const History = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 768px) {
    flex-direction: column;
    height: 850px;
  }

  div {
    margin: 10px;
    width: 40%;
    height: 60%;
    @media (max-width: 768px) {
      margin: 1px;
      width: 90%;
    }
  }
  h2 {
    font-family: "Montserrat", sans-serif;
    font-size: 14px;
    line-height: 24px;
    margin-left: 20px;
    color: #7c7c7c;
  }
  h3 {
    font-family: "Montserrat", sans-serif;
    font-size: 30px;
    line-height: 46px;
    margin-left: 20px;
    color: #000000;
  }
  p {
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
    line-height: 20px;
    margin-left: 20px;
    color: #535353;
    &::first-letter {
      font-size: 48px;
      line-height: 48px;
      float: left;
      margin-right: 6px;
      color: #d6a233;
    }
  }
  strong {
    font-size: 35px;
  }
`;
const Targe = styled.div`
  width: 100%;
  height: 120px;
  margin: 50px 0 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d6a233;
  h1 {
    font-family: "Montserrat", sans-serif;
    font-size: 14px;
    line-height: 20px;
    color: #ebebeb;
    margin: 0 30px;
  }
  button {
    background-color: #d6a233;
    color: #dadada;
    border: 1px solid #dadada;
    border-radius: 4px;
    padding: 10px 20px;

    font-family: "Montserrat", sans-serif;
    font-size: 14px;
    line-height: 20px;
    color: #ffffff;
    cursor: pointer;
    @media (max-width: 768px) {
      font-size: 12px;
      margin: 5px 20px 5px 0px;
    }
  }
`;
const Service = styled.div`
  width: 100%;
  height: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  }
`;
const TitleService = styled.div`
  text-align: center;
  width: 70%;
  margin-bottom: 80px;
  @media (max-width: 768px) {
    width: 90%;
  }
  h2 {
    font-family: "Montserrat", sans-serif;
    font-size: 12px;
    line-height: 24px;
    margin-left: 20px;
    color: #7c7c7c;
  }
  h1 {
    font-family: "Montserrat", sans-serif;
    font-size: 40px;
    line-height: 24px;
    margin-left: 20px;
    color: #222222;
    @media (max-width: 768px) {
      font-size: 30px;
      line-height: 30px;
    }
  }
  p {
    font-family: "Montserrat", sans-serif;
    font-size: 14px;
    line-height: 20px;
    margin-left: 20px;
    color: #535353;
  }
  button {
    background-color: #d6a233;
    color: #dadada;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    margin: 0 30px;
    font-family: "Montserrat", sans-serif;
    font-size: 14px;
    line-height: 20px;
    color: #ffffff;
    cursor: pointer;
  }
`;
const CardServiceTypes = styled.div`
  width: 100%;
  height: 500px;
  margin: 40px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const ContaineDescriptionService = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const ServiceTypes = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 768px) {
    flex-direction: column;

    height: 100%;
  }
  img {
    width: 360px;
    height: 220px;
    border-radius: 4px;
    object-fit: cover;
  }
  h1 {
    font-family: "Montserrat", sans-serif;
    font-size: 15px;
    color: #202020;
  }
  p {
    font-family: "Montserrat", sans-serif;
    font-size: 14px;
    color: #535353;
  }
  button {
    background-color: #d6a233;
    color: #dadada;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    margin: 0 30px;
    font-family: "Montserrat", sans-serif;
    font-size: 14px;
    color: #181818;
    cursor: pointer;
  }
`;
const Testimonial = styled.div`
  height: 500px;
  width: 100%;
  box-sizing: border-box;
  background-color: #dae8fc;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  @media (max-width: 768px) {
    flex-direction: column;
    height: 100%;
    padding: 20px 0;
  }

  div {
    height: 50%;
    width: 50%;
    text-align: center;
    @media (max-width: 768px) {
      width: 90%;
    }
  }
  img {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    object-fit: cover;
    @media (max-width: 768px) {
      width: 150px;
      height: 150px;
    }
  }
  p {
    font-family: "Montserrat", sans-serif;
    font-size: 20px;
    line-height: 24px;
    margin-left: 20px;
    font-style: italic;
    color: #2c2c2c;
    @media (max-width: 768px) {
      width: 90%;
      font-size: 16px;
    }
  }
  h3 {
    font-family: "Montserrat", sans-serif;
    font-size: 15px;
  }
`;
const Carrosel = styled.div`
  width: 100%;
  height: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 120px 0;
`;
const CarouselContainer = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
`;
const Slide = styled.div`
  width: 300px;
  height: 300px;
  flex-shrink: 0;
  transition: transform 0.5s;
  margin: 10px;
`;
const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
