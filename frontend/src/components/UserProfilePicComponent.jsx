import { useContext } from 'react';
import {View, Image, StyleSheet} from 'react-native';
import { UserDataContext } from '../contexts/UserDataContext';

const UserProfilePicComponent = () => {


  return (
    <View className="w-64 h-64 bg-grey mt-10 rounded-full flex flex-col items-center justify-center">
      <Image
        className="w-[90%] h-[90%] rounded-full"
        src={"https://thispersondoesnotexist.com/"}></Image>
    </View>
  );
};

export default UserProfilePicComponent;


