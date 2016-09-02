import fetch from 'isomorphic-fetch';

export default function checkHelloWorld() {
  return new Promise((resolve, reject) => {
    fetch('/api/helloworld')
    .then(response => {
      resolve(response);
    }).catch(() => reject());
  });
}
