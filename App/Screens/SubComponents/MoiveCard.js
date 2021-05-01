import {CommonActions, useNavigation} from '@react-navigation/core';
import React, {useContext} from 'react';
import {Dimensions, Image, Pressable, StyleSheet, View} from 'react-native';
import {AppContext} from '../../AppContext';
import {CustomText} from '../CommonComponent';

const cols = 2;
const marginHorizontal = 10;
const marginVertical = 20;
const width =
  Dimensions.get('window').width / cols - marginHorizontal * (cols + 1);
const height = width * 1.4;

const MovieCard = (props) => {
  const {appTheme} = useContext(AppContext);
  const {id, image, name} = props;
  const navigation = useNavigation();

  const onPress = () => {
    goToNextScreen('MovieDetail');
  };

  const goToNextScreen = async (nextScreen) => {
    navigation.dispatch(
      CommonActions.navigate({
        name: nextScreen,
        params: {
          id,
        },
      }),
    );
  };

  let picture =
    'https://static.tvmaze.com/images/no-img/no-img-portrait-text.png';
  if (image) {
    picture = image.medium;
  }

  return (
    <View style={styles.container}>
      <Pressable onPress={onPress}>
        <Image style={styles.image} source={{uri: picture}} />
        <CustomText large style={{color: appTheme.text, textAlign: 'center'}}>
          {name}
        </CustomText>
      </Pressable>
    </View>
  );
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
    marginVertical: marginVertical,
    marginHorizontal: marginHorizontal,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    width,
    marginHorizontal: marginHorizontal,
  },
});

export {MovieCard};
