import React from 'react'
import { useTranslation } from 'react-i18next';


function SortButtons(props) {
  const { t } = useTranslation();
  return (
    <div>
      <button onClick={props.sortAZ}>{t('sortAZ')}</button>
      <button onClick={props.sortZA}>{t('sortZA')}</button>
      <button onClick={props.sortPriceAsc}>{t('sortPriceAsc')}</button>
      <button onClick={props.sortPriceDesc}>{t('sortPriceDesc')}</button>
    </div>
  )
}

export default SortButtons