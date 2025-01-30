// cypress/integration/LoginTest.js
import LoginPage from "./LoginPage.cy";


describe('Login Functionality Test', () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    // Navigate to the login page before each test
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  });

  it('should successfully log in with valid credentials', () => {
    // Using the Page Object Model methods to interact with the login page
    loginPage.enterUsername('Admin'); // Enter username
    loginPage.enterPassword('admin123'); // Enter password
    loginPage.clickLoginButton(); // Click the login button

    // Assert that the user is redirected to the dashboard after logging in
    cy.url().should('include', '/dashboard'); // You can change this based on your application's URL structure
  });

  it('should display an error message with invalid credentials', () => {
    loginPage.enterUsername('InvalidUser'); // Enter invalid username
    loginPage.enterPassword('wrongPassword'); // Enter invalid password
    loginPage.clickLoginButton(); // Click the login button

    // Check if an error message is displayed
    cy.get('.oxd-alert-content').should('be.visible'); // Adjust the selector based on the actual error message element
  });
});
