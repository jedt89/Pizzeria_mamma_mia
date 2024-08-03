import { Flex, Typography } from 'antd';
const { Text } = Typography;
import '../assets/styles/App.css';

const Footer = () => {
  const footerStyle = {
    paddingBottom: '10px',
    fontWeight: 'bold',
    borderBottom: '1px solid #ffffff80',
    marginBottom: '10px',
    width: '100%',
    maxWidth: '300px',
    textAlign: 'center'
  }

  return (
    <Flex vertical justify='center' align='center' className='footer'>
      <Text style={{ fontWeight: 'bold' }}>Jonathan Díaz</Text>
      <Text
        style={footerStyle}
      >
        Desarrollador Front End
      </Text>
      <Text>Desarrollo Full Stack</Text>
      <Text>Academia Desafío Latam</Text>
      <Text>2024</Text>
    </Flex>
  );
};

export default Footer;
