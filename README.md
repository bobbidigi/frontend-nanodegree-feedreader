# Project Overview

In this project we were given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. I created six test suites to check multiple aspects of the RSS reader app.

## Test suites
1. RSS feeds
* Verifies each feed has a URL and it is not empty.
* Verifies each feed has a name and it is not empty.
2. The menu
* Verifies that the feed selection menu is hidden by default
* Verifies that the feed menu is displayed when menu clicked
3. Initial entries
* Verifies that at least one feed is displayed on initial page load
4. New feed selection
* Verifies that page content is different when another feed is selected.

## Execution
1. Fork this repository.
2. [Jasmine](https://jasmine.github.io/) is included in the repository.
3. Open index.html in a browser of your choice.
5. The existing tests will be visible in the browser.
6. To write additional tests navigate to Jasmine>spec>feedreader.js

## References Used
*[Jasmine 2.1 Documentation](https://jasmine.github.io/2.1/introduction)