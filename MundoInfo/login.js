function changeTab(tabName) {
    if (tabName === 'login') {
        document.getElementById('loginForm').style.display = 'block';
        document.getElementById('signupForm').style.display = 'none';
    } else if (tabName === 'signup') {
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('signupForm').style.display = 'block';
    }
}
