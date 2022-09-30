# Client Side Routing

### SWBATs:

- [ ] Review the difference between server-side and client-side routing
- [ ] Observe a refactor to include client-side routing using React Router V5
- [ ] Explain what a nested route is
- [ ] Observe how to handle nested client-side routes

## Deliverables

#### 1. Install and setup react router

- React Router has been updated to V6 but V5 is used in the curriculum.

- To install V5 run this command: `npm install react-router-dom@5.3.3` otherwise, V6 will install by default

- Within `index.js`, wrap the `App` component in the `BrowserRouter` component that will be imported from the `react-router-dom` library

#### 2. Use Switch and Route to set up initial routes so we can conditionally render components based on URL

- Import the `Switch` component from the `react-router-dom` library and wrap the components designated for routing

- Import the `Route` component from the `react-router-dom` library and wrap each individual component designated for routing

  - Provide the `path` prop to the `Route` component to create a URL path associated with the component
  - If the path matches the current URL, the `Route` will render its children
  - If not, the `Route` renders null

- Demonstrate each route in the browser to confirm the components still behave as expected

- Demonstrate the use of the `exact` prop passed to the `Route` component

- Once we have `Home`, `About`, and `ProjectsContainer` hooked up to Routes, let's work on getting separate routes set up in `ProjectsContainer` to handle the list, new form and edit form as well.

#### 3. Add navigation to the application using the `Link` and `NavLink` components

- Convert any html anchor tags to `Link` or `NavLink`

- Demonstrate the difference between `Link` and `NavLink`

#### 4. useHistory to enable redirecting upon form submissions

- When we submit the form to create a new project, use the history object to redirect the user to the ProjectsList page.

- When we submit the form to update an existing project, use the history object to redirect the user to the ProjectsList page.

#### 5. (BONUS): Create another nested route for viewing projects by phase so that is linkable as well

#### 6. (BONUS): Add the user's search query for projects to the URL so that users can share their search results with a friend



### Resources

- [Nested routing in React Router v5](https://ui.dev/react-router-v5-nested-routes)