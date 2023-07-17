/*
👍👎 Create a Like Button with Changing States

 Like Button States:
❤️ The heart and 🔄 spinner icons are provided for convenience.
 - Handling of various states is the focus, not pixel perfection.
 - Use #f00 for red and #888 for gray.

📜 Requirements:
 - In the button's default state, clicking it sends a request to the back-end API and enters the loading state. The API has a 50% chance of succeeding/failing.
 - If the request is successful, the button changes to the "Liked" state.
 - Otherwise, it returns to the "Default"/"Hovered" state depending on cursor position, and shows the API error message below the button.
 - Clicking on a "Liked" button triggers the reverse flow.

📝 Submission API:
 - URL: https://www.greatfrontend.com/api/questions/like-button
 - HTTP Method: POST
 - Content Type: json
 - Parameters:
   action: A string of either 'like' or 'unlike' depending on the desired action.

📬 Response:
 - The API has a 50% chance of succeeding (HTTP 204) or failing (HTTP 500) for easy testing.
 - Returns a JSON payload depending on the outcome:

 - Success: { message: 'Success!' }
 - Failure: { error: 'Unknown error during attempted {{action}}. Please try again later.!' }

- This question was asked during an interview at Amazon.

 */
