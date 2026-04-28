const authContainer = document.getElementById('auth-buttons');
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    if (isLoggedIn === 'true') {
        authContainer.innerHTML = `
            <a href="dashboard.html" style="text-decoration: none;">
                <button class="btn" style="margin-right: 10px;">Go to Dashboard</button>
            </a>
            <button class="btn btn-logout" onclick="logout()">Log Out</button>
        `;
    }

    function logout() {
        localStorage.removeItem('isLoggedIn'); 
        window.location.reload(); 
    }
    document.getElementById('loginForm').onsubmit = function(e) {
        e.preventDefault();
        localStorage.setItem('isLoggedIn', 'true'); 
        window.location.href = 'dashboard.html'; 
    };
    function logout() {
        localStorage.removeItem('isLoggedIn');
        window.location.href = 'home.html';
    }
    