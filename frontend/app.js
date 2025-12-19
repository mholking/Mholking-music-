const apiResult = document.getElementById("apiResult");
const testApiBtn = document.getElementById("testApiBtn");

testApiBtn.addEventListener("click", async () => {
  apiResult.textContent = "Testing backend...";

  try {
    const res = await fetch("http://localhost:5000/api/test");
    const data = await res.json();
    apiResult.textContent = JSON.stringify(data, null, 2);
  } catch (err) {
    apiResult.textContent = "❌ Backend not reachable";
  }
});
