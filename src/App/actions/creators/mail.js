import fetch from 'isomorphic-fetch';

export default function contact(data) {
  return new Promise((resolve, reject) => {
    fetch('/api/v1/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => {
      resolve(response);
    }).catch((err) => {
      console.log(err)
      reject()
    });
  });
}
