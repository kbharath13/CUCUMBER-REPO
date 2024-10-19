$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src\\test\\java\\Features\\login.feature");
formatter.feature({
  "name": "BookCart application demo",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Login should be success",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@reg"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.write("Testing starts");
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user should navigate to the application login",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.userShouldNavigateToTheApplication()"
});
formatter.result({
  "status": "passed"
});
formatter.write("Testing over");
formatter.embedding("image/png", "embedded0.png");
formatter.afterstep({
  "status": "passed"
});
formatter.write("Testing starts");
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the login link",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.userClicksOnTheLoginLink()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[text()\u003d\u0027Login\u0027]\"}\n  (Session info: chrome\u003d109.0.5414.168)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DELL\u0027, ip: \u0027192.168.1.10\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 109.0.5414.168, chrome: {chromedriverVersion: 109.0.5414.74 (e7c5703604da..., userDataDir: C:\\Users\\USER\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:54438}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: b1f2280959333ee3eaa1579c63fa0d0d\n*** Element info: {Using\u003dxpath, value\u003d//span[text()\u003d\u0027Login\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat steps.LoginSteps.userClicksOnTheLoginLink(LoginSteps.java:24)\r\n\tat ✽.user clicks on the login link(src\\test\\java\\Features\\login.feature:8)\r\n",
  "status": "failed"
});
formatter.write("Testing over");
formatter.embedding("image/png", "embedded1.png");
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "skipped"
});
formatter.step({
  "name": "user enters the username as \"ortoni\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.userEntersTheUsernameAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.afterstep({
  "status": "skipped"
});
formatter.beforestep({
  "status": "skipped"
});
formatter.step({
  "name": "user enters the password as \"pass1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.userEntersThePasswordAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.afterstep({
  "status": "skipped"
});
formatter.beforestep({
  "status": "skipped"
});
formatter.step({
  "name": "user click the login button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.userClickTheLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.afterstep({
  "status": "skipped"
});
formatter.beforestep({
  "status": "skipped"
});
formatter.step({
  "name": "login should be successful",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.loginShouldBeSuccessful()"
});
formatter.result({
  "status": "skipped"
});
formatter.afterstep({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});