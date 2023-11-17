import {COLORS, FONTFAMILY} from '@/theme/theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  CoffeeBeansTitle: {
    fontSize: 18,
    marginLeft: 30,
    marginTop: 20,
    fontFamily: FONTFAMILY.poppins_medium,
    color: COLORS.secondaryLightGreyHex,
  },
  FlatListContainer: {
    gap: 20,
    width: 20,
    paddingHorizontal: 30,
    flex: 1,
  },
  ActiveCategory: {
    height: 10,
    width: 10,
    borderRadius: 10,
    backgroundColor: COLORS.primaryOrangeHex,
  },
  CategoryText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: 16,
    color: COLORS.primaryLightGreyHex,
    marginBottom: 4,
  },
  CategoryScrollViewItem: {
    alignItems: 'center',
  },
  CategoryScrollViewContainer: {
    paddingHorizontal: 15,
  },
  CategoryScrollViewStyle: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  inputIcon: {
    marginHorizontal: 20,
  },
  InputContainerComponent: {
    flexDirection: 'row',
    margin: 30,
    borderRadius: 20,
    backgroundColor: COLORS.primaryDarkGreyHex,
    alignItems: 'center',
  },

  TextInputContainer: {
    flex: 1,
    height: 20 * 3,
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: 14,
    color: COLORS.primaryWhiteHex,
  },

  screenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },

  ScrollView: {
    flexGrow: 1, //if dont have any thing to scroll it will take the entire space
  },
  ScreenTitle: {
    fontSize: 20,
    fontFamily: FONTFAMILY.poppins_semibold,
    color: COLORS.primaryWhiteHex,
    paddingLeft: 30,
  },
});
