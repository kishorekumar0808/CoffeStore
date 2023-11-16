import {Text, View} from 'react-native';
import React from 'react';
import {HeaderBarProps} from '@/components/HeaderBar/Type';
import {COLORS, FONTSIZE} from '@/theme/theme';
import {GradientBGIcon} from '@/components/GradientBGIcon';
import {styles} from '@/components/HeaderBar/Style';
import { ProfilePic } from '@/components/ProfilePic';

export const HeaderBar: React.FC<HeaderBarProps> = ({title}) => {
  return (
    <View style={styles.HeaderStyle}>
      <GradientBGIcon
        name={'menu'}
        color={COLORS.primaryLightGreyHex}
        size={FONTSIZE.size_16}
      />
      <Text style={styles.HeaderText}>{title}</Text>
      <ProfilePic />
    </View>
  );
};
