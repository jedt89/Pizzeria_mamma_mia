import { Flex, Typography } from 'antd';
const { Title } = Typography;
import { Header, PizzaCard } from '../components';
import '../assets/styles/App.css';

const Home = () => {
  const pizzas = [
    {
      name: 'Napolitana',
      price: 5950,
      ingredients: ['Mozzarella', 'Tomates', 'Jamón', 'Orégano'],
      img: 'https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c'
    },
    {
      name: 'Española',
      price: 6950,
      ingredients: ['Mozzarella', 'Gorgonzola', 'Parmesano', 'Provolone'],
      img: 'https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab'
    },
    {
      name: 'Pepperoni',
      price: 5000,
      ingredients: ['Mozzarella', 'Pepperoni', 'Orégano', 'extra queso'],
      img: 'https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3'
    }
  ];

  return (
    <div className='home-container' style={{ marginBottom: '2rem' }}>
      <Header></Header>
      <Flex
        vertical
        justify='center'
        gap={'large'}
        wrap
        style={{ width: '100%' }}
      >
        <Title style={{ color: '#fff' }}>Las regalonas de mamá</Title>
        <Flex justify='center' gap={'2rem'} wrap>
          {pizzas.map(({ name, price, ingredients, img }, index) => {
            return (
              <PizzaCard
                key={index}
                name={name}
                price={price}
                ingredients={ingredients}
                img={img}
              ></PizzaCard>
            );
          })}
        </Flex>
      </Flex>
    </div>
  );
};

export default Home;
