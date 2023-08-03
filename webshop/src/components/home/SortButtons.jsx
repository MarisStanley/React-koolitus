import React from 'react'
import { useTranslation } from 'react-i18next';
import Button from 'react-bootstrap/esm/Button';


function SortButtons(props) {
  const { t } = useTranslation();
  return (
    <div>
      <Button onClick={props.sortAZ}>{t('sortAZ')}</Button>
      <Button onClick={props.sortZA}>{t('sortZA')}</Button>
      <Button onClick={props.sortPriceAsc}>{t('sortPriceAsc')}</Button>
      <Button onClick={props.sortPriceDesc}>{t('sortPriceDesc')}</Button>
    </div>
  )
}

export default SortButtons