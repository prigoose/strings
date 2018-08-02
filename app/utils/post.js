export default function post(url = ``, string) {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ string }),
  })
    .then(response => response) // nothing to parse?
    .catch(error => console.error(`Fetch Error =`, error));
}
