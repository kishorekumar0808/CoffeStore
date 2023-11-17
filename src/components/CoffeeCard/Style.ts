import {COLORS, FONTFAMILY} from '@/theme/theme';
import {Dimensions, StyleSheet} from 'react-native';

const CARD_WIDTH = Dimensions.get('window').width * 0.32;

export const styles = StyleSheet.create({
  CardLinearGradientContainer: {
    padding: 15,
    borderRadius: 25,
  },
  CardImageBG: {
    width: CARD_WIDTH,
    height: CARD_WIDTH,
    borderRadius: 20,
    marginBottom: 15,
    overflow: 'hidden',
  },
  CardRatingContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.primaryBlackRGBA,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    paddingHorizontal: 15,
    position: 'absolute',
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
    top: 0,
    right: 0,
  },
  CardRatingText: {
    fontFamily: FONTFAMILY.poppins_medium,
    color: COLORS.primaryWhiteHex,
    lineHeight: 22,
    fontSize: 14,
  },
  CardTitle: {
    fontFamily: FONTFAMILY.poppins_medium,
    color: COLORS.primaryWhiteHex,
    fontSize: 16,
  },
  CardSubtitle: {
    fontFamily: FONTFAMILY.poppins_light,
    color: COLORS.primaryWhiteHex,
    fontSize: 10,
  },
  CardFooterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },
  CardPriceCurrency: {
    fontFamily: FONTFAMILY.poppins_semibold,
    color: COLORS.primaryOrangeHex,
    fontSize: 18,
  },
  CardPrice: {
    color: COLORS.primaryWhiteHex,
  },
});
