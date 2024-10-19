Feature: Bookcart application demo

  Scenario Outline: Add a product to the cart
    Given user should navigate to the application
    And user should login as "<username>" and "<password>"
    And user search a "book"
    When user added the book to the cart
    Then the cart badge should be updated

    Examples: 
      | username | password |     book    |
      | ortoni   | pass1234 |     Roomies |
      | ortonikc | pass1234 |     Slayer  |
