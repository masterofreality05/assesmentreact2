### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
The purpose of React router is to simulate server side routing in the client side. While on
the server side, different endpoints would return different data. With react router we can use the browser URL
to conditionally render components in a similar fashion. 

- What is a single page application?
A single page applications is one that instead of requesting an entire new page of information from the server side, will dynamically update the informaiton (often html) shown depending on the conditions required. The single page can often rewrite its contents based on retrieved information from the server, rather than loading the entire page or an entire other page again from the server. 

- What are some differences between client side and server side routing?
The main difference between server side and client side routing is that, with server side routing the entire resource contained at an individual route is loaded at once, and reloaded in its entirity. While client side routing requires no request to the server, and is handled within a language such as Javascript, to update the data accordingly. 


- What are two ways of handling redirects with React Router? When would you use each?
Two ways of using redirects with React Router are 

Using a <Redirect /> componenet 
This is useful for a page that the user may not have initially meant to have made it to, 404 for example. 

Pushing a redirect link to history item, 
This is useful to call as part of an onSubmit for a form, then we can redirect to a new route if necessary. In the broader scope we can say that pushing a new url to the history object is useful in cases where we are responding to user actions, e.g onSubmit, onClick. etc. 

- What are two different ways to handle page-not-found user experiences using React Router? 
We can firstly create a 404 component, in which ever manner we wish, we generally organise our Routes in Router, and if a route matches the URL given it will render that Route. If no matches are made we could add 
<Route> with no path specified, which means that the criteria will match in case no other Routes are matched. 

Another is the <Redirect /> component which can bring them back to a declared web page, possibly with the inclusion of an alert, or flash message. 

- How do you grab URL parameters from within a component using React Router?
We can access URL parameters from within our React components with the useParams() hook. 
We have to declare the route like so "/route/:param1" we use a colon to declare a param in the Route, which is then obtained and named with useParams()
We can then deconstruct and save this in a variable within the component 
let {param1} = useParams()

- What is context in React? When would you use it?
Context is a concept similar to scope, we can declare Context with a React Provider component and wrap other components within this context provider. any variables declared in the context will be available to be consumed in the subsequent nested components, without the need to pass or drill down props. 

- Describe some differences between class-based components and function
  components in React.

  Class based components are built using the constructor method, and exist as individual components in the way of instances, The constructor is used to construct instances and therefore must use the this keyword in order for an instance to refer to variables or instance methods on itself. 
  Function components are produced by calling the same function each time a component is required, therefore we do not have to use this to reference variables or functions made within, as the function will declare these in the block scope of each component. 

  Functional components are more modern, easier to understand and recommended to use over their deprecated counterpart, the class component which still exist in code, but are no longer newly implemented.

- What are some of the problems that hooks were designed to solve?

Hooks are designed to abstract and simplify problems of state within components (useState), and re-rendering of asynchronous components (useEffect)