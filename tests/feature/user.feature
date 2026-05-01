Feature: User Registration and Login

  Scenario: Register and login with valid credentials
    Given I open the homepage
    When I register a new user
    Then I should see registration success message
    When I logout
    And I login with the same user
    Then I should see user dashboard
