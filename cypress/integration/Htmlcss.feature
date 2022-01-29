Feature: Test https://www.w3.org/standards/webdesign/htmlcss Webpage

    Validate status code of webpage and its links

    Scenario: When accessing htmlcss Access page, status code is 200
        When I navigate to htmlcss page
        Then The response code is 200

    Scenario: Find all valid links with status code 2xx & 3xx
        When I navigate to htmlcss page
        Then I verify all valid links have response code 200

    Scenario: Find all links with status code 4xx
        When I navigate to htmlcss page
        Then I verify 1 link with status code 4xx

