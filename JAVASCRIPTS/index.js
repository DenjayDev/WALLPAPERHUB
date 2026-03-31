// window.alert("You are welcome to our wallpaperhub website.");
// 1. Select the main container that will slide
const mainContainer = document.querySelector('.mainSignIn');

// 2. Select the toggle buttons using the IDs from your HTML
// Note: If you have two elements with the same ID, JS picks the first one.
const signUpToggle = document.getElementById('signUp-btn');
const signInToggle = document.getElementById('signIn-btn');

if (mainContainer && signUpToggle && signInToggle) {
    // 3. Add the logic to slide to the "Sign Up" side
    signUpToggle.addEventListener('click', (e) => {
        // This prevents the page from refreshing/submitting
        e.preventDefault();
        mainContainer.classList.add("active");
    });

    // 4. Add the logic to slide back to the "Sign In" side
    signInToggle.addEventListener('click', (e) => {
        e.preventDefault();
        mainContainer.classList.remove("active");
    });
}