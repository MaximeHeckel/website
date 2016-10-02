import fetch from 'isomorphic-fetch';

const host = process.env.HOSTNAME || '';

export default function contact(data) {
  return new Promise((resolve, reject) => {
    fetch(`${host}/api/v1/contact`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => {
      resolve(response);
    }).catch(() => reject());
  });
}
