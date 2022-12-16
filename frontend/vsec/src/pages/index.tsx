import { Route, Routes } from 'react-router-dom';
import loging from './home/login';
import Home from './home/Home';
import Rentals from './Rentals/Rental'
import Payment from './Rentals/Payment'
import Ckout from './Rentals/Checkout'

const routes = [{ path: '/', Page: loging }, 
{ path: '/Home', Page: Home}, 
{ path: '/Rental', Page: Rentals},
{ path: '/Payment', Page: Payment},
{ path: '/Checkout', Page: Ckout}];

function Routing() {
  const getRoutes = () => routes.map(({ path, Page }) => <Route key={path} path={path} element={<Page/>} />);

  return <Routes>{getRoutes()}</Routes>;
}

export { Routing };