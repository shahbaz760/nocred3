import axios from 'axios';
import { ReactNode } from 'react';

// ======= Get Product list ===================
export const sendGridSubmitCall = async (html: ReactNode, subject: string) => {
  return axios
    .post(
      `${import.meta.env.VITE_BACKEND_BASE_URL}/send-email`,
      {
        email: import.meta.env.VITE_SANDGRID_TO_EMAIL ?? '',
        subject,
        html,
      },
      {
        headers: {
          'Content-Type': 'application/json',
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
