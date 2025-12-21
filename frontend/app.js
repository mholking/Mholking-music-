/* =====================
   TEST BACKEND
===================== */
const apiResult = document.getElementById("apiResult");
const testApiBtn = document.getElementById("testApiBtn");

if (testApiBtn) {
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
}

/* =====================
   SIGNUP FORM
===================== */
const signupForm = document.getElementById("signupForm");

if (signupForm) {
  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(signupForm);
    const body = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const data = await res.json();
      alert(data.message);
    } catch (err) {
      alert("❌ Signup failed");
    }
  });
}

/* =====================
   LOGIN FORM
===================== */
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(loginForm);
    const body = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const data = await res.json();
      alert(data.message);
    } catch (err) {
      alert("❌ Login failed");
    }
  });
  }
