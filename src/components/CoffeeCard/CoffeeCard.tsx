import React from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {CoffeeCardProps} from '@/components/CoffeeCard/Type';
import {COLORS} from '@/theme/theme';
import CustomIcon from '@/assets/customIcon/CustomIcon';
import {styles} from '@/components/CoffeeCard/Style';
import {BGIcon} from '@/components/BGIcon';

export const CoffeeCard: React.FC<CoffeeCardProps> = ({
  image,
  name,
  spacial_ingredient,
  average_rating,
  prices,
}) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={styles.CardLinearGradientContainer}
      colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}>
      <ImageBackground
        source={image}
        style={styles.CardImageBG}
        resizeMode="cover">
        <View style={styles.CardRatingContainer}>
          <CustomIcon name={'star'} color={COLORS.primaryOrangeHex} size={16} />
          <Text style={styles.CardRatingText}>{average_rating}</Text>
        </View>
      </ImageBackground>
      <Text style={styles.CardTitle}>{name}</Text>
      <Text style={styles.CardSubtitle}>{spacial_ingredient}</Text>
      <View style={styles.CardFooterRow}>
        <Text style={styles.CardPriceCurrency}>
          $ <Text style={styles.CardPrice}>{prices.price}</Text>
        </Text>
        <TouchableOpacity onPress={() => {}}>
          <BGIcon
            color={COLORS.primaryWhiteHex}
            name={'add'}
            BGColor={COLORS.primaryOrangeHex}
            size={10}
          />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};
