import {COLORS, FONTS, SIZES, images} from '../constants/index';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {
  recentlyViewedMockData,
  trendingMockData,
} from '../shared/utils/mockData';

import {ModalWithBlur} from '../shared/components/modalWithBlur';
import {RecentlyViewedCard} from '../shared/components/recentlyViewedItemCard';
import {TrendingShoes} from '../shared/components/trendingShoes';
import {useShoes} from '../shared/hooks/useShoes';

const Home = () => {
  // Dummy Data
  const [trending, setTrending] = useState(trendingMockData);

  const [recentlyViewed, setRecentlyViewed] = useState(recentlyViewedMockData);

  const {
    isOpenAddToBagModal,
    selectedItem,
    selectedSize,
    onSelectItem,
    onSelectSize,
    onOpen,
    onClose,
  } = useShoes();

  return (
    <View style={styles.container}>
      <Text style={styles.trendingText}>Trending</Text>

      <View style={styles.trendingContainer}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={trending}
          keyExtractor={item => item.id.toString()}
          renderItem={({item, index}) => (
            <TrendingShoes
              item={item}
              onSelect={onSelectItem}
              onAddToBagModal={onOpen}
            />
          )}
        />
      </View>

      <View
        style={[
          styles.recentlyViewedContainer,
          styles.recentlyViewedContainerShadow,
        ]}>
        <View style={styles.recentlyViewedImageContainer}>
          <Image
            source={images.recentlyViewedLabel}
            resizeMode="contain"
            style={styles.recentlyViewedImage}
          />
        </View>
        <View style={styles.recentlyViewedList}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={recentlyViewed}
            keyExtractor={item => item.id.toString()}
            renderItem={({item, index}) => (
              <RecentlyViewedCard
                item={item}
                onSelect={onSelectItem}
                onAddToBagModal={onOpen}
              />
            )}
          />
        </View>
      </View>

      {isOpenAddToBagModal && selectedItem && (
        <ModalWithBlur
          selectedItem={selectedItem}
          selectedSize={selectedSize}
          onSelectItem={onSelectItem}
          onSelectSize={onSelectSize}
          onClose={onClose}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },

  trendingText: {
    marginTop: SIZES.radius,
    marginHorizontal: SIZES.padding,
    ...FONTS.largeTitleBold,
  },
  trendingContainer: {
    height: 260,
    marginTop: SIZES.radius,
    marginLeft: 18,
  },

  recentlyViewedContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: SIZES.padding,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: COLORS.white,
  },
  recentlyViewedContainerShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },
  recentlyViewedImageContainer: {
    width: 70,
    marginLeft: SIZES.base,
  },
  recentlyViewedImage: {
    width: '100%',
    height: '100%',
  },
  recentlyViewedList: {
    flex: 1,
    paddingBottom: SIZES.padding,
  },
});

export default Home;
