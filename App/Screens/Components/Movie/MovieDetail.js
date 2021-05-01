import React, {useContext, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import {CustomText} from '../../CommonComponent';
import CommonStyle from '../../../Theme/CommonStyle';
import {AppContext} from '../../../AppContext';
import {useDispatch, useSelector} from 'react-redux';
import {getMovie} from '../../../Actions/MovieActions';

const width = Dimensions.get('window').width - 40;
const height = width * 1.4;

const MovieDetail = (props) => {
  const {id} = props.route.params;
  const {appTheme} = useContext(AppContext);

  const dispatch = useDispatch();
  const currentMovie = useSelector((state) => state.movie.currentMovie);

  useEffect(() => {
    dispatch(getMovie(id));
  }, []);
  const convertToPlain = (html) => {
    if (!html) {
      return 'There is no summary yet.';
    }
    return html.replace(/<[^>]+>/g, '');
  };

  if (currentMovie) {
    const {image, name, summary} = currentMovie;

    let picture =
      'https://static.tvmaze.com/images/no-img/no-img-portrait-text.png';
    if (image) {
      picture = currentMovie.image.medium;
    }

    return (
      <SafeAreaView
        style={[
          CommonStyle.flexContainer,
          {backgroundColor: appTheme.background},
        ]}>
        <ScrollView>
          <Image style={styles.image} source={{uri: picture}} />
          <CustomText
            xxlarge
            style={{
              color: appTheme.text,
              margin: styles.text.margin,
              textAlign: styles.text.textAlign,
            }}>
            {name}
          </CustomText>
          <CustomText
            xlarge
            style={{
              color: appTheme.text,
              margin: styles.text.margin,
              textAlign: styles.text.textAlign,
            }}>
            {convertToPlain(summary)}
          </CustomText>
        </ScrollView>
      </SafeAreaView>
    );
  } else {
    return null;
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    width,
    height,
    borderRadius: 5,
    marginVertical: 20,
    marginHorizontal: 20,
  },
  text: {
    color: 'black',
    textAlign: 'center',
    width: '80%',
    margin: 20,
  },
  center: {
    alignItems: 'center',
  },
});

export default MovieDetail;
