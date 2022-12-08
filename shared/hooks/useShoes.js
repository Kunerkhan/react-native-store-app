import React, {useCallback, useState} from 'react';

import {TrendingShoes} from '../components/trendingShoes';

export const useShoes = ({shoesData, recentlyViewed}) => {
  const renderTrendingShoes = useCallback(
    (shoe, index) => <TrendingShoes item={shoe} />,
    [],
  );
};
