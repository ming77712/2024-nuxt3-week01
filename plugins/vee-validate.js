import { defineRule, configure } from 'vee-validate';
import { required, min, email } from '@vee-validate/rules';

import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';

export default defineNuxtPlugin((nuxtApp) => {
  defineRule('required', required);
  defineRule('min', min);
  defineRule('email', email);

  defineRule('isPhone', (value) => {
    const phoneReg = /^09\d{8}$/;
    return phoneReg.test(value) ? true : '手機號碼格式錯誤';
  });

  configure({ generateMessage: localize({ zh_TW: zhTW }) });

  setLocale('zh_TW');
});
