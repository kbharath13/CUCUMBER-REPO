package steps;

import org.openqa.selenium.By;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import drivers.DriverInstance;

public class LoginSteps  extends DriverInstance {
	
	//WebDriver driver;
	
@Given("user should navigate to the application login")
public void userShouldNavigateToTheApplication() {
		
		
	    
	}

	@Given("user clicks on the login link")
	public void userClicksOnTheLoginLink() {
		driver.findElement(By.xpath("//span[text()='Login']")).click();
	   
	}

	/*
	 * @Given("user enters the username as ortoni") public void
	 * userEntersTheUsernameAsOrtoni() {
	 * driver.findElement(By.xpath("//input[@id='mat-input-0']")).sendKeys("ortoni")
	 * ;
	 * 
	 * }
	 * 
	 * @Given("user enters the password as pass1234") public void
	 * userEntersThePasswordAsPass() {
	 * driver.findElement(By.cssSelector("#mat-input-1")).sendKeys("pass1234");
	 * 
	 * }
	 */

	@When("user click the login button")
	public void userClickTheLoginButton() {
		driver.findElement(By.xpath("//button[contains(@class,'mat-focus-indicator mat-raised-bu')]")).click();
	    
	}

	@Then("login should be successful")
	public void loginShouldBeSuccessful() {
		String value=driver.findElement(By.xpath("//button[contains(@class,'mat-focus-indicator mat-button mat-button-base')][@tabindex='0']")).getText();
	    System.out.println(value);
	}
	
//	@Given("user enters the username as koushik")
//	public void userEntersTheUsernameAsKoushik() {
//		
//		
//	driver.findElement(By.xpath("//input[@id='mat-input-0']")).sendKeys("koushik");
//		    
//	   
//	}

	/*
	 * @Given("user enters the password as pass12") public void
	 * userEntersThePasswordAsPass12() {
	 * driver.findElement(By.cssSelector("#mat-input-1")).sendKeys("pass12");
	 * 
	 * }
	 */
	@Then("login should be failed")
	public void loginShouldBeFailed() {
		String value1= driver.findElement(By.cssSelector("mat-error[role='alert']")).getText();
		System.out.println(value1);
	    
	}
	
	@Given("user enters the username as {string}")
	public void userEntersTheUsernameAs(String username) {
		driver.findElement(By.xpath("//input[@id='mat-input-0']")).sendKeys(username);
	 
	}

	@Given("user enters the password as {string}")
	public void userEntersThePasswordAs(String pass) {
		driver.findElement(By.cssSelector("#mat-input-1")).sendKeys(pass);
	    
	}


	

}



