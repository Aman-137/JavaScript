/*
🛠️ **Building a Tabs Component with Active Tab and One Panel Display**

**Requirements:**

-  Clicking on a tab makes it the active tab.

-  Add a visual indication for the active tab to differentiate it from the non-active tabs, such as blue text color.

-  Only one panel's contents should be displayed at all times, which corresponds to the active tab.

**Notes:**

-  Functionality is the main focus, not styling. No custom CSS is necessary except for highlighting the active tab.

-  Markup modifications are allowed, such as adding **`id`**s or data attributes, and client-side rendering may be used instead.

-  Consider implementing user experience improvements to earn bonus credit during interviews.

- This question was asked during an interview at Airbnb.
*/

import "./styles.css";
import Tabs from "./Tabs";

export default function App() {
  return <Tabs />;
}
