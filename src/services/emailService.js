import http from './httpService';

export async function sendPass(mail, templateId) {
  const data = await http.post('/api/mail/recovery', {
    mail,
    templateId
  });
  return data;
}

export async function sendMail(to, body, templateId) {
  const data = await http.post('/api/mail', { to, body, templateId });
  return data;
}

export default {
  sendPass,
  sendMail
};
