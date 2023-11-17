import CustomIcon from '@/assets/customIcon/CustomIcon';
import {View} from 'react-native';
import {BGIconProps} from '@/components/BGIcon/Type';
import {styles} from '@/components/BGIcon/Style';

export const BGIcon: React.FC<BGIconProps> = ({name, color, size, BGColor}) => {
  return (
    <View style={[styles.IconBG, {backgroundColor: BGColor}]}>
      <CustomIcon name={`${name}`} color={color} size={size} />
    </View>
  );
};
