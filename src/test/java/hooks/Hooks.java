package hooks;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.AfterStep;
import cucumber.api.java.Before;
import cucumber.api.java.BeforeStep;
import drivers.DriverInstance;

public class Hooks extends DriverInstance {
	
	

	@Before
	public void beforescenario( Scenario scenario) {
		
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\USER\\Desktop\\Seleniumlearning\\drivers/chromedriver.exe");
		driver=new ChromeDriver();
		driver.get("https://bookcart.azurewebsites.net/");
		driver.manage().window().maximize();
	
//		 String name = scenario.getName();
//		 System.out.println("Scenario name: "+name);
//		
	}
	@After
	public void afterscenario(Scenario scenario) {
		driver.quit();
//	boolean failed =	scenario.isFailed();
//	System.out.println("is failed? -- "+failed);
//		
	}
	
	@BeforeStep
	public void beforesteps(Scenario scenario) { 
		scenario.write("Testing starts");
	}
	
	@AfterStep
	public void afterstep(Scenario scenario) {
		scenario.write("Testing over");
	byte[] screenshot =	driver.getScreenshotAs(OutputType.BYTES);
	scenario.embed(screenshot, "image/png");
	}
	

	
}
