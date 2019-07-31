package Stepdef;

import org.junit.runner.RunWith;

import cucumber.api.junit.Cucumber;
import cucumber.api.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/resources/Scenario/Scenario2.feature",plugin="json:target\\jsonreport.json")
public class Runner {
	

}
