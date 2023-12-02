import {
  FlatList,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {HeaderBar} from '@/components/HeaderBar';
import {COLORS, FONTSIZE} from '@/theme/theme';
import CustomIcon from '@/assets/customIcon/CustomIcon';
import {useStore} from '@/store';
import {CoffeeCard} from '@/components/CoffeeCard/CoffeeCard';
import BeansData from '@/data/BeansData';
import {styles} from '@/screens/HomeScreen/Style';

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
        scrollEnabled
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollView}>
        <HeaderBar title={'Home Screen'} />
        <Text style={styles.ScreenTitle}>
          Find the best{'\n'}Coffee for you
        </Text>

        {/* search Input */}
        <View style={styles.InputContainerComponent}>
          <TouchableOpacity onPress={() => {}}>
            <CustomIcon
              name="search"
              size={FONTSIZE.size_18}
              color={
                searchText.length > 0
                  ? COLORS.primaryOrangeHex
                  : COLORS.primaryLightGreyHex
              }
              style={styles.inputIcon}
            />
          </TouchableOpacity>
          <TextInput
            placeholder="Find Your Coffee..."
            value={searchText}
            onChangeText={text => setSearchText(text)}
            placeholderTextColor={COLORS.primaryLightGreyHex}
            style={styles.TextInputContainer}
          />
        </View>

        {/* catagories */}
        <ScrollView
          horizontal
          scrollEnabled
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.CategoryScrollViewStyle}>
          {categories.map((data, index) => (
            <View
              key={index.toString()}
              style={styles.CategoryScrollViewContainer}>
              <TouchableOpacity
                style={styles.CategoryScrollViewItem}
                onPress={() => {
                  setCategoryIndex({index: index, category: categories[index]});
                  setSortedCoffee([
                    ...getCoffeeList(categories[index], CoffeeList),
                  ]);
                }}>
                <Text
                  style={[
                    styles.CategoryText,
                    categoryIndex.index == index
                      ? {color: COLORS.primaryOrangeHex}
                      : {},
                  ]}>
                  {data}
                </Text>
                {categoryIndex.index == index && (
                  <View style={styles.ActiveCategory} />
                )}
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        {/* Coffee FlatList */}
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={sortedCoffee}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.FlatListContainer}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => {}}>
              <CoffeeCard
                id={item.id}
                index={item.index}
                type={item.type}
                roasted={item.roasted}
                image={item.imagelink_square}
                name={item.name}
                spacial_ingredient={item.special_ingredient}
                average_rating={item.average_rating}
                prices={item.prices[2]}
                buttonPressHandler={() => {}}
              />
            </TouchableOpacity>
          )}
        />

        {/* Beans FlatList */}
        <Text style={styles.CoffeeBeansTitle}>Coffee Beans</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={BeansData}
          keyExtractor={item => item.id}
          contentContainerStyle={[
            styles.FlatListContainer,
            {marginBottom: 100},
          ]}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => {}}>
              <CoffeeCard
                id={item.id}
                index={item.index}
                type={item.type}
                roasted={item.roasted}
                image={item.imagelink_square}
                name={item.name}
                spacial_ingredient={item.special_ingredient}
                average_rating={item.average_rating}
                prices={item.prices[2]}
                buttonPressHandler={() => {}}
              />
            </TouchableOpacity>
          )}
        />
      </ScrollView>
    </View>
  );
};
