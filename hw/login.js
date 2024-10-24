 function login() {
            setTimeout(showLogin, 1000); // 3 seconds
        }

        function showLogin() {
            document.getElementById('login-container').style.display = "block"; // Show the login container
            document.getElementById('img').style.display = "none"; // Hide the image
        }