# RESTy 

****

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

****

# Day 1 - LAB 26 - Component Based UI

**RESTy Phase 1:** Begin work on the RESTy API testing application.

## Before you begin

Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.

Create a UML diagram of the **RESTy** system on a whiteboard before you start.

1. Use Create React App (CRA) to create a new application named `resty`.
1. Delete the existing `src` directory.
1. Paste in the `src` directory from the `lab/starter-code`.
1. Run `npm install uuid sass`.
1. `npm start` and confirm that the application loads in the browser.
1. Create an **EMPTY** GitHub Repository named `resty`.
1. Follow GitHub instructions labeled "…or push an existing repository from the command line".
1. Note: after completing the above step, CRA starter code will have been pushed to your GitHub Repo.
1. Immediately `ACP` after adding your newly created repo to GitHub; giving you the option to rollback changes to the base starter code if necessary.
1. Create and work in a new branch for today called `base`. 

## Business Requirements

Refer to the [RESTy System Overview](../../apps-and-libraries/resty/README.md) for a complete review of the application, including Business and Technical requirements along with the development roadmap.

## Phase 1 Requirements

Today, we begin the first of a 4-Phase build of the RESTy application, written in React. In this first phase, our goal is to setup the basic scaffolding of the application, with intent being to add more functionality to the system as we go. This initial build sets up the file structure so that we can progressively build this application in a scalable manner.

![Preview](preview.png)

## Technical Requirements / Notes

> The application, as written by our development team was done using class components as a proof of concept. In order to go to production, we're going to have to convert this to an application written using React function components so that our foundation is both stable and high performing.

Refactor the RESTy application as follows:

1. Convert all child components of `<App />` from classes to functions.
    - The `<App />` component serves as the container for all sub-components of this application.
    - Leave this component as a Class.
    - Make sure all base styles for `<App />` are included in a `.scss` imported within the `App.jsx` file.
    - Ensure that the `<Header />`, `<Footer />`, `<Results />` and `<Form />` components are imported using ES6 `import` syntax.

1. Use `.scss` files to style each component.
   - Each of the components use their own `.scss` file for styling.

1. Core application functionality should remain unchanged.
   - The `<Form />` component should:
     - Call a function `onSubmit()` that updates the `<App />` component via a function sent down as a prop so that the app can process the form values.
   - The `<Results />` component should show mock API results.

## Proposed File Structure

In this proposal:
- Utilize [Airbnb React/JSX Style Guide](https://airbnb.io/javascript/react/) conventions.
- Unit tests are placed in the component directory (testing one file only).
- Integration tests are placed in the `__tests__` directory (testing more than one file).

```text
├── .github
│   ├── workflows
│   │   └── node.yml
├── public
├── src
│   ├── __tests__
│   │   │   └── App.test.jsx (integration test)
│   ├── Components
│   │   ├── Footer
│   │   │   ├── Footer.scss
│   │   │   ├── Footer.test.jsx (unit test)
│   │   │   └── index.jsx
│   │   ├── Form
│   │   │   ├── Form.scss
│   │   │   ├── Form.test.jsx 
│   │   │   └── index.jsx
│   │   ├── Header
│   │   │   ├── Header.scss
│   │   │   ├── Header.test.jsx 
│   │   │   └── index.jsx
│   │   └── Results
│   │       ├── index.jsx
│   │       ├── Results.scss
│   │       └── Results.test.jsx
│   ├── App.jsx
│   ├── App.scss
│   └── index.js
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```

## Testing

NOTE: For this assignment, **testing is not required**.

## Stretch Goal

Attempt Testing!
- Utilize the React Testing Library framework installed with CRA.
- Assert that components render elements with language on page load.
- Import `{ fireEvent, render, screen }` from the React Testing Library to confirm behavior when change and/or click events occur.  See [Documentation](https://testing-library.com/docs/react-testing-library/cheatsheet) as necessary. Examples will soon be given in lecture. 

## UML - Lab 26
<img width="450" alt="lab26uml" src="https://github.com/MichaelDulin/resty/assets/73040864/b6194a22-f5a9-4113-bf84-1a258c5676a2">

****

# Day 2 - LAB 27 - `useState()` Hook

**RESTy Phase 2:** Retrieving User Input and Managing State.

## Before you begin

Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.

> Continue working in your 'resty' repository, extending your previous work in a new branch called 'state'.

## Business Requirements

Refer to the [RESTy System Overview](../../apps-and-libraries/resty/README.md) for a complete review of the application, including Business and Technical requirements along with the development roadmap.

## Phase 2 Requirements

In phase 2, we will be receiving user input in preparation of connecting to live APIs, using the `useState()` hook in our functional components.  In order to properly manage state with the useState hook, we will now convert `<App />` to a functional component.

The following user stories detail the major functionality for this phase of the project.

- As a user, I want to enter the REST Method and URL to an API.
- As a user, I want to see a summary of my request as well as results returned from an API request in my browser in a readable format.

Application Flow:

- User enters an API URL.
- Chooses a REST Method.
- Clicks the  "Go" button.
- Application fetches data from the URL given, with the method specified.
- Displays the response headers and results separately.
- Both headers and results should be "pretty printed" JSON.

> One possible design/layout. Please use your judgement and taste in styling your version of this application.

![Resty](resty.png)

## Technical Requirements / Note

> Extend your React Application so that your functional components are able to manage their own state variables using the `useState()` Hook.  
> NOTE: It is not a requirement to make the actual API call. That can be mocked with "fake" data.

1. Refactor any components using `this.setState()` to implement the `useState()` react API hook.
1. Refactor the Form Component to implement user input from form elements, instead of hard coded string values.

Suggested Component Hierarchy and Application Architecture:

- `index.js` - Entry Point.
- `<App />` - Container.
  - Holds application state: The Request (from the form) and the Response (from the API).
  - Hook that can update state.
  - Renders 2 Child Components.
- `<Form />`
  - Expects a function to be sent to it as a prop.
  - Renders a URL entry form.
  - A selection of REST methods to choose from ("get" should be the default).
    - The active selection should be displayed/styled differently than the others.
  - Renders a Textarea to allow the user to type in a JSON object for a POST or PUT request.
  - On submit:
    - Send the Form entries back to the `<App />` using the method sent down in props.
    - Form will run the API request.
      - Toggle the "loading" status before and after the request.
- `<Results />`
  - Conditionally renders "Loading" or the data depending on the status of the request.
  - Expects the count, headers, results to be sent in as props.
  - Renders the count.
  - Renders the Result Headers as "pretty" JSON.
  - Renders the Result Body as "pretty" JSON.

## UML - Lab 27
<img width="421" alt="lab27uml" src="https://github.com/MichaelDulin/resty/assets/73040864/89084ce0-77b7-435a-869f-7d2e79913ff6">

****

# Day 3 - LAB 28 - Component Lifecycle / `useEffect()` Hook

**RESTy Phase 3:** Connect RESTy with APIs, running live requests.

## Before you begin

Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.

> Continue working in your 'resty' repository, in a branch called 'effect-hook'.

## Business Requirements

Refer to the [RESTy System Overview](../../apps-and-libraries/resty/README.md) for a complete review of the application, including Business and Technical requirements along with the development roadmap.

## Phase 3 Requirements

In phase 3, we will be connecting RESTy to live APIs, fetching and displaying remote data. Our primary focus will be to service *GET* requests.

The following user stories detail the major functionality for this phase of the project.

- As a user, I want to enter the URL to an API and issue a GET request so that I can retrieve it's data.
- As a user, I want to see the results returned from an API request in my browser in a readable format.

Application Flow:

- User enters an API URL.
- Chooses a REST Method.
- Clicks the  "Go" button.
- Application fetches data from the URL given, with the method specified.
- Displays the response headers and results separately.
- Both headers and results should be "pretty printed" JSON.

> One possible design/layout. Please use your judgement and taste in styling your version of this application.

![Resty](resty.png)

## Technical Requirements / Note

> Extend your application to include the ability to send http requests and display response data, when the `<Form />` component experiences a submission event.

1. Refactor application methods to allow for browser side HTTP requests to be sent.
   - Your implementation should allow the user to set a url, method, and request body.
1. Make sure all relevant request and response data is displayed to the User.

Suggested approach:

- `<Form />` component, `onSubmit()` sends the user's entries to the `<App />` via method sent in through props.
- `<App />` does a check on the request data from the form and updates the request variable in state with the `url`, `method`, and potentially the `body`.
- `<App />` has an effect hook that's looking for changes to the request variable in state, and in response, runs the API request with the new request options from state.
- `<App />` updates state with the results of the API Request.
- `<Results />` sees the new API data as a prop and renders the JSON.

Note: update your `<Results />` component to use a 3rd party component to "pretty print" the JSON in a color-coded, user-friendly format.

## UML - Lab 28
-UML GOES HERE

****
