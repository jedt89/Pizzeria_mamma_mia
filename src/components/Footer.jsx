import { Flex, Typography } from 'antd';
const { Text } = Typography;
import '../assets/styles/App.css';

const Footer = () => {
  return (
    <Flex vertical justify='center' align='center' className='footer'>
      <Text>Jonathan Díaz</Text>
      <Text>Desarrollador Front End</Text>
      <Text>Desarrollo Full Stack</Text>
      <Text>Academia Desafío Latam</Text>
      <Text>2024</Text>
    </Flex>
  );
};

export default Footer;
