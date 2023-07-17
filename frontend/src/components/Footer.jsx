import styled from "styled-components";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterText>
        &copy; 2023 A Festas Ornamentaçoes. Todos os direitos reservados.
      </FooterText>
    </FooterContainer>
  );
}
const FooterContainer = styled.footer`
  background-color: #333333;
  color: #ffffff;
  padding: 20px;
`;
const FooterText = styled.p`
  text-align: center;
  font-size: 14px;
`;
