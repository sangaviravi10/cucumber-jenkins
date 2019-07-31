$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Scenario/Scenario2.feature");
formatter.feature({
  "name": "Login Functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Login with multiple inputs-TestMeApp",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user opens testmeapp in the browser",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters the username as \"\u003cuserName\u003e\" and password  as \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks the login button",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "userName",
        "",
        "password"
      ]
    },
    {
      "cells": [
        "Mercury",
        "",
        "password123"
      ]
    },
    {
      "cells": [
        "Merc",
        "",
        "password456"
      ]
    }
  ]
});
formatter.background({
  "name": "displays hi",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "displays hi message",
  "keyword": "Given "
});
formatter.match({
  "location": "Scen2.displays_hi_message()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with multiple inputs-TestMeApp",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user opens testmeapp in the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Scen2.user_opens_testmeapp_in_the_browser()"
});
formatter.result({
  "error_message": "java.lang.IllegalStateException: The path to the driver executable must be set by the webdriver.chrome.driver system property; for more information, see https://github.com/SeleniumHQ/selenium/wiki/ChromeDriver. The latest version can be downloaded from http://chromedriver.storage.googleapis.com/index.html\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:847)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:125)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:35)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:156)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:346)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:91)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat Stepdef.Scen2.user_opens_testmeapp_in_the_browser(Scen2.java:21)\r\n\tat ✽.user opens testmeapp in the browser(src/test/resources/Scenario/Scenario2.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user enters the username as \"Mercury\" and password  as \"password123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Scen2.user_enters_the_username_as_and_password_as(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks the login button",
  "keyword": "Then "
});
formatter.match({
  "location": "Scen2.user_clicks_the_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "displays hi",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "displays hi message",
  "keyword": "Given "
});
formatter.match({
  "location": "Scen2.displays_hi_message()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with multiple inputs-TestMeApp",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user opens testmeapp in the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Scen2.user_opens_testmeapp_in_the_browser()"
});
formatter.result({
  "error_message": "java.lang.IllegalStateException: The path to the driver executable must be set by the webdriver.chrome.driver system property; for more information, see https://github.com/SeleniumHQ/selenium/wiki/ChromeDriver. The latest version can be downloaded from http://chromedriver.storage.googleapis.com/index.html\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:847)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:125)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:35)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:156)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:346)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:91)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat Stepdef.Scen2.user_opens_testmeapp_in_the_browser(Scen2.java:21)\r\n\tat ✽.user opens testmeapp in the browser(src/test/resources/Scenario/Scenario2.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user enters the username as \"Merc\" and password  as \"password456\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Scen2.user_enters_the_username_as_and_password_as(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks the login button",
  "keyword": "Then "
});
formatter.match({
  "location": "Scen2.user_clicks_the_login_button()"
});
formatter.result({
  "status": "skipped"
});
});