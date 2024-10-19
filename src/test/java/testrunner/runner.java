package testrunner;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(
		features = {"src/test/java/Features/"},
		dryRun=!true,
	    glue= {"steps","hooks"},
	    snippets=SnippetType.CAMELCASE,
	    monochrome=true,
	    plugin = {"pretty",
	    		"html:reports",
	    		"json:reports/result.json",
	    		"junit:reports/result.xml"},
	    tags = {"@reg"}
		)

public class runner extends AbstractTestNGCucumberTests {

}
