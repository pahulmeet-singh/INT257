# Routing

-- Routing is the process of determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, and so on). Each route can have one or more handler functions, which are executed when the route is matched.

1. File Based routing
    - File-based routing is a routing mechanism that uses the file system to determine the routes of an application. In this approach, the structure of the files and directories in the project corresponds to the routes of the application. Each file represents a route, and the file name determines the URL path for that route. For example, a file named `about.js` in the `pages` directory would correspond to the `/about` route in the application.
2. Dynamic routing
    - Dynamic routing is a routing mechanism that allows for the creation of routes that can change based on user input or other factors. In this approach, the routes are defined using parameters that can be passed in the URL. For example, a route defined as `/users/:id` would allow for dynamic routing based on the `id` parameter, which could be any value passed in the URL.

3. App Router conventions
    - Folder structure maps directly to URL routes: a folder named `xyz` in the `app` directory creates the route `/xyz`.
    - `page.js` files define route content: placing `page.js` inside the `xyz` folder renders that file's contents when users navigate to `/xyz`.
    - 