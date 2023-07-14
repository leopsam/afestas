import Header from "../../components/Header"
import styled from "styled-components"
import banner from "../../assets/images/banner.jpg"
import Footer from "../../components/Footer"

export default function History() {
    return (
        <>
            <Header/>
            <Banner src={banner} alt="Banner"/>
            <ContainerBody>
              <DescriptionPage>
                    <h1>Quem é o A festas?</h1>
                    <p>Bem-vindo à página &quot;Quem Somos&quot; da A Festa Ornamentações! Aqui, gostaríamos de compartilhar um pouco sobre nossa história e valores. Somos uma empresa especializada em transformar eventos em momentos mágicos e memoráveis. Com mais de 100 montagens de festas realizadas, estamos comprometidos em oferecer decorações personalizadas, encantadoras e de alta qualidade para nossos clientes.</p>
                </DescriptionPage>  
                <Content>
                  <Image>
                    <img src="https://images.a12.com/source/files/c/242855/Nossa_Senhora_Aparecida-611782_1241-726-0-0.jpg" alt="Imagem" />
                  </Image>
                  <Text>
                    <ParagraphColumn>A Festa Ornamentações é uma empresa especializada em criar eventos memoráveis e encantadores. Com sede em um país conhecido por sua diversidade cultural e amor por celebrações, somos movidos pela paixão em transformar cada ocasião em momentos únicos e inesquecíveis. O nome &quot;A Festa&quot; foi escolhido com um propósito especial. O &quot;A&quot; representa a inicial de &quot;Aparecida&quot;, em homenagem à Nossa Senhora Aparecida, padroeira do Brasil. Essa escolha reflete nossa devoção e crença na proteção divina em todos os eventos que ornamentamos.</ParagraphColumn>
                  </Text>
                </Content>
                <LinhaVertical/>
                <InnovationSection>
                  <Heading>Nossa Missão</Heading>
                  <Paragraph>Com uma vasta experiência no mercado, acumulamos mais de 100 montagens de festas em nosso portfólio. Desde casamentos elegantes e sofisticados a aniversários cheios de alegria, estamos presentes em cada detalhe para criar uma atmosfera mágica e personalizada. Nossa equipe dedicada é composta por profissionais altamente qualificados, apaixonados por decoração e design de eventos. Cada projeto é cuidadosamente planejado, levando em consideração os desejos e sonhos de nossos clientes. Trabalhamos em estreita colaboração para compreender sua visão, transformando-a em realidade através de cenários deslumbrantes. Na A Festa Ornamentações, acreditamos que a decoração é a alma de qualquer celebração. Cada arranjo floral, tecido escolhido e elemento decorativo é selecionado com carinho para criar uma atmosfera única, que reflita a personalidade e estilo de nossos clientes. Além disso, estamos sempre atentos às últimas tendências e inovações do mercado de decoração de eventos. Buscamos constantemente por novas inspirações, materiais e técnicas, para garantir que nossas criações estejam sempre atualizadas e surpreendentes.</Paragraph>
                  <Paragraph>Nossa missão vai além de fornecer uma decoração impecável. Desejamos proporcionar aos nossos clientes uma experiência tranquila e livre de preocupações. Cuidamos de todos os detalhes, desde a concepção até a desmontagem, para que eles possam desfrutar plenamente de sua festa e criar memórias preciosas ao lado de seus entes queridos. A A Festa Ornamentações tem o prazer de fazer parte de momentos tão especiais na vida de nossos clientes. Cada festa é única e nos enche de alegria poder contribuir para torná-la inesquecível. Nossa maior recompensa é ver os sorrisos de felicidade e satisfação estampados nos rostos de todos os envolvidos.</Paragraph>
                </InnovationSection>
                <LinhaVertical/>
                <Content>        
                  <Text>
                    <ParagraphColumn>Seja qual for a ocasião, conte com a A Festa Ornamentações para transformar seu evento em um verdadeiro espetáculo visual. Com dedicação, criatividade e amor pelo que fazemos, estamos prontos para criar uma decoração extraordinária que encantará a todos e deixará lembranças eternas. Venha nos conhecer e permita-nos dar vida à sua festa dos sonhos. A Festa Ornamentações - Celebrando com estilo e dedicação.</ParagraphColumn>
                  </Text>
                  <Image>
                    <img src="https://www.noivaansiosa.com.br/wp-content/uploads/2021/09/Micro-wedding-no-Villa-Della-Luce-por-Cama-de-Gato-10-1.jpg" alt="Imagem" />
                  </Image>
                </Content> 
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
  margin: 30px 0 60px;
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
const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
`
const Image = styled.div`
  flex-basis: 50%;
  max-width: 500px;
  margin-right: 40px;
  img{
    height: 300px;
    width: 500px;
    object-fit: cover;
    object-fit: cover;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  }
`
const Text = styled.div`
  flex-basis: 50%;
`
const ParagraphColumn = styled.p`
 font-family: 'Montserrat', sans-serif;  
    font-size: 14px;        
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
`
const LinhaVertical = styled.div`
  border-top: 5px solid #d6a233;
  width: 90%;
  margin: 50px 0;
`
const InnovationSection = styled.div`
  text-align: center;
  padding: 40px;
`
const Heading = styled.h2`
  color: #333;
  font-family: 'Montserrat', sans-serif;
`
const Paragraph = styled.p`
 font-family: 'Montserrat', sans-serif;  
    font-size: 14px;        
    line-height: 20px;
    margin-left: 20px; 
    color: #535353;
   
`