import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface props {
  loginCode: string;
  name: string;
}

export const ConfirmEmail = ({ loginCode, name }: props) => (
  <Html>
    <Head />
    <Preview>Conmfirme seu e-mail</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Cadastro</Heading>

        <Text style={{ ...text, marginBottom: '14px' }}>
          Olá {name}, Seu código para registro é:
        </Text>
        <code style={code}>
          {loginCode.slice(0, 3)}-{loginCode.slice(3)}
        </code>
        <Text
          style={{
            ...text2,
            color: '#ababab',
            marginTop: '14px',
            marginBottom: '16px',
          }}
        >
          Caso você não tenha solicitado este código, ignore este e-mail.
        </Text>
      </Container>
    </Body>
  </Html>
);

ConfirmEmail.PreviewProps = {
  loginCode: '103500',
  name: 'João',
} as props;

export default ConfirmEmail;

const main = {
  backgroundColor: '#ffffff',
};

const container = {
  paddingLeft: '12px',
  paddingRight: '12px',
  margin: '0 auto',
};

const h1 = {
  color: '#333',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '30px',
  fontWeight: 'bold',
  margin: '40px 0',
  padding: '0',
};

const text = {
  color: '#333',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '20px',
  margin: '24px 0',
};

const text2 = {
  color: '#333',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '14px',
  margin: '20px 0',
};

const code = {
  display: 'block',
  fontSize: '24px',
  padding: '16px 4.5%',
  width: '90.5%',
  backgroundColor: '#f4f4f4',
  borderRadius: '5px',
  border: '1px solid #eee',
  color: '#333',
  textAlign: 'center',
};
