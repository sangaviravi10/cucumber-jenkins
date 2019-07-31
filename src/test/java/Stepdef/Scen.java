package Stepdef;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class Scen {
	
	@Given("user opens testmeapp")
	public void user_opens_testmeapp() {
	   System.out.println("Open TestMeApp");
	}
	@Then("user enters the username {string} and password {string}")
	public void user_enters_the_username_and_password(String string, String string2) {
		System.out.println("USer enters username and password");
	}
	@Then("Validate the login page")
	public void validate_the_login_page() {
		System.out.println("Verify login page");

	}
	@Given("user selects a product")
	public void user_selects_a_product() {
		System.out.println("product is selected");
	}

	@Then("user added the product to the cart")
	public void user_added_the_product_to_the_cart() {
		System.out.println("selected product is added to the cart");
	}
	@Given("displays welcome message")
	public void display(){
		System.out.println("WELCOME");

	}


}
