import { Flex, Typography, Button } from 'antd';
import { PieChartOutlined } from '@ant-design/icons';
const { Title, Text } = Typography;
import '../assets/styles/App.css';

const Header = () => {
  return (
    <Flex justify='center' className='header-container'>
      <Flex wrap vertical justify='flex-start' className='header'>
        <Flex className='header-text width-100' align='center' vertical>
          <Title className='header-title'>¡Promociones todos los días!</Title>
          <Text>Ingresa y revisa nuestro variado menú</Text>
          <Button
            style={{ background: '#ffa50080' }}
            className='navbar-button header-button'
            icon={<PieChartOutlined style={{fontSize: '20px'}} />}
            size={'large'}
          >
            Ir al menú
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
