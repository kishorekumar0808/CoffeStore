import React from 'react';
import {Image, View} from 'react-native';
import {styles} from '@/components/ProfilePic/Style';

export const ProfilePic: React.FC = () => {
  return (
    <View style={styles.ImageContainer}>
      <Image
        source={require('@/assets/app_images/avatar.png')}
        style={styles.Image}
      />
    </View>
  );
};
