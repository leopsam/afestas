import Header from "../../components/Header"
import Footer from "../../components/Footer"
import styled from "styled-components"
import banner from "../../assets/images/banner.jpg"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import Cookies from 'js-cookie';
import getTypeService from "../../services/typeService-api"
import getTheme from "../../services/theme-api"
import postRequest from "../../services/request-api"

export default function Requests() {
    const navigate = useNavigate() 
    const [selectService, setSelectService] = useState({});
    const [selectThemeImg, setSelectThemeImg] = useState("https://www.pitigruas.com.br/assets/uploads/media-uploader/large-imagem-trabalhos-padrao1615587465.jpg");
    const [selectTheme, setSelectTheme] = useState([{}]);
    const [description, setDescription] = useState('');
    const [typeService, setTypeService] = useState([{}])
    const [theme, setTheme] = useState([{}])

    //const userIdCookie = Cookies.get('id');
    const user = Cookies.get('user');
    //const user = JSON.parse(userObject);
    //const userId = parseInt(userIdCookie, 10);

    //console.log(user)

    useEffect(() => {
        getTypeService()
          .then((data) => {
            setTypeService(data) 
            console.log(data)      
          })
          .catch((err) => {
              console.log(err);
              alert("erro no tipo de serviço")
          });

          getTheme()
          .then((data) => {
            setTheme(data) 
            console.log(data)      
          })
          .catch((err) => {
              console.log(err);
              alert("erro no tipo de serviço")
          });
    }, [])

    return (
        <>
            <Header/>          
            <Banner src={banner} alt="Banner"/>

            {!user ?
                <>
                    <DescriptionService>
                        <h2>BEM VIDO À PAGINA DE PEDIDOS</h2>
                        <h1>Faça seu pedido</h1>
                        <p>Bem-vindo à nossa página de pedidos de festas! Aqui você pode personalizar todos os detalhes do seu evento dos sonhos. Escolha o tipo de festa, defina o tema que mais combina com você, selecione a data de início e término do aluguel da ornamentação e descreva detalhadamente como você imagina a sua festa perfeita. Com apenas um clique, nossa equipe receberá uma mensagem no WhatsApp e entrará em contato com você para transformar seu sonho em realidade. Agora ficou mais fácil e rápido realizar a festa dos seus sonhos!</p>
                    </DescriptionService>
                    <ContainerBody>
                        <DescriptionService>
                            <h1>Escolha seu tipo de festa</h1>
                            <p>Escolha uma das opções abaixo que se encaixa melhor com seu sonho.</p>
                        </DescriptionService>
                        <ContainerOptions>                            
                            {typeService.map((ts)=>(
                                <CardOptionsService key={ts.id} isSelected={selectService.id === ts.id}>
                                        <img src={ts.photo} alt="Tipo de Serviço" />
                                        {selectService.id === ts.id && (
                                            <img className="check" src="https://imagepng.org/wp-content/uploads/2019/12/check-icone-1-scaled.png" alt="check" />
                                        )}
                                        <h1>{ts.title}</h1>   
                                        <p>{ts.description}</p>                                    
                                        <button onClick={()=>{setSelectService(ts)}}>SELECIONAR</button>
                                </CardOptionsService>
                            ))}                   
                        </ContainerOptions>
                        <LinhaVertical />
                        {selectService.title !== "Eventos" &&
                            <>
                                <DescriptionService>
                                    <h1>Escolha seu tema</h1>
                                    <p>Click no botao com o nome do tema que quer ver...</p>
                                </DescriptionService>
                                <ContainerOptionsTheme>
                                    <img src={selectThemeImg} />
                                    <ContainerOptionsThemeButton>
                                        {theme.map((t)=>(                       
                                            <button  key={t.id} className={selectTheme.id === t.id ? 'selected' : ''} onClick={()=>{setSelectTheme(t); setSelectThemeImg(t.photo)}}>{t.title}</button>                                                  
                                        ))}
                                    </ContainerOptionsThemeButton> 
                                </ContainerOptionsTheme>
                                <LinhaVertical />
                            </>
                        }
                        <DescriptionService>
                            <h1>Descrisão da sua festa</h1>
                            <p>Seu evento é único e especial, e queremos garantir que cada detalhe seja personalizado de acordo com suas preferências. Aqui, você tem total liberdade para escrever qualquer pedido para a sua festa e fornecer todos os detalhes importantes para torná-la perfeita.
                            Podemos começar com as cores das decorações, seja para as bolas, tecidos ou a festa em geral. Nos informe as cores que você deseja destacar e criaremos uma atmosfera incrível baseada nesses tons.

                            Além disso, precisamos saber a data do seu evento para podermos nos programar adequadamente. Informe-nos se é um aniversário, casamento ou qualquer outra ocasião especial. Também nos forneça o nome do aniversariante ou do casal, para que possamos personalizar ainda mais os detalhes.
                            Se você precisar de serviços adicionais, como DJ, buffet, entre outros, não hesite em nos informar. Estamos aqui para ajudar e podemos indicar fornecedores confiáveis e experientes para tornar o seu evento ainda mais especial.
                            Lembre-se de que estamos à sua disposição para tornar sua festa única e sob medida. Quanto mais informações você nos fornecer, melhor poderemos atender aos seus desejos e garantir que sua festa seja memorável e repleta de detalhes personalizados. Estamos ansiosos para transformar seus sonhos em realidade!</p>
                        </DescriptionService>
                        <ContainerOptionsDescriptionUser>
                            <textarea id="description" value={description} onChange={(e) => (setDescription(e.target.value))}></textarea>  
                            <button onClick={()=>(postRequest(selectTheme, selectService, description, user))}>SOLICITE UM ORÇAMENTO</button>
                        </ContainerOptionsDescriptionUser>
                    </ContainerBody> 
                </>
            :               
                 <DescriptionService>
                        <h2>BEM VIDO À PAGINA DE PEDIDOS</h2>
                        <h1>Você precisa fazer o login ; )</h1>
                        <button onClick={()=>navigate("/signin")}>FAZER LOGIN</button> 
                        <p>Faça login agora para começar a explorar todos os recursos que oferecemos! Agradecemos por escolher nossa plataforma e esperamos que você desfrute de uma experiência envolvente e personalizada. 

                        Ao fazer login, utilizamos cookies para armazenar informações temporárias no seu navegador. Os cookies são pequenos arquivos de texto que contêm dados específicos, como identificadores únicos e preferências de usuário. Esses cookies nos ajudam a reconhecer você quando retorna à página, permitindo que você permaneça autenticado(a) e desfrute de uma experiência contínua e personalizada.

                        É importante ressaltar que os cookies utilizados são seguros e não armazenam informações sensíveis, como senhas ou informações de pagamento. Eles são projetados para melhorar a usabilidade e fornecer recursos personalizados, como lembrar suas preferências de idioma ou exibir conteúdo relevante com base nas suas interações anteriores.

                        Nossa política de privacidade detalha como tratamos suas informações pessoais e como utilizamos os cookies. Se tiver alguma dúvida ou preocupação sobre a privacidade ou o uso de cookies, recomendamos que revise nossa política ou entre em contato conosco para obter mais informações.
                        </p> 
                        <div/>                       
                </DescriptionService>                
            }

            <Footer/>   
        </>
       
    )
}
const Banner = styled.img`
    height: 50vh;
    width: 100%;
    object-fit: cover;
`
const DescriptionService = styled.div`
    text-align: center;
    width: 100%;
    margin: 10px 0;
    h2{
        font-family: sans-serif;
        font-size: 12px;        
        line-height: 24px;
        color: #7c7c7c;
    }
    h1{
        font-family: sans-serif;
        font-size: 35px;        
        line-height: 24px;
        color: #222222;
    }
    p{
        font-family: sans-serif;
        font-size: 14px;        
        line-height: 20px;
        color: #535353;
        width: 800px;
        margin: 0 auto;
    }
    button{
        background-color: #d6a233;
        color: #dadada;
        border: none;
        border-radius: 4px;
        padding: 10px 20px;    
        margin: 0 30px 20px;
        font-family: 'Montserrat', sans-serif;
        font-size: 14px;        
        line-height: 20px; 
        color: #ffffff;
        cursor: pointer;
  }
  div{
    margin: 100px 0;
  }
`
const ContainerBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #d6a233;
    margin: 100px;    
    padding: 30px 0;
`
const LinhaVertical = styled.div`
    border-top: 5px solid #ffffff;
    width: 90%;
    margin: 50px 0;
`
const ContainerOptionsThemeButton = styled.div`
    display: flex;
    align-items: center;  
    justify-content: center;
    width: 90%;
    flex-wrap: wrap;
`
const ContainerOptions = styled.div`
    width: 95%;
    display: flex;
    align-items: center;    
    justify-content: center;    
`
const ContainerOptionsTheme = styled.div`
    width: 95%;
    display: flex;
    align-items: center;  
    flex-direction: column;
    justify-content: center;  
    margin-top: 30px;
    img{
        height: 300px;
        width: 50%;
        object-fit: cover;
        margin-bottom: 20px;
    }
    button{
        background-color: #3b8aff;
        border: none;
        //width: 170px;
        border-radius: 4px;
        padding: 10px 20px;
        cursor: pointer;
        margin: 0px 10px;
        font-family: sans-serif;
        font-size: 14px;        
        color: #ffffff;
        margin: 3px;
        :hover{
            background-color: #809fce;
            color: #000000;
        }
    }
    button.selected {
        background-color: #faea59;
        color: black;
    }
`
const CardOptionsService = styled.div`
    position: relative;
    width: 300px;
    height: 335px;
    margin: 15px;
    box-sizing: border-box;
    border-radius: 4px;   
    background-color: #ffffff;
    img{
        width: 100%;
        height: 200px;
        object-fit: cover;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
    }
    img.check {
        position: absolute;
        left: 50px;
        width: 67%;
        box-sizing: border-box;
        object-fit: cover;
        padding: 20px;
    }
    h1{
        font-family: sans-serif;
        font-size: 20px;        
        color: #000000;
        margin: 0px 10px;
    }
    p{
        font-family: sans-serif;
        font-size: 12px;        
        color: #000000;
        margin: 10px;
    }
  button{
        background-color: #3b8aff;
        border: none;
        border-radius: 4px;
        padding: 10px 20px;
        cursor: pointer;
        margin: 0px 10px;
        font-family: sans-serif;
        font-size: 14px;        
        color: #ffffff;
        :hover{
            background-color: #809fce;
            color: #000000;
        }
  }
`
const ContainerOptionsDescriptionUser = styled.div`
    display: flex;
    align-items: center;
    justify-content: center; 
    flex-direction: column;
    textarea{
        box-sizing: border-box;
        width: 1000px;
        height: 300px;
        border: 1px solid black;
        border-radius: 5px;
        margin: 5px 0;
        font-family: 'Montserrat', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 23px;
        color: #000000;
        padding-left: 10px;
    }
    button{
        background-color: #3b8aff;
        border: none;
        width: 300px;
        height: 50px;
        border-radius: 4px;
        padding: 10px 20px;
        cursor: pointer;
        margin: 0px 10px;
        font-family: sans-serif;
        font-size: 14px;        
        color: #ffffff;
        margin: 3px;
        :hover{
            background-color: #809fce;
            color: #000000;
        }
    }
`