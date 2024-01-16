import axios from 'axios';
import { ReactNode } from 'react';

// ======= Get Product list ===================
export const sendGridSubmitCall = async (html: ReactNode, subject: string) => {
  return axios
    .post(
      `${import.meta.env.VITE_BACKEND_BASE_URL}/send-email`,
      {
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
        response.status === 202 ||
        response.status === 204
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
