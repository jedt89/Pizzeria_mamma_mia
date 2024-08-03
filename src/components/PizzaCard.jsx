import { ShoppingCartOutlined, SettingOutlined } from '@ant-design/icons';
import { Card, Flex, Space } from 'antd';
const { Meta } = Card;
import { Typography } from 'antd';
const { Title, Text } = Typography;
import '../assets/styles/App.css';
import pizzaIcon from '../assets/img/pizzaIcon.png';

const PizzaCard = ({ name, price, ingredients, img }) => {
  const getIngredients = () => {
    const container = [];
    ingredients.map((ingredient, index) => {
      const template = (
        <Flex key={index}>
          <img
            src={pizzaIcon}
            style={{ width: '20px', height: '15px', marginRight: '10px' }}
          />
          <Text>{ingredient}</Text>
        </Flex>
      );

      container.push(template);
    });
    return (
      <Flex vertical gap={'small'} style={{ margin: '1rem 0rem' }}>
        {container}
      </Flex>
    );
  };
  return (
    <>
      <Space align='center' direction='horizontal'>
        <Card
          style={{
            width: 300,
            alignItems: 'center'
          }}
          cover={<img alt={name} src={img} />}
          actions={[
            <SettingOutlined
              style={{ fontSize: '24px', color: 'orange' }}
              title='Editar ingredientes'
              key='edit'
            />,
            <ShoppingCartOutlined
              style={{ fontSize: '24px', color: 'orange' }}
              title='Añadir al Carrito'
              key='Añadir al Carrito'
            />
          ]}
        >
          <Meta
            className='text-card'
            title={name}
            description={getIngredients()}
          />
          <Title level={3}>Precio: ${price.toLocaleString()}</Title>
        </Card>
      </Space>
    </>
  );
};

export default PizzaCard;
