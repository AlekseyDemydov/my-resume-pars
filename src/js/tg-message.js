import axios from 'axios';
import Notiflix from 'notiflix';
const TOKEN = '6997643659:AAEVVD-eSgi1sXEU_-ILq_NpfaPdUw5_pso';
const CHAT_ID = '1054670906';
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
const form = document.getElementById('rg');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  let message = '';
  // `<b>message</b>\n`
  message += `<b>name: </b>${this.name.value}\n`;
  message += `<b>phone: </b>${this.phone.value}\n`;
  message += `<b>message: </b>${this.message.value}`;

  axios
    .post(URI_API, {
      chat_id: CHAT_ID,
      parse_mode: 'html',
      text: message,
    })
    .then(res => {
      this.name.value = '';
      this.phone.value = '';
      this.message.value = '';
    })
    .catch(err => {
      Notiflix.Notify.error()('warning');
    })
    .finally(() => {
      Notiflix.Notify.success('message send');
    });
});
