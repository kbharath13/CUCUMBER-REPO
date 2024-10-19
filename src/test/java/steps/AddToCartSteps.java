package steps;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import drivers.DriverInstance;

public class AddToCartSteps extends DriverInstance {
	
	//WebDriver driver;
	
	@Given("user should navigate to the application")
	public void userShouldNavigateToTheApplication() {
		
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\USER\\Desktop\\Seleniumlearning\\drivers/chromedriver.exe");
		driver=new ChromeDriver();
		driver.get("https://bookcart.azurewebsites.net/");
		driver.manage().window().maximize();
	}
	
	@Given("user should login as {string} and {string}")
	public void userShouldLoginAsAnd(String username, String password) {
		driver.findElement(By.xpath("//span[text()='Login']")).click();
		driver.findElement(By.xpath("//input[@id='mat-input-0']")).sendKeys(username);
		driver.findElement(By.cssSelector("#mat-input-1")).sendKeys(password);
		driver.findElement(By.xpath("//button[contains(@class,'mat-focus-indicator mat-raised-bu')]")).click();


		
	    
	    
	}

//	@Given("user search a {String}")
//	public void userSearchA(String book) {
//		driver.findElement(By.xpath("//input[@placeholder='Search books or authors']")).sendKeys();
//		
//		
//		
//	    
//	    
//	}
//
//	@When("user added the book to the cart")
//	public void userAddedTheBookToTheCart() {
//	    
//	    
//	}
//
//	@Then("the cart badge should be updated")
//	public void theCartBadgeShouldBeUpdated() {
//	    
//	    
//	}



}
