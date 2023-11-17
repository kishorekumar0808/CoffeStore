import {StyleSheet} from 'react-native';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '@/theme/theme';

export const styles = StyleSheet.create({
  HeaderStyle: {
    padding: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  HeaderText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: 16,
    color: COLORS.primaryWhiteHex,
  },
});
