Feature: Login Functionality


@login 
Scenario Outline: Login with multiple inputs-TestMeApp
Given  user opens testmeapp 
Then   user enters the username "<userName>" and password "<password>"
Then   Validate the login page

Examples: 
|userName||password|
|Mercury||password123|
|Merc||password456|

@regression
Scenario:  purchase a product
Given  user selects a product
Then user added the product to the cart


