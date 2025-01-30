// cypress/pageObjects/LoginPage.js

class LoginPage {
  // Define the selectors for username, password, and login button
  get usernameField() {
    cy.wait(4000);
    return cy.get('input[name="username"]');
  }

  get passwordField() {
    return cy.get('input[name="password"]');
  }

  get loginButton() {
    return cy.get('button[type="submit"]');
  }

  // Method for entering the username
  enterUsername(username) {
    this.usernameField.clear().type(username);
  }

  // Method for entering the password
  enterPassword(password) {
    this.passwordField.clear().type(password);
  }

  // Method for clicking the login button
  clickLoginButton() {
    this.loginButton.click();
  }
}

export default LoginPage;
