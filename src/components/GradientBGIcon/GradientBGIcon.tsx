import React from 'react';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CustomIcon from '../../assets/customIcon/CustomIcon';
import {COLORS} from '../../theme/theme';
import {GradientBGIconProps} from './Type';
import {styles} from './Style';

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
