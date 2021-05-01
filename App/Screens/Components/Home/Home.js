import React, {useContext, useEffect} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getHomeMovies} from '../../../Actions/MovieActions';
import {AppContext} from '../../../AppContext';
import {MovieCard} from '../../SubComponents/MoiveCard';

const Home = () => {
  const {appTheme} = useContext(AppContext);
  const dispatch = useDispatch();
  const homeMovies = useSelector((state) => state.movie.homeMovies);

  useEffect(() => {
    console.log('Get Home Movies');
    dispatch(getHomeMovies());
  }, []);

  return (
    <SafeAreaView
      style={{
        padding: 10,
      }}>
      <FlatList
        data={homeMovies}
        renderItem={({item}) => <MovieCard {...item} key={item.id} />}
        numColumns={2}
        keyExtractor={(movie) => movie.id.toString()}
      />
    </SafeAreaView>
  );
};

export default Home;
