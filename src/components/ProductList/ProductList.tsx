import { useContext, useEffect, useRef } from 'react';
import { BreadCrumbs } from '../BreadCrumbs/BreadCrumbs';
import { CardsContainer } from '../CardsContainer';
import style from './ProductList.module.scss';
import { StateContext } from '../../store/StateProvider';
import classNames from 'classnames';
import { LanguageContext } from '../../store/LanguageProvider';

type Props = {
  title: string;
};

export const ProductList: React.FC<Props> = ({ title }) => {
  const { favorites, activeMenu, handleResize } = useContext(StateContext);
  const element = useRef<HTMLDivElement>(null);
  const { t } = useContext(LanguageContext);

  useEffect(() => {
    handleResize(element);
  }, [favorites, handleResize]);

  return (
    <div
      ref={element}
      className={classNames(style.favorites, {
        [style.favorites__activeAsideMenu]: activeMenu,
      })}
    >
      <div className={style.favorites__container}>
        <BreadCrumbs />
        <h1 className={style.favorites__title}>{title}</h1>

        <p className={style.favorites__items}>
          {favorites.length === 1
            ? `${favorites.length} ${t('item')}`
            : favorites.length <= 4
              ? `${favorites.length} ${t('items')}`
              : `${favorites.length} ${t("item's")}`}
        </p>

        <CardsContainer gadgets={favorites} />
      </div>
    </div>
  );
};
