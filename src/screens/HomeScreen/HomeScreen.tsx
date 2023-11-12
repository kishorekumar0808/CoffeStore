import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {useStore} from '../../store/Store';
import {COLORS, FONTFAMILY} from '../../theme/theme';
import {HeaderBar} from '../../components/HeaderBar/HeaderBar';

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
  const CoffieList = useStore((state: any) => state.CoffieList);
  const BeanList = useStore((state: any) => state.BeanList);
  // const [categories, setCategories] = useState(
  //   getCategoriesFromData(CoffieList),
  // );
  const [searchText, setSearchText] = useState([undefined]);
  // const [categoryIndex, setCategoryIndex] = useState({
  //   index: 0,
  //   category: categories[0],
  // });
  // const [sortedCoffee, setSortedCoffee] = useState(
  //   getCoffeeList(categoryIndex.category, CoffieList),
  // );
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
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
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
