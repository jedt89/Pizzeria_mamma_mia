import { Navbar, Home, Footer } from './components';

function App() {
  return (
    <>
      <Navbar token={false} total={25000}></Navbar> {/* El token no se generará en la capa de UI, se traerá desde AUTH */}
      <Home></Home>
      <Footer></Footer>
    </>
  );
}

export default App;
