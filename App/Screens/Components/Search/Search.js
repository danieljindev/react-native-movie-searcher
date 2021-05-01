import React, {useContext, useEffect} from 'react';
import {FlatList, SafeAreaView, StyleSheet, TextInput} from 'react-native';
import {CustomText} from '../../CommonComponent';
import CommonStyle from '../../../Theme/CommonStyle';
import {AppContext} from '../../../AppContext';
import {useDispatch, useSelector} from 'react-redux';
import {getMoviesByTerm} from '../../../Actions/MovieActions';
import {MovieCard} from '../../SubComponents/MoiveCard';

const Search = (props) => {
  const {appTheme} = useContext(AppContext);
  const dispatch = useDispatch();
  const searchedMovies = useSelector((state) => state.movie.searchedMovies);

  const onChangeText = (term) => {
    dispatch(getMoviesByTerm(term));
  };

  return (
    <SafeAreaView
      style={{
        padding: 10,
        marginBottom: 60,
      }}>
      <TextInput
        style={[{...styles.textInput, borderColor: appTheme.text}]}
        onChangeText={onChangeText}
        defaultValue=""
      />
      <FlatList
        data={searchedMovies}
        renderItem={({item}) => <MovieCard {...item.show} key={item.show.id} />}
        numColumns={2}
        keyExtractor={(item) => item.show.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  textInput: {
    height: 40,
    width: '95%',
    margin: 10,
    fontSize: 17,
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 10,
  },
});

export default Search;
