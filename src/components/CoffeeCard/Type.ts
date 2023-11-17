import {ImageProps} from 'react-native';

export type CoffeeCardProps = {
  id?: string;
  name?: string;
  index?: number;
  type?: string;
  roasted?: string;
  image?: ImageProps;
  spacial_ingredient?: string;
  average_rating?: number;
  prices: any;
  buttonPressHandler?: (id: string) => void;
};
