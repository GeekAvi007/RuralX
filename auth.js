import { Client, Account } from 'appwrite';

const client = new Client();
client
  .setEndpoint('https://YOUR_APPWRITE_ENDPOINT/v1') 
  .setProject('66d72a18002a0e94353e');

const account = new Account(client);

document.addEventListener('DOMContentLoaded', () => {
    const authForm = document.getElementById('auth-form');
    const feedback = document.getElementById('feedback');
    
    authForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const name = document.getElementById('name').value;
        const password = document.getElementById('password').value;

        try {
            await account.create(email, password);

            await account.createSession(email, password);

            const loginButton = document.querySelector('.nav-links .hover-links.secondary-button');
            loginButton.textContent = name.split(' ')[0]; 
            loginButton.href = 'index.html';
            window.location.href = '/index.html';
        } catch (error) {
            console.error('Error during registration or login:', error);
            feedback.textContent = 'An error occurred: ' + error.message;
        }
    });
});
