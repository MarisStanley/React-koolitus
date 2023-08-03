import React from 'react'
import { useTranslation } from 'react-i18next';

function NotFound() {
    const { t } = useTranslation();
  return (
    <div className='not-found'>{t('page-not-found')}</div>
  )
}

export default NotFound