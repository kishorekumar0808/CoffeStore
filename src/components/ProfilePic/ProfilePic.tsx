import React from 'react';
import {Image, View} from 'react-native';
import {styles} from '@/src/components/ProfilePic/Style';

export const ProfilePic: React.FC = () => {
  return (
    <View style={styles.ImageContainer}>
      <Image
        source={require('@/src/assets/app_images/avatar.png')}
        style={styles.Image}
      />
    </View>
  );
};
