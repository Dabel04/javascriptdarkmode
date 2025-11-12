 const loginForm = document.getElementById('loginForm');
    const loginPage = document.getElementById('loginPage');
    const dashboardPage = document.getElementById('dashboardPage');
    const errorMsg = document.getElementById('errorMsg');
    const toggleBtn = document.getElementById('toggleModeBtn');
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('mainContent');
    const logoutBtn = document.getElementById('logoutBtn');

    const validUsername = "makecodelit@gmail.com";
    const validPassword = "ilovecoding123";

    // Handle login
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      if (username === validUsername && password === validPassword) {
        loginPage.style.display = 'none';
        dashboardPage.style.display = 'block';
      } else {
        errorMsg.style.display = 'block';
      }
    });

  // Handle dark/light mode
  let isDarkMode = false; //light mode
  toggleBtn.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    document.body.style.backgroundColor = isDarkMode ? '#212529' : '#f5f5f5';
    sidebar.classList.toggle('bg-dark');
      sidebar.classList.toggle('text-white');
      mainContent.style.backgroundColor = isDarkMode ? '#343a40' : '#fff';
      mainContent.style.color = isDarkMode ? '#fff' : '#000';
      toggleBtn.textContent = isDarkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode';
    });

    // Handle logout
    logoutBtn.addEventListener('click', () => {
      dashboardPage.style.display = 'none';
      loginPage.style.display = 'block';
      loginForm.reset();
      errorMsg.style.display = 'none';
    });
   