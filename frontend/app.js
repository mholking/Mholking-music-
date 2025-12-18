document.getElementById('testApiBtn').addEventListener('click', async () => {
  try {
    const res = await fetch('http://localhost:5000/api/test');
    const data = await res.json();
    document.getElementById('apiResult').innerText = JSON.stringify(data, null, 2);
  } catch (e) {
    document.getElementById('apiResult').innerText = 'Error connecting to backend';
  }
});
