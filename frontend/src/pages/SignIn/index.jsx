import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import styled from "styled-components"
import banner from "../../assets/images/banner.jpg"
import logo from "../../assets/images/logo.png"
import Cookies from 'js-cookie';
import signInApi from "../../services/signIn-api";

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [textButton, setTextButton] = useState("Entrar") //mudar
    const [disabled, setDisabled] = useState("") //mudar    
    const inputDisabled = "#F2F2F2"
    const inputActivated = "#FFFFFF"
    const navigation = useNavigate()

    function signIn(e) {
        e.preventDefault()
        setTextButton("Carregando...") 
        setDisabled("disabled") 

        signInApi(email, password)
            .then((data) => {
                Cookies.set('avatar', data.user.avatar, { expires: 2 });
                Cookies.set('name', data.user.name, { expires: 2 });
                Cookies.set('user', JSON.stringify(data.user));
                Cookies.set('token', data.token, { expires: 2 });


                navigation('/');
            })
            .catch((err) => {
                setTextButton("Entrar");
                setDisabled("");
                alert("Usuário ou senha inválidos");
                console.log(err);
            });
    }
    
    return (
        <LoginContainer>
            <Banner src={banner} alt="Banner"/>
            <Form onSubmit={signIn}>
            <img src={logo} alt="Logo"/>
                <Input 
                    id="email"
                    type="email"
                    placeholder="E-mail" 
                    value={email} 
                    disabled={disabled} 
                    corFundo={disabled ? inputDisabled : inputActivated } 
                    onChange={e => setEmail(e.target.value)} 
                    required
                />
                <Input 
                    id="senha"
                    type="password" 
                    placeholder="Senha" 
                    value={password} 
                    disabled={disabled} 
                    corFundo={disabled ? inputDisabled : inputActivated } 
                    onChange={e => setPassword(e.target.value)}
                    required
                />
                <Button disabled={disabled} type="submit">{textButton}</Button> 
                <LinkSignUp>
                    <Link to={`/signup`}>
                        <p>Primeira vez? Cadastre-se!</p>
                    </Link>                
                </LinkSignUp>
            </Form>
            
        </LoginContainer>
    )
}
const Banner = styled.img`
    height: 100vh;
    width: 100vw;
    object-fit: cover;
`
const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;    
    p{
        text-align: center;
        color: #FFFFFF;
    }
`
const Form = styled.form`
    display: flex;   
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: white;
    background-color: #00000086;
    padding: 20px;
`
const Input = styled.input`
    box-sizing: border-box;
    width: 326px;
    height: 58px;
    //background-color: ${props => props.corFundo};
    border: none;
    border-radius: 5px;
    margin: 5px 0;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #000000;
    padding-left: 10px;
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
    margin-top: 20px;    
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