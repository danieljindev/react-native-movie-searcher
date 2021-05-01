import React, {useContext} from 'react';
import {SafeAreaView} from 'react-native';
import {AppContext} from '../../../AppContext';
import CommonStyle from '../../../Theme/CommonStyle';
import {CustomText} from '../../CommonComponent';

const Users = (props) => {
  const {appTheme} = useContext(AppContext);

  return (
    <SafeAreaView
      style={[
        CommonStyle.flexContainer,
        CommonStyle.center,
        {backgroundColor: appTheme.background},
      ]}>
      <CustomText xlarge style={{color: appTheme.text, marginVertical: 10}}>
        User Profile Page
      </CustomText>
    </SafeAreaView>
  );
};

export default Users;
