import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {ArtistLogo, ArtLogo} from '../../assets/icons';
import {borderRadius, colors, spacing} from '../../theme';
import Hello from '../../assets/icons/art.svg';

const options = [
  {
    label: 'Art',
    logo: ArtLogo,
    value: 'ART',
  },
  {
    label: 'Artist',
    logo: ArtistLogo,
    value: 'ARTIST',
  },
];

const RadioButton = () => {
  return (
    <View
      style={{
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: spacing.md,
      }}>
      {options.map((item, index) => (
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: item.value === 'ART' ? colors.dark : colors.border,
            marginLeft: index === 0 ? -8 : 0,
            marginRight: index === 1 ? -8 : 0,
            borderRadius: borderRadius.full,
            width: '50%',
          }}
          key={item.label}>
          <View
            style={{
              flexDirection: 'row',
              gap: spacing.md,
              justifyContent: 'center',
              alignItems: 'center',
              padding: spacing.md,
            }}>
            {<item.logo />}
            <Text>{item.label}</Text>
          </View>
        </TouchableOpacity>
      ))}
      {/* <Hello /> */}
    </View>
  );
};

export default RadioButton;
