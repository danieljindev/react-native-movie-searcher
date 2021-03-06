import InitialScreen from '../Screens/Components/Initial';
import Login from '../Screens/Components/Login/Login';
import MovieDetail from '../Screens/Components/Movie/MovieDetail';
import AppTab from './AppTab';

const Routes = [
  {
    name: 'InitialScreen',
    screen: InitialScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  {
    name: 'Login',
    screen: Login,
    navigationOptions: {
      headerShown: false,
    },
  },
  {
    name: 'Home',
    screen: AppTab,
    navigationOptions: {
      headerShown: false,
    },
  },
  {
    name: 'MovieDetail',
    screen: MovieDetail,
    navigationOptions: {
      headerShown: false,
    },
  },
];

export default Routes;
