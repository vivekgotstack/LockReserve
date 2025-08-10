<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>LockReserve README</title>
<style>
  .header {
    font-weight: bold;
    font-size: 2.4rem;
    text-align: center;
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 40px;
    position: relative;
    animation: flicker 2.5s infinite alternate;
    color: #00ff99;
    text-shadow:
      0 0 5px #00ff99,
      0 0 10px #00ff99,
      0 0 20px #00ff99,
      0 0 40px #00ff99,
      0 0 80px #00ff99;
  }
  .header b {
    animation: neonPulse 3s ease-in-out infinite alternate;
  }
  @keyframes neonPulse {
    0%, 100% {
      text-shadow:
        0 0 10px #00ff99,
        0 0 20px #00ff99,
        0 0 30px #00ff99,
        0 0 40px #00ff99;
      color: #00ff99;
    }
    50% {
      text-shadow:
        0 0 20px #55ffaa,
        0 0 30px #55ffaa,
        0 0 40px #55ffaa,
        0 0 50px #55ffaa;
      color: #55ffaa;
    }
  }
  @keyframes flicker {
    0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
      opacity: 1;
    }
    20%, 22%, 24%, 55% {
      opacity: 0.85;
    }
  }
  p, br {
    font-size: 1.1rem;
    line-height: 1.5;
    margin: 12px 0;
  }
  .section-title {
    font-weight: bold;
    margin: 32px 0 12px 0;
    font-size: 1.5rem;
    border-bottom: 1px solid #00ff99;
    padding-bottom: 6px;
  }
  ul {
    list-style: none;
    padding-left: 0;
    margin: 12px 0 20px 0;
  }
  ul li {
    margin: 6px 0;
  }
  .feature, .future {
    color: #00cc77;
  }
  a {
    color: #00ff99;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
</style>
</head>
<body>

<div style="
  background: #1a1a1a; 
  color: #00ff99; 
  padding: 30px 40px; 
  font-family: 'Consolas', 'Courier New', monospace; 
  font-size: 1.3rem; 
  line-height: 1.6; 
  border-radius: 10px; 
  max-width: 800px; 
  margin: 40px auto; 
  user-select: none;
  box-shadow: 0 0 15px #00ff99aa;
">

  <div class="header">
    🔐 <b>LockReserve</b><br>
    <div style="font-style: italic; font-size: 1.2rem; margin-bottom: 30px; color: #99ffbb;">
    Your Forever Password Vault
  </div>
  </div>

  <div style="margin-bottom: 20px;">
    <div style="font-weight: bold; font-size: 1.5rem; color: #55ffaa; margin-bottom: 8px; border-bottom: 2px solid #00cc77; padding-bottom: 4px;">
      🌟 Overview
    </div>
    LockReserve is a sleek and secure platform for managing your passwords, usernames, and site names in one place. With its easy-to-use interface, LockReserve ensures that your credentials are always accessible yet safely stored until you choose to delete them. No unnecessary clutter—just your passwords, forever safe.
  </div>

  <div style="margin-bottom: 20px;">
    <div style="font-weight: bold; font-size: 1.5rem; color: #55ffaa; margin-bottom: 8px; border-bottom: 2px solid #00cc77; padding-bottom: 4px;">
      💼 Features at a Glance
    </div>
    ✨ Secure Storage: Your credentials are safely kept and accessible anytime.<br>
    ✨ User-Friendly Interface: Minimalist design for maximum convenience.<br>
    ✨ Easy Copy: Copy any credential with a single click.<br>
    ✨ Forever Yours: Data persists until deleted with a simple button click.<br>
    ✨ Control at Your Fingertips: Add, view, and delete entries effortlessly.
  </div>

  <div style="margin-bottom: 20px;">
    <div style="font-weight: bold; font-size: 1.5rem; color: #55ffaa; margin-bottom: 8px; border-bottom: 2px solid #00cc77; padding-bottom: 4px;">
      🎨 Interface Highlights
    </div>
    Minimalistic yet functional design.<br>
    A clean layout that lets you focus on what matters—your credentials.<br><br>
    🔳 Dashboard: View all stored credentials in a neatly organized list.<br>
    🖱️ Copy Button: Copy passwords or usernames instantly.<br>
    ❌ Delete Button: Remove entries with just one click for complete control.
  </div>

  <div style="margin-bottom: 20px;">
    <div style="font-weight: bold; font-size: 1.5rem; color: #55ffaa; margin-bottom: 8px; border-bottom: 2px solid #00cc77; padding-bottom: 4px;">
      🚀 Getting Started
    </div>
    Follow these steps to set up and explore LockReserve:<br><br>
    <b>Clone the Repository:</b><br>
    <code style="background:#002200; padding:4px 8px; border-radius:4px;">git clone https://github.com/Coderviveknigam/LockReserve.git</code><br><br>
    <b>Open in Browser:</b><br>
    Simply open the <code style="background:#002200; padding:4px 8px; border-radius:4px;">index.html</code> file in your favorite browser, and you’re good to go!
  </div>

  <div style="margin-bottom: 20px;">
    <div style="font-weight: bold; font-size: 1.5rem; color: #55ffaa; margin-bottom: 8px; border-bottom: 2px solid #00cc77; padding-bottom: 4px;">
      🌱 Future Possibilities
    </div>
    🔒 Encryption Features: Add security layers like password encryption.<br>
    📱 Cross-Platform Access: Expand usability to mobile devices.<br>
    🤖 Password Insights: Integrate password strength indicators and suggestions.<br>
    👥 Collaboration Mode: Securely share credentials with trusted contacts.
  </div>

  <div style="margin-bottom: 20px;">
    <div style="font-weight: bold; font-size: 1.5rem; color: #55ffaa; margin-bottom: 8px; border-bottom: 2px solid #00cc77; padding-bottom: 4px;">
      ✨ Visual Sneak Peek
    </div>
    Your credentials, always accessible and neatly managed.
  </div>

  <div style="margin-bottom: 20px;">
    <div style="font-weight: bold; font-size: 1.5rem; color: #55ffaa; margin-bottom: 8px; border-bottom: 2px solid #00cc77; padding-bottom: 4px;">
      💡 Why LockReserve?
    </div>
    In a world full of passwords, LockReserve provides simplicity, security, and accessibility in one sleek package. Say goodbye to forgotten credentials and hello to effortless management.
  </div>

  <div style="margin-bottom: 10px;">
    <div style="font-weight: bold; font-size: 1.5rem; color: #55ffaa; margin-bottom: 8px; border-bottom: 2px solid #00cc77; padding-bottom: 4px;">
      🔗 Connect with the Creator
    </div>
    💼 Name: Vivek Nigam<br>
    💌 Email: <a href="mailto:vivekni1224@gmail.com" style="color:#00ff99;">vivekni1224@gmail.com</a><br>
    🌐 LinkedIn: <a href="https://www.linkedin.com/in/randomvivek/" target="_blank" style="color:#00ff99;">https://www.linkedin.com/in/randomvivek/</a>
  </div>

  <div style="text-align:center; margin-top: 30px; font-weight:bold; font-size: 1.2rem;">
    🌟 LockReserve: Where Your Passwords Feel at Home. 🌟
  </div>
</div>

</body>
</html>
