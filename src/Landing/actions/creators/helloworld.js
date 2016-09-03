import fetch from 'isomorphic-fetch';

const host = process.env.HOSTNAME || '';

export default function checkHelloWorld() {
  return new Promise((resolve, reject) => {
    fetch(`${host}/api/helloworld`)
    .then(response => {
      resolve(response);
    }).catch(() => reject());
  });
}
