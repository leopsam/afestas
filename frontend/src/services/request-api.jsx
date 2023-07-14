import axios from "axios";
import Cookies from 'js-cookie';

const postRequest = async (selectTheme, selectService, description, user) => {
    user = JSON.parse(user)
    const token = Cookies.get('token');
    const body = {
        themeId: selectTheme.id,
        serviceTypeId: selectService.id,
        description,
        userId: user.id,
      };

      let texto = encodeURIComponent(
        `Olá, gostaria de fazer o pedido:        
        - Tipo de festa: ${selectService.title}
        - Tema: ${selectTheme.title}
        - Descrição e pedidos: ${description}

        Informações do cliente:
        - Nome: ${user.name}
        - E-mail: ${user.email}
        - CPF: ${user.cpf}
        - Tel: ${user.phone}

        Endereço do cliente:
        - Rua: ${user.street}
        - Cidade: ${user.city}
        - Complemento: ${user.complement}
        - Nº: ${user.number}
        - Cep: ${user.cep}
        - Estado: ${user.state}
        `
      );

      const url = 'http://localhost:4000/request/'
  
  try {
        const res = await axios.post(url, body, {
            headers: {
                Authorization: `Bearer ${token}`,
              },
        });
        open('https://wa.me/5521979272015?text=' + texto);
        return res.data;
    } catch (err) {
        alert(user.name);
        throw new Error(err.response);
    }
};

export default postRequest;
