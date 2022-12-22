import {
  Alert,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../../constants';
import React, {useCallback} from 'react';

import {BlurView} from '@react-native-community/blur';

export const ModalWithBlur = ({
  isOpen,
  selectedItem,
  selectedSize,
  onSelectSize,
  onClose,
}) => {
  const sizeBtnColor = useCallback(
    index => (selectedItem.sizes[index] === selectedSize ? COLORS.white : null),
    [selectedSize, selectedItem.sizes],
  );
  const renderShoeSizes = () => {
    return selectedItem.sizes.map((item, index) => {
      return (
        <TouchableOpacity
          key={index}
          style={[
            styles.selectSizeBtn,
            {
              backgroundColor: sizeBtnColor(index),
            },
          ]}
          underlayColor="white"
          onPress={() => {
            onSelectSize(item);
          }}>
          <Text
            style={{
              color:
                selectedItem.sizes[index] === selectedSize
                  ? COLORS.black
                  : COLORS.white,
              ...FONTS.body4,
            }}>
            {item}
          </Text>
        </TouchableOpacity>
      );
    });
  };

  return (
    <BlurView
      style={styles.blurView}
      blurType="light"
      blurAmount={20}
      reducedTransparencyFallbackColor="white">
      <Modal
        animationType="slide"
        transparent={true}
        visible={isOpen}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.container}>
          <TouchableOpacity style={styles.closeBtn} onPress={onClose} />

          <View
            style={{
              ...styles.modalContent,
              backgroundColor: selectedItem.bgColor,
            }}>
            <View style={styles.imageContainer}>
              <Image
                source={selectedItem.img}
                resizeMode="contain"
                style={styles.image}
              />
            </View>
            <Text style={styles.nameText}>{selectedItem.name}</Text>
            <Text style={styles.typeText}>{selectedItem.type}</Text>
            <Text style={styles.priceText}>{selectedItem.price}</Text>

            <View style={styles.sizeContainer}>
              <View>
                <Text style={styles.sizeText}>Select size</Text>
              </View>
              <View style={styles.sizeList}>{renderShoeSizes()}</View>
            </View>

            <TouchableOpacity style={styles.addBtn} onPress={onClose}>
              <Text style={styles.addBtnText}>Add to Bag</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </BlurView>
  );
};

const styles = StyleSheet.create({
  blurView: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    justifyContent: 'center',
    width: '85%',
    borderRadius: 10,
  },

  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -SIZES.padding * 2,
  },
  image: {
    width: '90%',
    height: 170,
    transform: [{rotate: '-15deg'}],
  },

  nameText: {
    marginTop: SIZES.padding,
    marginHorizontal: SIZES.padding,
    color: COLORS.white,
    ...FONTS.body2,
  },
  typeText: {
    marginTop: SIZES.base / 2,
    marginHorizontal: SIZES.padding,
    color: COLORS.white,
    ...FONTS.body3,
  },
  priceText: {
    marginTop: SIZES.radius,
    marginHorizontal: SIZES.padding,
    color: COLORS.white,
    ...FONTS.h1,
  },

  sizeContainer: {
    flexDirection: 'row',
    marginTop: SIZES.radius,
    marginHorizontal: SIZES.padding,
  },
  sizeText: {
    color: COLORS.white,
    ...FONTS.body3,
  },
  sizeList: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginLeft: SIZES.radius,
  },

  addBtn: {
    width: '100%',
    height: 70,
    marginTop: SIZES.base,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  addBtnText: {
    color: COLORS.white,
    ...FONTS.largeTitleBold,
  },

  selectSizeBtn: {
    width: 35,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: COLORS.white,
    borderRadius: 5,
  },
});
