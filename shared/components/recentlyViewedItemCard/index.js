import {COLORS, FONTS, SIZES} from '../../../constants';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import React from 'react';

export const RecentlyViewedCard = ({item, onSelect, onAddToBagModal}) => (
  <TouchableOpacity
    style={styles.container}
    onPress={() => {
      onSelect(item);
      onAddToBagModal(true);
    }}>
    <View style={styles.imageContainer}>
      <Image source={item.img} resizeMode="contain" style={styles.image} />
    </View>
    <View style={styles.infoContainer}>
      <Text style={styles.nameText}>{item.name}</Text>
      <Text style={styles.priceText}>{item.price}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },

  imageContainer: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  image: {
    width: 130,
    height: 100,
  },

  infoContainer: {
    flex: 1.5,
    marginLeft: SIZES.radius,
    justifyContent: 'center',
  },
  nameText: {
    color: COLORS.gray,
    ...FONTS.body3,
  },
  priceText: {
    ...FONTS.h3,
  },
});
