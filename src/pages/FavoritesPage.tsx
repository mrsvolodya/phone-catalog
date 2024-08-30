import { ProductList } from '../components/ProductList/ProductList';
import { useContext } from 'react';
import { LanguageContext } from '../store/LanguageProvider';

export const FavoritesPage = () => {
  const { t } = useContext(LanguageContext);
  const title = t('favorites');

  return <ProductList title={title} />;
};
