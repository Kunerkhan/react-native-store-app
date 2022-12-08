import {COLORS, FONTS, SIZES} from '../../../constants';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Polygon, Svg} from 'react-native-svg';

import React from 'react';

export const TrendingShoes = ({item, onSelect, onAddToBagModal}) => (
  <TouchableOpacity
    style={styles.container}
    onPress={() => {
      onSelect(item);
      onAddToBagModal();
    }}>
    <Text style={styles.title}>{item.type}</Text>

    <View
      style={[
        {...styles.box, backgroundColor: item.bgColor},
        styles.trendingShadow,
      ]}>
      <View style={styles.nameBox}>
        <Text style={styles.nameText}>{item.name}</Text>
        <Text style={styles.priceText}>{item.price}</Text>
      </View>
    </View>

    <View style={styles.icon}>
      <Svg height="100%" width="100%">
        <Polygon points="0,0 160,0 160,80" fill="white" />
      </Svg>
    </View>

    <Image source={item.img} resizeMode="cover" style={styles.image} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    height: 240,
    width: 180,
    justifyContent: 'center',
    marginHorizontal: SIZES.base,
  },
  trendingShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },

  title: {
    color: COLORS.gray,
    ...FONTS.h5,
  },

  box: {
    flex: 1,
    justifyContent: 'flex-end',
    marginTop: SIZES.base,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginRight: SIZES.padding,
    paddingLeft: SIZES.radius,
    paddingRight: SIZES.padding,
    paddingBottom: SIZES.radius,
  },

  nameBox: {height: '35%', justifyContent: 'space-between'},
  nameText: {
    color: COLORS.white,
    ...FONTS.body4,
  },
  priceText: {
    color: COLORS.white,
    ...FONTS.h3,
  },

  icon: {
    position: 'absolute',
    top: 27,
    right: 0,
    width: '95%',
    height: '100%',
  },

  image: {
    position: 'absolute',
    top: 50,
    right: 0,
    width: '98%',
    height: 80,
    transform: [{rotate: '-15deg'}],
  },
});
