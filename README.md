## What is JSX, and why is it used?

* JSX stands for JavaScript XML.
* It allows developers to write HTML-like code inside JavaScript.
* Makes UI code easier to read and understand.
* React converts JSX into regular JavaScript before rendering.


---

## What is the difference between State and Props?

**Props**

* Data passed from parent to child component
* Read-only (cannot be changed by the child)

**State**

* Data managed inside a component
* Can change over time

**In short:**

* Props = data from parent
* State = data managed by the component

---

## What is the useState hook, and how does it work?

* `useState` is a React hook used to manage state in functional components.
* It creates a state variable and a function to update it.
* When the state changes, React re-renders the component.

**In short:**

* `useState` lets components store and update data

---

## How can you share state between components in React?

* Move the state to the closest common parent component.
* Pass the state to child components using props.
* Child components can use or update the shared state.

**In short:**

* Lift the state up to the parent component

---

## How is event handling done in React?

* Events are attached using camelCase names like `onClick`, `onChange`.
* Events are handled using functions.
* When the event happens, the function runs the desired action.

**In short:**

* React events = functions triggered by user actions.

## Live Link
https://tranquil-cascaron-f643b1.netlify.app/
