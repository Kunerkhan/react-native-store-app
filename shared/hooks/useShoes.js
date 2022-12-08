import {useCallback, useState} from 'react';

export const useShoes = () => {
  const [isOpenAddToBagModal, setIsOpenAddToBagModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');

  const onSelectItem = useCallback(item => {
    setSelectedItem(item);
  }, []);

  const onSelectSize = useCallback(size => {
    setSelectedSize(size);
  }, []);

  const onOpen = useCallback(() => {
    setIsOpenAddToBagModal(true);
  }, []);

  const onClose = useCallback(() => {
    setSelectedItem(null);
    setSelectedSize('');
    setIsOpenAddToBagModal(false);
  }, []);

  return {
    isOpenAddToBagModal,
    selectedItem,
    selectedSize,
    onOpen,
    onClose,
    onSelectSize,
    onSelectItem,
  };
};
