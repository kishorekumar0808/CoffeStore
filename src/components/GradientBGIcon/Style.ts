import {COLORS} from '@/theme/theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  Container: {
    borderWidth: 2,
    borderColor: COLORS.secondaryDarkGreyHex,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.secondaryDarkGreyHex,
    overflow: 'hidden',
  },
  LinearGradientBG: {
    height: 36,
    width: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
