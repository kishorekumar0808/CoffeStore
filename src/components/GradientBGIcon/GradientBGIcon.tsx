import React from 'react';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {GradientBGIconProps} from '@/src/components/GradientBGIcon/Type';
import {styles} from '@/src/components/GradientBGIcon/Style';
import { COLORS } from '@/src/theme/theme';
import CustomIcon from '@/src/assets/customIcon/CustomIcon';

export const GradientBGIcon: React.FC<GradientBGIconProps> = ({
  name,
  color,
  size,
}) => {
  return (
    <View style={styles.Container}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
        style={styles.LinearGradientBG}>
        <CustomIcon name={name} color={color} size={size} />
      </LinearGradient>
    </View>
  );
};
