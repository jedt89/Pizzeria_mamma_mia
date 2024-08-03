import { Flex, Button, Dropdown } from 'antd';
import {
  HomeOutlined,
  UserOutlined,
  LoginOutlined,
  LogoutOutlined,
  UserAddOutlined,
  MenuUnfoldOutlined,
  ShoppingCartOutlined
} from '@ant-design/icons';
import Title from 'antd/es/typography/Title';
import '../assets/styles/App.css';
import brand from '../assets/img/brand.png'

const Navbar = ({ token, total }) => {
  const items = [
    {
      key: 'home',
      label: (
        <a href=''>
          Inicio
        </a>
      ),
      icon: <HomeOutlined />,
      disabled: token
    },
    {
      key: 'login',
      label: (
        <span href=''>
          Login
        </span>
      ),
      icon: <LoginOutlined />,
      disabled: token
    },
    {
      key: 'register',
      label: (
        <span href=''>
          Register
        </span>
      ),
      icon: <UserAddOutlined />,
      disabled: token
    },
    {
      key: 'profile',
      label: (
        <span href=''>
          Perfil
        </span>
      ),
      icon: <UserOutlined />,
      disabled: !token
    },
    {
      key: 'logout',
      label: (
        <span href=''>
          Logout
        </span>
      ),
      icon: <LogoutOutlined />,
      disabled: !token
    }
  ];

  return (
    <Flex wrap className='nav-container' align='center' justify='space-between'>
      <div>
        <a href=''>
          <img src={brand} style={{ width: '80px' }} />
        </a>
      </div>
      <Title className='nav-title'>Pizzería Mamma mía</Title>
      <Flex align='center' className='nav-buttons-container' gap={'1rem'}>
        <Button className='navbar-button'>
          <ShoppingCartOutlined style={{ fontSize: '20px' }} />
          <Flex align='center' style={{ fontSize: '14px', margin: '0px' }}>
            ${total.toLocaleString('es')}
          </Flex>
        </Button>
        <Dropdown
          menu={{ items }}
          placement='bottom'
          arrow={{
            pointAtCenter: true
          }}
        >
          <Button className='navbar-button'>
            <MenuUnfoldOutlined />
          </Button>
        </Dropdown>
      </Flex>
    </Flex>
  );
};
export default Navbar;
