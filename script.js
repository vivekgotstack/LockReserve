const website = document.getElementById('website');
const username = document.getElementById('username');
const password = document.getElementById('password');
const form = document.getElementById('addForm');

function maskPassword(pass){
  let str = "";
  for (let i = 0; i < pass.length; i++) str += "*";
  return str;
}

function copyText(txt) {
  navigator.clipboard.writeText(txt).then(
    () => {
      document.getElementById("alert").style.display = "inline";
      setTimeout(() => {
        document.getElementById("alert").style.display = "none";
      }, 2000);
    },
    () => { alert("Clipboard copying failed"); }
  );
}

const deletePassword = (websiteKey) => {
  const data = localStorage.getItem("passwords");
  if (!data) return showPasswords();
  const arr = JSON.parse(data);
  const arrUpdated = arr.filter((e) => e.website !== websiteKey);
  localStorage.setItem("passwords", JSON.stringify(arrUpdated));
  alert(`Successfully deleted ${websiteKey}'s password`);
  showPasswords();
};

const showPasswords = () => {
  const tb = document.querySelector("table");
  const data = localStorage.getItem("passwords");
  if (!data || JSON.parse(data).length === 0) {
    tb.innerHTML = `<tr>
      <th>Website</th>
      <th>Username</th>
      <th>Password</th>
      <th>Delete</th>
    </tr>
    <tr><td colspan="4" style="text-align:center">No Data To Show</td></tr>`;
  } else {
    const arr = JSON.parse(data);
    let rows = `<tr>
      <th>Website</th>
      <th>Username</th>
      <th>Password</th>
      <th>Delete</th>
    </tr>`;
    for (let i = 0; i < arr.length; i++) {
      const el = arr[i];
      rows += `<tr>
        <td>${el.website} <img onclick='copyText(${JSON.stringify(el.website)})' src="./copy.svg" alt="Copy" width="14" height="14"></td>
        <td>${el.username} <img onclick='copyText(${JSON.stringify(el.username)})' src="./copy.svg" alt="Copy" width="14" height="14"></td>
        <td>${maskPassword(el.password)} <img onclick='copyText(${JSON.stringify(el.password)})' src="./copy.svg" alt="Copy" width="14" height="14"></td>
        <td><button class="btnsm" onclick='deletePassword(${JSON.stringify(el.website)})'>Delete</button></td>
      </tr>`;
    }
    tb.innerHTML = rows;
  }

  // clear form fields safely
  if (website) website.value = "";
  if (username) username.value = "";
  if (password) password.value = "";
};

showPasswords();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const siteVal = website.value.trim();
  const userVal = username.value.trim();
  const passVal = password.value;

  if (!siteVal || !userVal || !passVal) {
    alert("Please fill in all fields.");
    return;
  }

  const stored = localStorage.getItem("passwords");
  if (!stored) {
    const arr = [{ website: siteVal, username: userVal, password: passVal }];
    localStorage.setItem("passwords", JSON.stringify(arr));
  } else {
    const arr = JSON.parse(stored);
    arr.push({ website: siteVal, username: userVal, password: passVal });
    localStorage.setItem("passwords", JSON.stringify(arr));
  }

  alert("Password Saved");
  showPasswords();
});

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  // Toggle menu visibility
  menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      menuToggle.innerHTML = navLinks.classList.contains("active") 
          ? "&times;" 
          : "&#9776;";
  });

  // Close menu when clicking a link
  navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
          navLinks.classList.remove("active");
          menuToggle.innerHTML = "&#9776;";
      });
  });
});