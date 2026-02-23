

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
getElementById selects a single element by its unique id.
getElementsByClassName selects multiple elements by class name and returns an HTMLCollection.
querySelector selects the first matching element using a CSS selector, while querySelectorAll selects all matching elements and returns a NodeList.

### 2. How do you create and insert a new element into the DOM?
You can create a new element using document.createElement().
Then you can add content or attributes to it.
Finally, insert it into the DOM using methods like appendChild() or append().
### 3. What is Event Bubbling? And how does it work?
Event Bubbling is a process where an event starts from the target element and then propagates upward to its parent elements.
When an event occurs on a child element, it first runs on that element and then bubbles up to its ancestors.

### 4. What is Event Delegation in JavaScript? Why is it useful?
Event Delegation is a technique where a parent element handles events for its child elements using event bubbling.
Instead of adding event listeners to multiple child elements, we add a single listener to the parent.
It is useful because it improves performance and works for dynamically added elements.

### 5. What is the difference between preventDefault() and stopPropagation() methods?
preventDefault() stops the default browser behavior of an event, such as preventing a form from submitting.
stopPropagation() stops the event from bubbling up to parent elements.
In short, preventDefault() blocks default action, while stopPropagation() blocks event propagation.

---


