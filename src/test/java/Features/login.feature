Feature:BookCart application demo


@reg 
Scenario:Login should be success

Given user should navigate to the application login
And user clicks on the login link
And user enters the username as "ortoni"
And user enters the password as "pass1234" 
When user click the login button
Then login should be successful


Scenario:Login should be failed

Given user should navigate to the application
And user clicks on the login link
And user enters the username as "koushik"
And user enters the password as "pass12" 
When user click the login button
Then login should be failed






