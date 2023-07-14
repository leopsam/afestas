import Header from "../../components/Header"
import styled from "styled-components"
import { useEffect, useState } from "react"
import banner from "../../assets/images/banner.jpg"
import Footer from "../../components/Footer"
import getGallery from "../../services/gallery-api"

export default function Gallery() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides, setSlides] = useState([{}])   

  useEffect(() => {
    getGallery()
      .then((data) => {
        setSlides(data) 
        console.log(data)      
      })
      .catch((err) => {
          console.log(err);
          alert("erro na galeria")
      });
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [slides.length]);
    
  return (
      <>
          <Header/>
          <Banner src={banner} alt="Banner"/>
          <ContainerBody> 
            <DescriptionPage>
              <h1>Bem-vindo à Galeria de Fotos!</h1>
              <p>Aqui você encontrará um verdadeiro tesouro visual de festas encantadoras e decorações deslumbrantes criadas pela A Festa Ornamentações. Explore nossa coleção de imagens e deixe-se envolver pela magia e criatividade que trazemos para cada celebração. De aniversários a casamentos, eventos corporativos a festas temáticas, cada foto conta uma história única de momentos especiais e memórias felizes. Deixe-se inspirar por nossa paixão pela arte de ornamentar festas e descubra como podemos transformar sua próxima comemoração em algo verdadeiramente extraordinário.</p>
            </DescriptionPage>
            <CarouselContainer>
              <SlideContainer>
                {slides.map((slide, index) => (
                  <Slide key={slide.id} isActive={index === currentSlide}>
                    <SlideImage src={slide.photo} alt={`Slide ${slide.id}`} />
                    <ContainerSlideText>
                      <SlideTitle>{slide.name}</SlideTitle>
                      <SlideDescription>{slide.description}</SlideDescription>
                    </ContainerSlideText>
                  </Slide>
                ))}
              </SlideContainer>
              <ThumbnailContainer>
                {slides.map((slide, index) => (
                  <Thumbnail
                    key={slide.id}
                    src={slide.photo}
                    alt={`Slide ${slide.id}`}
                    isActive={index === currentSlide}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </ThumbnailContainer>
            </CarouselContainer>
          </ContainerBody> 
          <Footer/>  
      </>
      
  )
}

const Banner = styled.img`
    height: 50vh;
    width: 100%;
    object-fit: cover;
`
const ContainerBody = styled.header`
     margin: 30px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const DescriptionPage = styled.div`
  text-align: center;
  width: 50vw;
  margin: 30px 0;
  h2{
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;        
    line-height: 24px;
    margin-left: 20px; 
    color: #7c7c7c;
  }
  h1{
    font-family: 'Montserrat', sans-serif;
    font-size: 35px;        
    line-height: 24px;
    margin-left: 20px; 
    color: #222222;
  }
  p{
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;        
    line-height: 20px;
    margin-left: 20px; 
    color: #535353;
  }
`
const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const SlideContainer = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  margin-bottom: 20px;
  overflow: hidden;
  margin-top: 40px;
`
const Slide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  transition: opacity 0.5s ease;
  object-fit: cover;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`
const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const ContainerSlideText = styled.div`
position: absolute;
  bottom: 0px;
  left: 0px;
  background-color: #00000075;
  padding: 10px;
`
const SlideTitle = styled.h3`
  color: #fff;
  font-size: 20px;
  z-index: 10;
  font-family: 'Montserrat', sans-serif; 
`
const SlideDescription = styled.p`
  color: #fff;
  font-size: 16px;
  z-index: 10;
  font-family: 'Montserrat', sans-serif; 
`
const ThumbnailContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  box-sizing: border-box;
`
const Thumbnail = styled.img`
box-sizing: border-box;
  width: 300px;
  height: 160px;
  object-fit: cover;
  margin: 5px;
  border: ${({ isActive }) => (isActive ? '3px solid #d6a233' : 'none')};
  cursor: pointer;
  object-fit: cover;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;