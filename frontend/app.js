const apiResult = document.getElementById("apiResult");
const testApiBtn = document.getElementById("testApiBtn");

// Test backend connection
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

// Signup form
const signupForm = document.getElementById("signupForm");

if (signupForm) {
  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(signupForm);
    const body = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();
      alert(data.message);
    } catch (err) {
      alert("Signup failed ❌");
    }
  });
}
