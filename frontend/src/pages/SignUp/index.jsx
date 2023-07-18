import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import styled from "styled-components"
import banner from "../../assets/images/banner.jpg"
import logo from "../../assets/images/logo.png"
import signUpApi from "../../services/signUp-api";

export default function SignIn() {
    const [textButton, setTextButton] = useState("Salvar")
    const [disabled, setDisabled] = useState("")   
    const inputDisabled = "#F2F2F2"
    const inputActivated = "#FFFFFF"
    const navigation = useNavigate()

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("")
    const [cpf, setCpf] = useState("");
    const [birthday, setBirthday] = useState("");
    const [phone, setPhone] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [complement, setComplement] = useState("");
    const [state, setState] = useState("");
    const [number, setNumber] = useState(2);
    const [cep, setCep] = useState("");

    const avatar = "https://www.papeldeparede.etc.br/fotos/wp-content/uploads/jake_hora_de_aventura.jpg"

    const stateSelect = [
        'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG',
        'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
    ];

    function singUp(e) {
        //setBirthday(birthday + "T00:00:00.000Z")
        //console.log(email, password, name, cpf, birthday, phone, street, city, complement, state, number, cep, avatar)
        e.preventDefault()
        setTextButton("Carregando...") 
        setDisabled("disabled") 

        signUpApi(email, password, name, cpf, birthday, phone, street, city, complement, state, number, cep, avatar)
            .then((data) => { 
                alert("Usuário cadastrado com sucesso!");
                navigation('/signin');
                console.log(data);
            })
            .catch((err) => {
                setTextButton("Salvar");
                setDisabled("");
                alert(err);
                console.log(err);
            });
    }

  return (
    <SignUpContainer>        
         <Banner src={banner} alt="Banner"/>
         <ConteinerForm>
            <Form onSubmit={singUp}>
                <Container>
                    <img src={logo} alt="Logo"/>
                    <Title>Cadastro de Usuário</Title>
                    <Label>
                        Nome:
                        <Input
                            id="name"
                            type="text"
                            placeholder="Nome completo"
                            value={name}
                            disabled={disabled} 
                            corFundo={disabled ? inputDisabled : inputActivated } 
                            onChange={(e) => setName(e.target.value)}
                            width="400px"
                            required                            
                        />
                    </Label>

                    <Label>
                        CPF:
                        <Input
                            id="cpf"
                            type="text"
                            placeholder="Somente numero"
                            value={cpf}
                            disabled={disabled} 
                            corFundo={disabled ? inputDisabled : inputActivated }                             
                            onChange={(e) => setCpf(e.target.value)}
                            width="150px"
                            required
                            
                        />
                    </Label>

                    <Label>
                        Telefone:
                        <Input
                            id="phone"
                            type="tel"
                            placeholder="DD 9xxxx-xxxx"
                            value={phone}
                            disabled={disabled} 
                            corFundo={disabled ? inputDisabled : inputActivated }   
                            onChange={(e) => setPhone(e.target.value)}
                            width="150px"
                            required
                        />
                    </Label>  

                    <Label>
                        Nascimento:
                        <Input
                            id="birthday"
                            type="date"
                            value={birthday}
                            disabled={disabled} 
                            corFundo={disabled ? inputDisabled : inputActivated }   
                            onChange={(e) => setBirthday(e.target.value)}
                            width="160px"
                            required
                        />
                    </Label>

                    <LinhaVertical/>

                    <Label>
                        Rua:
                        <Input
                            id="street"
                            type="text"
                            placeholder="Rua das Flores"
                            value={street}
                            disabled={disabled} 
                            corFundo={disabled ? inputDisabled : inputActivated }   
                            onChange={(e) => setStreet(e.target.value)}
                            width="200px"
                            required
                        />
                    </Label>

                    <Label>
                        Cidade:
                        <Input
                            id="city"
                            type="text"
                            placeholder="Nova Iguaçu"
                            value={city}
                            disabled={disabled} 
                            corFundo={disabled ? inputDisabled : inputActivated }   
                            onChange={(e) => setCity(e.target.value)}
                            width="200px"
                            required
                        />
                    </Label>

                    <Label>
                        Complemento:
                        <Input
                            id="complement"
                            type="text"
                            placeholder="Quadra.., Apt.., Casa..,"
                            value={complement}
                            disabled={disabled} 
                            corFundo={disabled ? inputDisabled : inputActivated }   
                            onChange={(e) => setComplement(e.target.value)}
                            width="200px"
                            required
                        />
                    </Label>

                    <Label>
                        Estado:
                        <Select 
                            value={state}  
                            onChange={(e) => setState(e.target.value)} 
                            width="50px" 
                            disabled={disabled} 
                            corFundo={disabled ? inputDisabled : inputActivated }  
                            required
                        >
                            {stateSelect.map((state, i) => (
                                <option key={i} value={state}>
                                    {state}
                                </option>
                            ))}
                        </Select>
                    </Label>

                    <Label>
                        Número:
                        <Input
                            id="number"
                            type="number"
                            value={number}
                            disabled={disabled} 
                            corFundo={disabled ? inputDisabled : inputActivated }   
                            onChange={(e) => setNumber(e.target.value)}
                            width="50px"
                            required
                        />
                    </Label>

                    <Label>
                        CEP:
                        <Input
                            id="cep"
                            type="text"
                            placeholder="xxxxx-xxx"
                            value={cep}
                            disabled={disabled} 
                            corFundo={disabled ? inputDisabled : inputActivated }   
                            onChange={(e) => setCep(e.target.value)}
                            width="150px"
                            required
                        />
                    </Label>
               
                    <LinhaVertical/>
               
                    <Label>
                        Email:
                        <Input
                            id="email"
                            type="email"
                            placeholder="Exemplo@email.com"
                            value={email}
                            disabled={disabled} 
                            corFundo={disabled ? inputDisabled : inputActivated } 
                            onChange={(e) => setEmail(e.target.value)}
                            width="500px"
                            required
                        />
                    </Label> 

                    <br/>

                    <Label>
                        Senha:
                        <Input
                            id="password"
                            type="password"
                            value={confirmPassword}
                            disabled={disabled} 
                            corFundo={disabled ? inputDisabled : inputActivated } 
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            width="300px"
                            required
                        />
                    </Label>

                    <Label>
                        Confirmar senha:
                        <Input
                            id="password"
                            type="password"
                            value={password}
                            disabled={disabled} 
                            corFundo={disabled ? inputDisabled : inputActivated } 
                            onChange={(e) => setPassword(e.target.value)}
                            width="300px"
                            required
                        />
                    </Label>

                    <LinhaVertical/>
                    
                    <ContainerButton>
                        <Button disabled={disabled} type="submit">{textButton}</Button> 
                        <LinkSignUp>
                            <Link to={`/signin`}>
                                <p>já tem cadastro? Entrar!</p>
                            </Link>                
                        </LinkSignUp>
                    </ContainerButton> 
                </Container>               
            </Form>
         </ConteinerForm>   
    </SignUpContainer>
  )
}  

const LinhaVertical = styled.div`
    border-top: 1px solid #d6a233;
    width: 100%;
`
const ContainerButton = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`
const Select = styled.select`
    width: ${props => props.width};
    height: 35px;
    padding: 10px;
    margin: 5px 5px;
    font-size: 14px;
    box-sizing: border-box;
    border: none;
    border-radius: 5px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: 23px;
    color: #000000;
    background-color: #ffffff;
    ::placeholder{        
        color: #000000;    
    }
`
const SignUpContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`
const Banner = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`
const Container = styled.div`
    background-color: #00000073;
    width: 1200px;
    height: 100%;
    margin: 20px;
    padding: 20px;
`
const Title = styled.h1`
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 23px;
    color: #fffefe;
`
const ConteinerForm = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    img{
        width: 250px;
        height: 100px;
    }
`
const Form = styled.form`
    text-align: center;
`
const Label = styled.label`
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 600;
    line-height: 23px;
    color: #ffffff;
    margin-left: 5px;
    display: inline-block;
`
const Input = styled.input`
    width: ${props => props.width};
    height: 35px;
    padding: 10px;
    margin: 5px 5px;
    font-size: 14px;
    box-sizing: border-box;   
    border: none;
    border-radius: 5px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: 23px;
    color: #000000;
    ::placeholder{        
        color: #000000;    
    }
`
const Button = styled.button`
    width: 326px;
    height: 46px;
    background-color: #d6a233;
    border-radius: 5px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    color: #FFFFFF;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 0;
    cursor: pointer;
`
const LinkSignUp = styled.div`  
   p{    
        text-decoration: none;
        font-family: 'Montserrat', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
        color: #FFFFFF;
   }
   a{
        text-decoration: none;
   }
`