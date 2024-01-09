import axios from 'axios';
import { ReactNode } from 'react';

// ======= Get Product list ===================
export const SendGridSubmitCall = (htmlTemplate: ReactNode) => {
  return axios
    .post(
      'https://api.sendgrid.com/v3/mail/send',
      {
        personalizations: [
          { to: [{ email: import.meta.env.VITE_SANDGRID_TO_EMAIL ?? '' }] },
        ],
        from: {
          email: import.meta.env.VITE_SANDGRID_FROM_EMAIL ?? '',
        },
        subject: 'Email from Attorney contact Page',
        content: [
          {
            type: 'text/HTML',
            value: `${htmlTemplate}`,
          },
        ],
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${
            import.meta.env.VITE_SENDGRID_API_KEY ?? ''
          }`,
        },
      }
    )
    .then(function (response) {
      if (
        response.status === 200 ||
        response.status === 201 ||
        response.status === 202
      ) {
        return true;
      } else {
        return false;
      }
    })
    .catch(function () {
      return false;
    });
};
