Feature: Test https://www.w3.org/standards/badpage Webpage

    Validate status code of webpage and its links

    Scenario: When accessing bad page, status code is 404
        When I navigate to Bad page
        Then The response code is 404

    Scenario: Find all valid links with status code 2xx & 3xx
        When I navigate to Bad page
        Then I verify all valid links have response code 200

    Scenario: Find all links with status code 4xx
        When I navigate to Bad page
        Then I verify 1 link with status code 4xx
