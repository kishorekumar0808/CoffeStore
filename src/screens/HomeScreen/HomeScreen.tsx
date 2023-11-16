import {ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {useStore} from '@/src/store';
import {BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING} from '@/src/theme/theme';
import { HeaderBar } from '@/src/components/HeaderBar';
import CustomIcon from '@/src/assets/customIcon/CustomIcon';

const getCategoriesFromData = (data: any) => {
  let temp: any = {};
  for (let i = 0; i < data.length; i++) {
    if (temp[data[i].name] == undefined) {
      temp[data[i].name] = 1;
    } else {
      temp[data[i].name]++;
    }
  }
  let categories = Object.keys(temp);
  categories.unshift('All');
  return categories;
};

const getCoffeeList = (category: string, data: any) => {
  if (category == 'All') {
    return data;
  } else {
    let coffeeList = data.filter((item: any) => item.name == category);
    return coffeeList;
  }
};

export const HomeScreen = () => {
  const CoffeeList = useStore((state: any) => state.CoffeeList);
  const BeanList = useStore((state: any) => state.BeanList);
  const [categories, setCategories] = useState(
    getCategoriesFromData(CoffeeList),
  );
  const [searchText, setSearchText] = useState('');
  const [categoryIndex, setCategoryIndex] = useState({
    index: 0,
    category: categories[0],
  });
  const [sortedCoffee, setSortedCoffee] = useState(
    getCoffeeList(categoryIndex.category, CoffeeList),
  );
  return (
    <View style={styles.screenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollView}>
        <HeaderBar title={'Home Screen'} />
        <Text style={styles.ScreenTitle}>
          Find the best{'\n'}Coffee for you
        </Text>


        {/* search Input */}
        <View style={styles.InputContainerComponent}>
          <TouchableOpacity onPress={()=>{}}>
            <CustomIcon name='search' size={FONTSIZE.size_18}
            color={
              searchText.length > 0 ? 
                COLORS.primaryOrangeHex 
                : COLORS.primaryLightGreyHex
            }
            style={styles.inputIcon}/>
          </TouchableOpacity>
          <TextInput
              placeholder="Find Your Coffee..." 
              value={searchText}
              onChangeText={text=> setSearchText(text)}
              placeholderTextColor={COLORS.primaryLightGreyHex}
              style={styles.TextInputContainer}
              />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  inputIcon: {
    marginHorizontal: SPACING.space_20,

  },
  
  InputContainerComponent: {
    flexDirection: 'row',
    margin: SPACING.space_30,
    borderRadius: BORDERRADIUS.radius_20,
    backgroundColor: COLORS.primaryDarkGreyHex,
    alignItems: 'center',
  },
  
  TextInputContainer:{
    flex: 1,
    height: SPACING.space_20 * 3,
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_14,
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
