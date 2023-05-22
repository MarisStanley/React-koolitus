import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { t } from 'i18next';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9383nzc', 'template_m97uidf', form.current, 'TI6Ky8XgoxhjdOHSQ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>{t('name')}</label>
      <input type="text" name="from_name" />
      <label>{t('email')}</label>
      <input type="email" name="from_email" />
      <label>{t('phone')}</label>
      <input type="text" name="from_phone" />
      <label>{t('message')}</label>
      <textarea name="message" />
      <input type="submit" value={t("send")} />
    </form>
  );
};

