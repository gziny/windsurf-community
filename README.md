# Contents

1. Setting up Your Environment
2. Running the Project
3. Reading the Code

# 1. Setting up Your Environment

## Install Node.js

Before you can use this starter project, you will need to install Node.js and configure your development environment. You can install Node.js from http://nodejs.org, and at the time of this writing it is recommended that you install Node.js version 6.x.x since it is currently scheduled for Long Term Support.

After running the installer, verify that the `node` executable is available on your path by running the command `node --version` in a command line window. You should see something like "v6.9.1" logged to the console. If this does not work, try restarting your machine and verifying that "C:\Program Files\nodejs" is in your PATH environment variable.

## Configure NPM

To manage third-party dependencies, including code from other teams, you will need to use NPM (Node Package Manager), which is included with the earlier installation of Node.js. Before it can be used though, there is some minor configuration to play nicely with the corporate network.

First, create two new System Environment Variables, `http_proxy` and `https_proxy`, both with the value "http://hsv-proxy.ingrnet.com:80". This will allow NPM and other tools to properly communicate with external networks.

Next, in order to use certain packages, you will need to install Git if you do not already have it installed, and again configure it to work with the network. Download Git from https://git-scm.com/, and install it with the default options. After installing, open a command line window and run the command `git config --global url."https://".insteadOf git://`.

Finally, to tell NPM to route through our private NPM registry, run the command `npm config set registry http://uxnpm/`. This step allows you to utilize the private packages from other teams, while still fetching third-party packages from the public registry.

Now, NPM should be configured for the network. To test that it is working, open a command line window at the root of this starter project and run the command `set NODE_ENV=development` followed by `npm install`. This should install all of the dependencies of the project into the "node_modules" folder.

# 2. Running the Project

Now that the dependencies for the project have been installed, you can run the application. Run the command `npm run start` at the root of the starter project. This will bundle the various code files together and serve them up at the address http://localhost:8080. If you navigate to this address in your browser, you should see the sample application running. This bundling and serving is provided by a tool called Webpack, which you can learn more about here: https://webpack.github.io/. Webpack allows for modern, modular Javascript development, and the current configuration offers benefits such as live reloading when code is changed, and coding style-guide errors in the browser's console.

NOTE: Any time you want to kill a long running process such as this, press `ctrl+c` while focused on the command line window.

Another process that can be run alongside the "start" command is a live unit testing view. To see this view, run the command `npm run test` in another command line window, again at the root of the starter project. Then, navigate to `http://localhost:5000` in a browser window. Like the application itself, this testing view will be reloaded live as your code changes.

Other commands provided in the starter project are:

- `npm run build`: Builds a production-ready version of the application that can be placed on a server.
- `npm run clean`: Cleans out the code built by the `build` command.
- `npm run lint`: Runs a linter over all of the code in the "src" directory. A linter is a tool that checks if code adheres to a style guide. Linting rules are built into the project and are based off of the widely-used Airbnb Javascript Style Guide (https://github.com/airbnb/javascript).
- `npm run test:silent`: Runs all unit tests in the command line window in which the command is invoked. This process returns an error code if any tests fail, so it can be used alongside gated check-ins.

# 3. Reading the Code

A. Configuration and Metadata
B. Bootstrapping
C. Anatomy of a Feature
D. App Feature
E. Data Feature
F. Posts Feature
G. Shared Feature

## A. Configuration and Metadata (/, /config)

This project uses an opinionated organization that is based on current best practices in the React + Redux development community. Naming conventions and coding styles can be used only as a starting point, but should be robust enough for a production application.

Other than the "package.json" file and "node_modules" folder needing to be in the root of your project, none of the file structure depends on any magic to correctly resolve files. The structure is designed to scale well for large applications, and it is relatively simple to teach to new hires and learn yourself.

The "configs" folder contains all of the files used to configure the build processes. These configs have been set up so that development is as painless as possible, and so that you can build a production copy of the application.

The "package.json" file is a manifest of your application, and contains the application's metadata, dependencies, and available "npm script" commands.

## B. Bootstrapping (src)

NOTE: The rest of this guide will assume that you have at least a basic understanding of React (https://facebook.github.io/react/docs/hello-world.html), Redux (http://redux.js.org/), and Redux Sagas (http://yelouafi.github.io/redux-saga/). If you are not familiar with these technologies, it's encouraged that you take a detour to their documentation and learn straight from their author.

The "src" folder contains all of the application's code. The top level of the "src" folder contains the following:

- "src/index.html": A template HTML page that Webpack will use to generate the page served up by the start command and distributed in the production build.

- "src/index.js": The entry JS file for the application. This file is the root of the dependency tree, and can be thought of as the "main.cpp" or "Program.cs" equivalent for the web app. It contains code that mounts the root React component on the page, provides the Redux store to the application, and dispatches an `initialized` action.

- "src/test.html": This template HTML page is similar to the index.html template page, but it is used for the unit testing view served by the `npm run test` command.

- "src/vendor.js": This file contains imports for all of the third-party (often called "vendor") code. This dependency will be followed by Webpack in parallel to the application code, and it is used to improve performance and reduce network traffic in development and production environments.

### Features (src/features)

The "src/features" directory contains the meat of the application, and is broken down into "feature" folders. Features will be described in more detail later, but in general, the sample project's features are organized in the following way:

- "src/features/app": The top-level feature of the application. Contains the root component and any simple components that live in the application's shell.

- "src/features/data": Code related to managing the core data model of the application is stored in this feature. Fetching utilities, validation logic, etc. should be placed here.

- "src/features/posts": This feature is an example of how a specific section of the application can be organized. In a large application, you'll have many features like this.

- "src/features/shared": This feature contains shared code (actions, helpers, components, etc.) that can be utilized by any other features. To avoid issues with circular dependencies **this feature should never import code from other features.**

NOTE: Circular Dependencies can be relatively hard to debug in Javascript, and will result in a function or variable being undefined instead of throwing an exception. To avoid this problem, it's generally a good idea to avoid having dependencies on other features in a feature that exposes shared state.

### Store (src/store)

The "src/store" folder contains files that pertain to bringing the reducers and sagas of the features together into a single store object.

- "src/store/index.js": Contains code to build the Redux store and then export it to be used in the "src/index.js" file. Logging and Sagas are also added in this file.

- "src/store/reducer.js": This file imports the reducer from any feature that has one, and then combines them all into the top-level reducer.

- "src/store/saga.js": This file does the same thing as reducer.js, but for sagas.

### Styles (src/styles)

Finally, the "src/styles/index.scss" file is used to import the Toolkit's resets and styling.

## C. Anatomy of a Feature (src/features)

A core part of this project's architecture is organization by feature. A feature is a unit of code dedicated to a singular, relatively complex piece of functionality. Functionality that might warrant a separate feature includes:

- Rendering a particular page in a multi-view app, such as a search results page or settings page.

- Rendering a complicated panel in a single-view app, such as a property grid or ribbon.

- Managing CRUD operations on a domain data model.

- Providing a shared set of helper functions and constants, centered around a single concept. E.g. notifications or localization.

Features are stored in the "src/features" directory by convention, and should be presented in a flat list, not nested in groups. This ensures that finding a feature is as simple as looking through an alphabetically sorted list, and this structure will pay off as the application gets larger and new developers start working in the codebase. The internals of a feature follow strict conventions to ensure readability when moving between features.

### Components (components)

A folder for components should be present if the feature exposes components that will be used in other features. The folder should contain subfolders for each of the feature's components, as well as a "components/index.js" file that imports and re-exports any components that should be part of the feature's public API, making it visible to other features.

Each component subfolder should contain the following files:

- "my-component-name.js": The definition of the React component.

- "my-component-name.test.js": Unit tests for the React component.

- "my-component-name.scss": Styling for the component.

and optionally, when the component needs to connect to the Redux store:

- "my-component-name-container.js": The container component that will connect to the Redux store and pass the state into the "dumb" component.

NOTE: When using the starter project, tests in files with the ".test.js" suffix are automatically imported into the list of tests run by the `npm run test` command.

Examples of a components folder can be found in the starter project's "app" and "posts" features.

### Actions (actions.js)

An actions file should be present when one of the following statements is true:

- The feature utilizes local actions to update state in the same feature's reducer, or to trigger sagas in the feature.

- The feature exposes shared actions that are handled by other features' reducers or sagas.

The actions file should contain action types and action creators, but should not contain any complex logic. The `NAME` constant from "./constants.js" should be used to namespace action types so that actions can be kept simple without colliding with those in other features.

Actions should be created using the Flux Standard Action format (https://github.com/acdlite/flux-standard-action) to ensure consistency. Another helpful convention is to always name action types in the past tense with the general format "NAMESPACE/SUBJECT_VERB". Adhering to this convention keeps the code readable and helps developers spend less time thinking of action types.

If your actions file is getting too big, there's a good chance that the feature itself is growing too large. It is recommended that you do *not* create an actions folder with multiple actions files in a single feature.

Examples of an actions file can be found in the starter project's "data" and "shared" features.

### Constants (constants.js)

A constants file should be present when the feature has actions, or when it exports shared constants, a reducer, or a saga.

The file should export a `NAME` constant to be used for namespacing actions, and registering the feature's reducer and saga in the "src/store/reducer.js" and "src/store/saga.js" files.

If your constants file is getting too big, there's a good chance that the feature itself is growing too large. It is recommended that you do *not* create an constants folder with multiple constants files in a single feature.

Examples of a constants file can be found in the starter project's "data", "posts", and "shared" features.

### Helpers (helpers.js)

A helpers file should be present when one of the following is true:

- You want to keep complex code out of a component, reducer, or saga.

- You have shared functions within the feature.

- You need to expose shared functions to other features.

One of the key benefits to keeping functions in a helpers file is the ease of unit testing. Unit tests for these functions should be located in a helpers.test.js file in the same directory. Again, in the starter project, files with the ".test.js" suffix will automatically be added to the tests run by the `npm run test` command.

When a single helper.js file becomes too big, first consider whether this feature is becoming bloated and should be split into multiple features. If this does not seem appropriate, this file can be refactored into a folder containing multiple helper files and an "index.js" file to barrel them up into a single exported object. If you refactor the file into a folder, make sure there is a ".test.js" file per helper file.

Examples of helpers files can be found in the starter project's "data" and "shared" features.

### Index (index.js)

The index file is where the public API of a feature is defined by importing the individual pieces of the feature and combining them into a single default-exported object. When importing from a feature, you should only ever import its "index.js" file. Importing pieces from the insides of a feature leads to tight coupling and breaks encapsulation.

This file should be present in **every** feature, and examples of index files and how they are imported elsewhere can be found in each feature in the starter project.

### Reducer (reducer.js)

A reducer file should be present when the feature has some local state, or is a shared feature that exposes state to other features.

Each piece of state in the reducer file should be written as a separate reducer function. Then they should be combined into a single reducer and exported at the end of the file with Redux's provided `combineReducers` utility.

Exporting each of the reducers in charge of a single piece of state from your "reducer.js" file will ensure the most efficient unit testing. Unit tests for the reducers exported from "reducer.js" should be defined in a reducer.test.js file in the same directory. Again, in the starter project, files with the ".test.js" suffix will automatically be added to the tests run by the `npm run test` command.

If your "reducer.js" file grows too large, first consider whether this feature is becoming bloated and should be split into multiple features. If this does not seem appropriate, this file can be refactored into a folder containing multiple reducer files and an "index.js" file to barrel them up into a single exported object with the same `combineReducers` utility. If you refactor the file into a folder, make sure there is a ".test.js" file per reducer file.

NOTE: Make sure you never store the same piece of data in more than one feature's reducer. This very often leads to errors when trying to keep them in sync. If a piece of data needs to be shared between features, extract it into a feature that is shared between them.

Examples of a reducer file can be found in the starter project's "data" and "posts" features.

### Saga (saga.js)

A saga should be present in your feature when there are complex side effects local to the feature, or the feature is responsible for managing shared side effects.

A single saga should be exported from the file, but it can fork execution into multiple sagas inside the file. As with the "reducer.js" and "helpers.js" files, if this file gets too big, look first into creating a separate feature and then as a backup consider refactoring this file into a folder. If you refactor the file into a folder, make sure there is a ".test.js" file per saga file.

An example of a saga file can be found in the starter project's "data" feature.

### Selectors (selectors.js)

A selectors file should be present anytime there is a reducer in the feature. There should be a selector for each piece of state contained in the feature's reducer.

When state is needed from another feature, you should always use that feature's selectors as if it were the public API to avoid coupling to the private implementation.

Selectors are also the best place to derive data that isn't specifically stored in a reducer. For example, if you have an array of objects `items` and a string `selectedId`, but you need the actual object out of the array, often the first idea you'll have is to add `selectedItem` to your reducer. This is a mistake because it introduces a new piece of state that needs to be kept in sync with the first two pieces, which in turn increases the complexity of the application.

Instead, we can create a selector `getSelectedItem` which internally uses the `selectedId` to find the selected item in the `items` array. It's also possible to defer this logic to a component or saga, but extracting this kind of logic to a selector keeps code DRY, and makes it very easy to keep the application's disparate parts in sync.

Another reason to keep complex state selection logic out of components is that it will be much easier to unit test that logic. Unit tests for selectors should be located in a selectors.test.js file in the same directory. Once again, when using configuration of the starter project, files with the ".test.js" suffix will automatically be added to the tests run by the `npm run test` command.

Examples of a selectors file can be found in the starter project's "data" and "posts" features.

## D. App Feature (src/features/app/)

The first feature is the "app" feature, which contains the top-level component of the application and any direct descendants which are not complex enough to warrant a separate feature. The components contained in this feature will most often be the pieces that make up the application shell, like the Topbar and Sidebar.

The "app" feature represents the root of the component tree, but it should not contain logic on which other features will depend. Doing so will lead to major issues with circular dependencies since the "app" feature ends up depending on all of the other features indirectly.

### App Components (src/features/data/components)

NOTE: This starter project does not use the JSX syntax which you will often see, but instead uses a library called "react-hyperscript" (https://github.com/mlmorg/react-hyperscript), which is a simple wrapper around the `React.createElement` API. We believe that this syntax uses a little less "magic" and makes it more clear that everything in a React component is just Javascript. However, this architecture is completely compatible with the JSX syntax if you decide to use it.

In the starter project, the "app" feature only exposes a basic App component, which is the top-level component for the application. This component should do little more than lay out the shell components and include a component for the content.

Note that both of this component is accompanied by relatively basic unit tests. Overly simple unit tests such as these can feel contrived, but in a large-scale application they provide a valuable safety net for simple errors, and eliminate the need for most automated UI tests.

Also note that only the App component is exported from the "components/index.js" file. This is because the App component is the only component we want to make part of our public API for the "app" feature.

## E. Data Feature (src/features/data)

The next feature in the start project is the "data" feature. This feature is responsible for managing the domain data for the application. It does not expose any React components, but it does expose actions, helpers, a reducer, a saga, and selectors.

### Data Actions (src/features/data/actions.js)

The actions file contains three actions ending in "REQUEST_STARTED", "REQUEST_SUCCEEDED", and "REQUEST_FAILED". These actions are handled and dispatched internally by sagas that fetch new posts from a server. Additionally they can be handled elsewhere to react to show a loading indicator before the request returns, or notify the user upon success or failure.

### Data Constants (src/features/data/constants.js)

The "data" feature's constants file only exports the name of the feature, which is used for namespacing actions and registering the feature's reducer and saga.

### Data Helpers (src/features/data/helpers.js)

The helpers file contains a function that encapsulates the fetching of posts so that the sagas don't have to know how it is implemented internally.

### Data Reducer (src/features/data/reducer.js)

In the "data" feature, the reducer manages a single piece of state: the `posts` array of post objects fetched from the server. The posts from the request are returned if the request is successful, and an empty array of posts is returned if the request fails.

Even though there is only a single piece of state in this reducer, it's best to export a combined reducer at the end of the file so that it's easy to add new state in the future.

Tests are also provided for this reducer in the adjacent "reducer.test.js" file.

### Data Saga (src/features/data/saga.js)

The saga file includes a forked saga to handle the local action `data/POSTS_REQUEST_STARTED` by fetching a random set of posts, as well as one to handle the one-time `shared/INITIALIZED` by fetching the first round of posts.

Tests are also provided for this reducer in the adjacent "saga.test.js" file.

### Data Selectors (src/features/data/selectors.js)

The selectors file exports a single selector `getPosts` that can be used to access the `posts` array on the "data" feature's reducer.

## F. Posts (src/features/posts)

The "posts" feature is responsible for rendering a relatively complex section of the application, with a small bit of UI state. It renders a list of items, with an alternate loading view while the posts are being fetched. It exposes a single container component to be placed in the App component of the "app" feature, and a reducer so that it can be registered with the store. Note that it does not expose selectors because it's state is not shared with other features.

### Posts Components (src/features/posts/components)

The components folder for the "posts" feature contains a Post component, that visualizes a single post object, and a Posts component that renders a list of Post components. However, the PostsContainer, which connects the Posts component to the application's store, is the only component that is exported as part of the public API for the feature. This is because it is the only component that is designed for use elsewhere in the application. As long as imports only use the public API of a feature, this will prevent developers working in other features from accidentally importing the wrong component and losing the connection to the Redux store.

### Posts Constants (src/features/posts/constants.js)

The constants file exports the `NAME` constant for the same purpose as other features, as well as a `maxPostLength` that is used internally for adjusting the way components display. It's much easier to find seemingly arbitrary numbers when you make a habit of placing them in a feature's constants file.

### Posts Reducer (src/features/posts/reducer.js)

The reducer file for "posts" manages a single piece of state, an `isLoading` boolean. When this value is `true`, the Posts component displays a loading indicator. The "data" feature's `data/POSTS_REQUEST_STARTED` action is handled by setting the value to `true` so that the loading indicator is visible until the request finishes. Subsequently, the actions `data/POSTS_REQUEST_SUCCEEDED` and `data/POSTS_REQUEST_FAILED` actions are handled by setting the value to `false`, switching the loading indicator back off.

Once again tests are provided for this reducer in the adjacent "reducer.test.js" file.

NOTE: The "posts" feature does not contain the fetched array of post objects, because this is part of the core domain data model and is likely to be referenced in other features. The state contained in the "posts" feature instead deals with local UI state only.

### Posts Selectors (src/features/posts/selectors.js)

The selectors file exports a single selector `getIsLoading` that is used locally to the "posts" feature. As mentioned earlier, by not exporting the selectors from the "src/features/posts/index.js" file, we can choose to exclude this from the public API. This prevents misuse of the state, as well as any circular dependencies.

## G. Shared Feature (src/feature/shared)

The "shared" feature is responsible for providing reusable components, constants, and functions to other features. It also provides an action that is dispatched when the application is initialized so that other features can handle the action and run their initialization processes. The "shared" feature is guaranteed not to have dependencies on other features, so any other feature can import it without circular dependencies.

### Shared Components (src/feature/shared/components)

The UX Toolkit for React will provide most of the basic styled components such as buttons, text inputs, etc. However, there will often be components that appear often in your application, but don't necessarily belong in other products. The "shared" feature's components folder is the best place to put these common, application-local components.

In the starter project's shared components folder, there is an example of a simple Button component that can be used in other features.

### Shared Actions (src/feature/shared/actions.js)

The "shared" actions file exports a single action, `shared/INITIALIZED`. This action is dispatched in the "src/index.js" file as a entry point into the otherwise closed loop of the application. In the starter project, the "data" feature listens to this action in a saga, and fetches an initial round of posts.

A common alternative is to trigger initialization within React components' `componentDidMount` lifecycle methods, but this mixes concerns by forcing the view layer of the application to know what's going on in the state management layer.

### Shared Constants (src/feature/shared/constants.js)

The "shared" constants file just exports the `NAME` constant to namespace actions.

// TODO ------
Write about testing sagas
