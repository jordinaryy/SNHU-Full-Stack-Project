# SNHU-Full-Stack-Project
CS465 Full Stack Development

#Architecture

#Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).
#Why did the backend use a NoSQL MongoDB database?

This full stack project used three different approaches to the frontend development, these were Express HTML, JS, and SPA. Express HTML used static pages that were handled by an hbs templating engine,
where the server uploaded the full HTML page and sent it to the browser on every request. This was more of a striaghtforward approach but slow as it required navigating around the server on every approach. 
JS added more creativity and fluidity amongst the pages, especially when handling dynamic content. JavaScript allowed you to update the content without the need to reload a full page. SPA was a whole different approach than the first two. SPA allowed you to render the data within the browser through API calls. Navigation is smoother but SPA overall is more complex but an overall better style for admin like interfaces that require consistent updates. 

The backend used was MongoDB and it allowed me to store JSON like documents, which works well with JavaScript stack flow. MongoDB is flexible in terms allowing the data schema to evolve as the appplication grows and not needing the complex table strucutre that a relational database would offer. NoSQL fit right in.



#Functionality

#How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?
#Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.

JSON is a simple data format that is used to store and transfer data to where JavaScript is a full programming language used to build logic within the application. JSON ties the frontend and backend together becuase the API will return data as JSON , and Angular parses that to display it in the browser. 

Throughout the project the code was refracted a good bit to improve the functionality. One example was when I had to move the trip cards out of the trip-listing component into their own trip-card componet. This made the code resuable and cleaner instead of one large file doing everything. Another example was when I was replacing the hardcoded local trups data file with a service that fetched the data from the MongoDB API. This made the app dynamic instead of static. The resuable UI componenets like trip-card save time because the logic is only used once but can be reused every where. 


#Testing

#Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.

In this project I used all of the HTTP verbs, GET, POST, DELETE, and PUT. These define what actions are being performed on the API. I tested endpoints such as POST/api/register, POST/api/login, PUT/api/trips/GALR210214. The endpoints we tested here allowed us to create a new user and receive a JWT (which was POST/api/register), POST/api/login to authenticate and recieve a tkoen, and PUT/api/trips/GALR210214 (:tripCode for the last slot in general) allowed me to update a trip. The PUT endpoint was tested first without a token which returned a 401 unauthorized response, confirming that the sevurity worked. It was the tested with a valid bearer token in the authorization headed which returned a 201 response confirming the authenticated request succeeded. 

#Reflection

How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?

This course helped me build and develop a complex and complete understanding of web a application. It showed me how the application worked from end to end, because before this project, I had some experience with individual pieces but not how they all connected together. The skils I developed, like building a RESTful API with Express, working with MongoDB and Mongoose, building Angular components, and implementing JWT authentication, made me aware of the work that goes into such development. These skills are highly marketable and it made me want to pursue such skills for future projects or even as a job one day.
