
function start() {
    let questions = [
        {
            question: "What does HTML stand for?",
            options: [
              "Hyper Text Markup Language",
              "Hyperlink and Text Markup Language",
              "High Tech Markup Language",
              "Hyper Transfer Markup Language"
            ],
            answer: 1
          },
          {
            question: "Which programming language is primarily used for client-side scripting in web development?",
            options: [
              "Java",
              "Python",
              "JavaScript",
              "PHP"
            ],
            answer: 3
          },
          {
            question: "What is the purpose of CSS in web development?",
            options: [
              "To define the structure and content of a webpage",
              "To provide interactivity and dynamic behavior to a webpage",
              "To enhance the visual presentation of a webpage",
              "To perform server-side operations in web applications"
            ],
            answer: 3
          },
          {
            question: "Which of the following is NOT a valid HTTP status code?",
            options: [
              "404",
              "200",
              "503",
              "600"
            ],
            answer: 4
          },
          {
            question: "What is the purpose of responsive web design?",
            options: [
              "To optimize websites for search engines",
              "To improve website performance",
              "To make websites compatible with various devices and screen sizes",
              "To enhance website security"
            ],
            answer: 3
          },
          {
            question: "Which of the following is a front-end JavaScript framework/library commonly used for building user interfaces?",
            options: [
              "Django",
              "Angular",
              "Express.js",
              "Flask"
            ],
            answer: 2
          },
          {
            question: "What is the purpose of AJAX in web development?",
            options: [
              "To provide server-side processing of web requests",
              "To enable asynchronous communication between the client and server",
              "To manage database operations in web applications",
              "To validate user input in web forms"
            ],
            answer: 2
          },
          {
            question: "Which of the following is NOT a valid HTTP request method?",
            options: [
              "GET",
              "POST",
              "PUSH",
              "DELETE"
            ],
            answer: 3
          },
          {
            question: "What is the purpose of a CMS (Content Management System) in web development?",
            options: [
              "To facilitate collaboration among developers",
              "To manage website content easily without needing extensive technical knowledge",
              "To enhance website security",
              "To improve website performance"
            ],
            answer: 2
          },
          {
            question: "Which protocol is commonly used for secure communication over the internet?",
            options: [
              "HTTP",
              "FTP",
              "HTTPS",
              "SMTP"
            ],
            answer: 3
          },
            {
              question: "What is the purpose of JavaScript in web development?",
              options: [
                "To provide interactivity and dynamic behavior to a webpage",
                "To define the structure and content of a webpage",
                "To enhance the visual presentation of a webpage",
                "To perform server-side operations in web applications"
              ],
              answer: 1
            },
            {
              question: "Which of the following is a valid way to comment out code in JavaScript?",
              options: [
                "//",
                "/* */",
                "#",
                "<!-- -->"
              ],
              answer: 1
            },
            {
              question: "What does CSS stand for?",
              options: [
                "Cascading Style Sheets",
                "Creative Style Sheets",
                "Computer Style Sheets",
                "Colorful Style Sheets"
              ],
              answer: 1
            },
            {
              question: "Which CSS property is used to change the text color of an element?",
              options: [
                "color",
                "background-color",
                "text-color",
                "font-color"
              ],
              answer: 1
            },
            {
              question: "What does the 'box-sizing' CSS property determine?",
              options: [
                "The width and height of an element including padding and border, but not margin",
                "The border size of an element",
                "The padding size of an element",
                "The margin size of an element"
              ],
              answer: 1
            },
            {
              question: "Which of the following is NOT a valid CSS selector?",
              options: [
                "value selector",
                "class selector",
                "tag selector",
                "id selector"
              ],
              answer: 1
            },
            {
              question: "What is the purpose of a media query in CSS?",
              options: [
                "To specify styles for specific device characteristics like screen width or height",
                "To specify the font size of text",
                "To specify the color of text",
                "To specify the background color of an element"
              ],
              answer: 1
            },
            {
              question: "Which of the following is used to include external CSS files into an HTML document?",
              options: [
                "<link>",
                "<style>",
                "<css>",
                "<external>"
              ],
              answer: 1
            },
            {
              question: "What is the purpose of the 'display: flex;' CSS property?",
              options: [
                "To create a flexible layout model",
                "To make an element invisible",
                "To vertically center an element",
                "To rotate an element"
              ],
              answer: 1
            },
            {
              question: "What is the purpose of the 'grid-template-columns' property in CSS Grid layout?",
              options: [
                "To define the width of each column in a grid",
                "To specify the number of columns in a grid",
                "To specify the gap between columns in a grid",
                "To align columns in a grid"
              ],
              answer: 1
            },
            {
              question: "Which of the following is NOT a valid data type in JavaScript?",
              options: [
                "integer",
                "string",
                "boolean",
                "number"
              ],
              answer: 1
            },
            {
              question: "What does the '=== operator' do in JavaScript?",
              options: [
                "Checks for equality without type conversion",
                "Assigns a value to a variable",
                "Performs logical AND operation",
                "Checks for equality with type conversion"
              ],
              answer: 1
            },
            {
              question: "Which JavaScript method is used to add new items to the end of an array?",
              options: [
                "push()",
                "add()",
                "append()",
                "insert()"
              ],
              answer: 1
            },
            {
              question: "What does the 'document.getElementById()' function do in JavaScript?",
              options: [
                "Gets a reference to an HTML element by its ID",
                "Gets a reference to an HTML element by its class",
                "Gets a reference to an HTML element by its tag name",
                "Gets a reference to an HTML element by its name attribute"
              ],
              answer: 1
            },
            {
              question: "Which event occurs when the user clicks on an HTML element?",
              options: [
                "onclick",
                "onchange",
                "onmouseclick",
                "onmouseover"
              ],
              answer: 1
            },
            {
              question: "What is the purpose of the 'addEventListener()' method in JavaScript?",
              options: [
                "To add an event listener to an element",
                "To remove an event listener from an element",
                "To execute a function immediately",
                "To modify the style of an element"
              ],
              answer: 1
            },
            {
              question: "Which of the following is NOT a valid HTTP request method?",
              options: [
                "COPY",
                "PUT",
                "PATCH",
                "MOVE"
              ],
              answer: 1
            },
            {
              question: "What is the purpose of the 'fetch()' function in JavaScript?",
              options: [
                "To make asynchronous HTTP requests",
                "To perform arithmetic calculations",
                "To manipulate strings",
                "To format dates"
              ],
              answer: 1
            },
            {
              question: "Which of the following is NOT a valid HTTP response status code?",
              options: [
                "202",
                "303",
                "404",
                "500"
              ],
              answer: 1
            },
            {
              question: "What does API stand for?",
              options: [
                "Application Program Interface",
                "Automated Program Integration",
                "Automated Programming Interface",
                "Application Programming Integration"
              ],
              answer: 1
            },
            {
              question: "What is the purpose of the 'localStorage' object in JavaScript?",
              options: [
                "To store data that will persist even after the browser session ends",
                "To store data that will be cleared when the browser session ends",
                "To manipulate the DOM",
                "To make HTTP requests"
              ],
              answer: 1
            },
            {
              question: "Which of the following is NOT a valid way to declare a variable in JavaScript?",
              options: [
                "variable",
                "var",
                "let",
                "const"
              ],
              answer: 1
            },
            {
              question: "What is the purpose of the 'createElement()' method in JavaScript?",
              options: [
                "To create a new HTML element",
                "To remove an HTML element",
                "To modify the contents of an HTML element",
                "To add a class to an HTML element"
              ],
              answer: 1
            },
                {
                  question: "What does AJAX stand for?",
                  options: [
                    "Asynchronous JavaScript and XML",
                    "Automated JavaScript and XML",
                    "Advanced JavaScript and XML",
                    "Asynchronous JSON and XML"
                  ],
                  answer: 1
                },
                {
                  question: "Which of the following is NOT a valid way to declare a function in JavaScript?",
                  options: [
                    "function myFunction() {}",
                    "const myFunction = function() {}",
                    "const myFunction = () => {}",
                    "myFunction() {}"
                  ],
                  answer: 4
                },
                {
                  question: "What is the purpose of the 'this' keyword in JavaScript?",
                  options: [
                    "To refer to the current HTML element",
                    "To refer to the global window object",
                    "To refer to the parent function's scope",
                    "To refer to the current object"
                  ],
                  answer: 4
                },
                {
                  question: "Which method is used to remove the last element from an array in JavaScript?",
                  options: [
                    "pop()",
                    "shift()",
                    "splice()",
                    "remove()"
                  ],
                  answer: 1
                },
                {
                  question: "What does the CSS property 'position: absolute' do?",
                  options: [
                    "Positions an element relative to its normal position",
                    "Positions an element relative to its parent element",
                    "Positions an element relative to the viewport",
                    "Positions an element absolutely within its container"
                  ],
                  answer: 3
                },
                {
                  question: "What is the purpose of the 'z-index' CSS property?",
                  options: [
                    "To set the width of an element",
                    "To set the height of an element",
                    "To control the stacking order of elements",
                    "To control the opacity of an element"
                  ],
                  answer: 3
                },
                {
                  question: "Which of the following is NOT a valid value for the 'display' CSS property?",
                  options: [
                    "block",
                    "inline",
                    "hidden",
                    "flex"
                  ],
                  answer: 3
                },
                {
                  question: "What is the purpose of the 'transition' CSS property?",
                  options: [
                    "To specify the duration of an animation",
                    "To apply a transition effect to an element's property",
                    "To control the timing function of an animation",
                    "To delay the start of an animation"
                  ],
                  answer: 2
                },
                {
                  question: "Which of the following is NOT a valid CSS length unit?",
                  options: [
                    "dp",
                    "px",
                    "em",
                    "rem"
                  ],
                  answer: 1
                },
                {
                  question: "What is the purpose of the 'flex-direction' property in CSS Flexbox?",
                  options: [
                    "To define the direction in which flex items are placed in the flex container",
                    "To define the order of flex items",
                    "To define the alignment of flex items along the main axis",
                    "To define the alignment of flex items along the cross axis"
                  ],
                  answer: 1
                },
                {
                  question: "Which CSS property is used to create rounded corners?",
                  options: [
                    "border-radius",
                    "corner-radius",
                    "round-corners",
                    "border-style"
                  ],
                  answer: 1
                },
                {
                  question: "What is the purpose of the 'overflow' CSS property?",
                  options: [
                    "To specify the color of text",
                    "To specify the alignment of text",
                    "To specify how content should be handled when it overflows its container",
                    "To specify the font size of text"
                  ],
                  answer: 3
                },
                {
                  question: "Which HTML element is used to create a hyperlink?",
                  options: [
                    "<a>",
                    "<link>",
                    "<href>",
                    "<hyperlink>"
                  ],
                  answer: 1
                },
                {
                  question: "What is the purpose of the 'alt' attribute in an HTML <img> tag?",
                  options: [
                    "To provide additional styling to the image",
                    "To specify the alignment of the image",
                    "To define the image source",
                    "To provide alternative text for the image"
                  ],
                  answer: 4
                },
                {
                  question: "What is the purpose of the 'role' attribute in HTML?",
                  options: [
                    "To specify the type of content",
                    "To provide additional styling to an element",
                    "To define the relationship between elements",
                    "To define the accessibility role of an element"
                  ],
                  answer: 4
                },
                {
                  question: "Which of the following is NOT a valid HTML5 semantic element?",
                  options: [
                    "<article>",
                    "<div>",
                    "<header>",
                    "<footer>"
                  ],
                  answer: 2
                },
                {
                  question: "What does the 'target' attribute in an HTML <a> tag do?",
                  options: [
                    "Specifies the URL of the link",
                    "Opens the link in a new window or tab",
                    "Specifies the type of content",
                    "Provides alternative text for the link"
                  ],
                  answer: 2
                },
                {
                  question: "What does the 'scope' attribute in an HTML <th> tag do?",
                  options: [
                    "Specifies the alignment of the table header",
                    "Specifies the scope of the table cell",
                    "Specifies the background color of the table header",
                    "Specifies the font size of the table header"
                  ],
                  answer: 2
                },
                {
                  question: "What is the purpose of the 'type' attribute in an HTML <input> tag?",
                  options: [
                    "To specify the input method",
                    "To specify the data type expected by the input field",
                    "To specify the maximum length of the input field",
                    "To specify the default value of the input field"
                  ],
                  answer: 2
                },
                {
                  question: "Which of the following is NOT a valid value for the 'type' attribute in an HTML <input> tag?",
                  options: [
                    "text",
                    "password",
                    "email",
                    "string"
                  ],
                  answer: 4
                },
                {
                  question: "What is the purpose of the 'required' attribute in an HTML <input> tag?",
                  options: [
                    "To specify that the input field must be filled out before submitting the form",
                    "To specify the default value of the input field",
                    "To specify the maximum length of the input field",
                    "To specify the alignment of the input field"
                  ],
                  answer: 1
                },
                {
                  question: "What does the 'autocomplete' attribute in an HTML <form> tag do?",
                  options: [
                    "Enables browser autocomplete for the form fields",
                    "Specifies the action to be performed when the form is submitted",
                    "Specifies the method used to send form data",
                    "Specifies the name of the form"
                  ],
                  answer: 1
                },
                {
                  question: "Which of the following is NOT a valid HTTP response header?",
                  options: [
                    "Content-Type",
                    "Location",
                    "Cache-Control",
                    "Request-Type"
                  ],
                  answer: 4
                },
                {
                  question: "What is the purpose of the 'Content-Type' HTTP header?",
                  options: [
                    "To specify the type of content being sent in the HTTP request",
                    "To specify the type of content being sent in the HTTP response",
                    "To specify the location of the requested resource",
                    "To specify the maximum age of the response content in cache"
                  ],
                  answer: 2
                },
                {
                  question: "Which HTTP status code indicates that the requested resource has been permanently moved to a new location?",
                  options: [
                    "301",
                    "200",
                    "404",
                    "500"
                  ],
                  answer: 1
                },
                {
                  question: "What does the 'PUT' HTTP request method do?",
                  options: [
                    "Creates a new resource",
                    "Updates an existing resource",
                    "Deletes an existing resource",
                    "Retrieves a representation of the requested resource"
                  ],
                  answer: 2
                },
                {
                  question: "What does the 'DELETE' HTTP request method do?",
                  options: [
                    "Creates a new resource",
                    "Updates an existing resource",
                    "Deletes an existing resource",
                    "Retrieves a representation of the requested resource"
                  ],
                  answer: 3
                },
                {
                  question: "Which of the following is NOT a benefit of using version control systems like Git?",
                  options: [
                    "Ability to collaborate with other developers",
                    "Ability to track changes and revert to previous versions",
                    "Ability to obfuscate code to prevent unauthorized access",
                    "Ability to work on multiple features simultaneously"
                  ],
                  answer: 3
                },
                {
                  question: "What does the acronym 'REST' stand for in the context of web services?",
                  options: [
                    "Representational State Transfer",
                    "Remote Endpoint Service Technology",
                    "Resource Entity Service Technology",
                    "Relational Entity Service Transfer"
                  ],
                  answer: 1
                },
                {
                  question: "What is the purpose of the 'Access-Control-Allow-Origin' header in HTTP responses?",
                  options: [
                    "To specify the allowed origins for cross-origin requests",
                    "To specify the content type of the response",
                    "To specify the caching policy for the response",
                    "To specify the authentication method to be used"
                  ],
                  answer: 1
                },
                {
                  question: "What is the purpose of the 'npm' command in Node.js?",
                  options: [
                    "To manage project dependencies",
                    "To start a new Node.js project",
                    "To install Node.js itself",
                    "To run JavaScript code in the browser"
                  ],
                  answer: 1
                },
                {
                  question: "Which of the following is NOT a valid way to declare a variable in JavaScript?",
                  options: [
                    "variable",
                    "var",
                    "let",
                    "const"
                  ],
                  answer: 1
                },
                {
                  question: "What does the 'npm install' command do?",
                  options: [
                    "Installs a Node.js package globally",
                    "Installs a Node.js package locally in the current project",
                    "Updates all installed Node.js packages",
                    "Removes a Node.js package"
                  ],
                  answer: 2
                },
                {
                  question: "What is the purpose of the 'require()' function in Node.js?",
                  options: [
                    "To include external JavaScript files",
                    "To declare a new variable",
                    "To install Node.js packages",
                    "To include built-in Node.js modules or external modules"
                  ],
                  answer: 4
                },
                {
                  question: "What is the purpose of the 'module.exports' object in Node.js?",
                  options: [
                    "To export functions, objects, or primitive values from a module",
                    "To import functions, objects, or primitive values into a module",
                    "To define the main entry point of a Node.js application",
                    "To manage project dependencies"
                  ],
                  answer: 1
                },
                {
                  question: "Which of the following is NOT a valid HTTP response status code?",
                  options: [
                    "204",
                    "300",
                    "400",
                    "503"
                  ],
                  answer: 2
                },
                {
                  question: "What does the 'next()' function do in Express.js middleware?",
                  options: [
                    "Passes control to the next middleware function",
                    "Sends an HTTP response to the client",
                    "Starts the Express.js server",
                    "Closes the current HTTP request"
                  ],
                  answer: 1
                },
                {
                  question: "What is the purpose of the 'body-parser' middleware in Express.js?",
                  options: [
                    "To parse incoming request bodies in middleware before handlers",
                    "To render HTML templates",
                    "To handle authentication and authorization",
                    "To create RESTful APIs"
                  ],
                  answer: 1
                },
                {
                  question: "Which of the following is NOT a valid method for sending data in an HTTP request with Axios?",
                  options: [
                    "axios.get()",
                    "axios.post()",
                    "axios.delete()",
                    "axios.update()"
                  ],
                  answer: 4
                },
                {
                  question: "What is the purpose of the 'cors' middleware in Express.js?",
                  options: [
                    "To enable cross-origin resource sharing",
                    "To parse incoming request bodies",
                    "To handle authentication and authorization",
                    "To create RESTful APIs"
                  ],
                  answer: 1
                },
                {
                  question: "What is the purpose of the 'dotenv' module in Node.js?",
                  options: [
                    "To load environment variables from a .env file into process.env",
                    "To install Node.js packages",
                    "To create RESTful APIs",
                    "To handle authentication and authorization"
                  ],
                  answer: 1
                },
                {
                  question: "Which of the following is NOT a valid HTTP request method?",
                  options: [
                    "MOVE",
                    "OPTIONS",
                    "TRACE",
                    "PUSH"
                  ],
                  answer: 4
                },
                {
                  question: "What is the purpose of the 'ejs' module in Express.js?",
                  options: [
                    "To render dynamic HTML views",
                    "To handle HTTP requests",
                    "To create RESTful APIs",
                    "To manage project dependencies"
                  ],
                  answer: 1
                },
                {
                  question: "What does the 'use strict' directive do in JavaScript?",
                  options: [
                    "Enforces stricter parsing and error handling",
                    "Enables experimental features",
                    "Disables strict mode",
                    "Allows the use of undeclared variables"
                  ],
                  answer: 1
                },
                  {
                    question: "What is the purpose of the 'innerHTML' property in JavaScript?",
                    options: [
                      "To change the CSS styles of an element",
                      "To add or change the HTML content inside an element",
                      "To access the attributes of an element",
                      "To select an element by its ID"
                    ],
                    answer: 2
                  },
                  {
                    question: "Which of the following is NOT a valid way to define a string in JavaScript?",
                    options: [
                      "let str = 'Hello World';",
                      "let str = new String('Hello World');",
                      "let str = `Hello World`;",
                      "let str = String(123);"
                    ],
                    answer: 4
                  },
                  {
                    question: "What is the purpose of the 'toUpperCase()' method in JavaScript?",
                    options: [
                      "To convert a string to lowercase letters",
                      "To convert a string to uppercase letters",
                      "To remove leading and trailing whitespace from a string",
                      "To split a string into an array of substrings"
                    ],
                    answer: 2
                  },
                  {
                    question: "What does the 'concat()' method do in JavaScript?",
                    options: [
                      "Combines two or more arrays",
                      "Adds new elements to the end of an array",
                      "Joins two or more strings",
                      "Sorts the elements of an array"
                    ],
                    answer: 3
                  },
                  {
                    question: "What is the purpose of the 'slice()' method in JavaScript?",
                    options: [
                      "Removes the last element from an array",
                      "Returns a copy of a portion of an array",
                      "Reverses the order of the elements in an array",
                      "Joins all elements of an array into a string"
                    ],
                    answer: 2
                  },
                  {
                    question: "Which of the following is NOT a valid comparison operator in JavaScript?",
                    options: [
                      "===",
                      "!==",
                      "<=",
                      "><"
                    ],
                    answer: 4
                  },
                  {
                    question: "What will be the result of the expression '10 > 9 && 5 < 4'?",
                    options: [
                      "true",
                      "false",
                      "undefined",
                      "null"
                    ],
                    answer: 2
                  },
                  {
                    question: "Which JavaScript method is used to remove the last element from an array?",
                    options: [
                      "pop()",
                      "shift()",
                      "slice()",
                      "splice()"
                    ],
                    answer: 1
                  },
                  {
                    question: "What is the purpose of the 'Math.random()' function in JavaScript?",
                    options: [
                      "To round a number to the nearest integer",
                      "To generate a random number between 0 (inclusive) and 1 (exclusive)",
                      "To return the largest integer less than or equal to a given number",
                      "To return the smallest integer greater than or equal to a given number"
                    ],
                    answer: 2
                  },
                  {
                    question: "What does the 'typeof' operator do in JavaScript?",
                    options: [
                      "Returns the data type of a variable or expression",
                      "Converts a value to a boolean",
                      "Converts a value to a string",
                      "Converts a value to a number"
                    ],
                    answer: 1
                  },
                  {
                    question: "What is the purpose of the 'setTimeout()' function in JavaScript?",
                    options: [
                      "To pause the execution of a function for a specified number of milliseconds",
                      "To execute a function repeatedly at a fixed interval",
                      "To remove a function from the call stack",
                      "To execute a function after a specified number of milliseconds"
                    ],
                    answer: 4
                  },
                  {
                    question: "What does the 'JSON.stringify()' method do in JavaScript?",
                    options: [
                      "Parses a JSON string and returns a JavaScript object",
                      "Converts a JavaScript object into a JSON string",
                      "Compares two JSON objects for equality",
                      "Checks if a value is a valid JSON string"
                    ],
                    answer: 2
                  },
                  {
                    question: "What is the purpose of the 'addEventListener()' method in JavaScript?",
                    options: [
                      "To remove an event listener from an element",
                      "To add an event listener to an element",
                      "To execute a function immediately",
                      "To modify the style of an element"
                    ],
                    answer: 2
                  },
                  {
                    question: "What does the 'preventDefault()' method do in JavaScript?",
                    options: [
                      "Stops the propagation of an event",
                      "Prevents the default action associated with an event",
                      "Removes an event listener",
                      "Executes a function after an event occurs"
                    ],
                    answer: 2
                  },
                  {
                    question: "What does the 'stopPropagation()' method do in JavaScript?",
                    options: [
                      "Prevents the default action associated with an event",
                      "Stops the propagation of an event",
                      "Removes an event listener",
                      "Executes a function after an event occurs"
                    ],
                    answer: 2
                  },
                  {
                    question: "What is the purpose of the 'event.target' property in JavaScript?",
                    options: [
                      "To access the event type",
                      "To access the event object",
                      "To access the target element that triggered the event",
                      "To access the parent element of the target element"
                    ],
                    answer: 3
                  },
                  {
                    question: "Which of the following is NOT a valid HTTP request method?",
                    options: [
                      "POST",
                      "PATCH",
                      "PUT",
                      "FETCH"
                    ],
                    answer: 4
                  },
                  {
                    question: "What is the purpose of the 'fetch()' function in JavaScript?",
                    options: [
                      "To perform arithmetic calculations",
                      "To manipulate strings",
                      "To make asynchronous HTTP requests",
                      "To format dates"
                    ],
                    answer: 3
                  },
                  {
                    question: "Which of the following is NOT a valid HTTP response status code?",
                    options: [
                      "202",
                      "302",
                      "404",
                      "500"
                    ],
                    answer: 2
                  },
                  {
                    question: "What does API stand for?",
                    options: [
                      "Automated Programming Interface",
                      "Application Programming Interface",
                      "Automated Program Integration",
                      "Application Program Integration"
                    ],
                    answer: 2
                  },
                  {
                    question: "What is the purpose of the 'localStorage' object in JavaScript?",
                    options: [
                      "To store data that will be cleared when the browser session ends",
                      "To manipulate the DOM",
                      "To make HTTP requests",
                      "To store data that will persist even after the browser session ends"
                    ],
                    answer: 4
                  },
                  {
                    question: "Which of the following is NOT a valid way to declare a variable in JavaScript?",
                    options: [
                      "variable",
                      "var",
                      "let",
                      "const"
                    ],
                    answer: 1
                  },
                  {
                    question: "What does the 'createElement()' method do in JavaScript?",
                    options: [
                      "To modify the contents of an HTML element",
                      "To remove an HTML element",
                      "To create a new HTML element",
                      "To add a class to an HTML element"
                    ],
                    answer: 3
                  }
                
            
    ]
    
    let startBtn = document.getElementById('start')
    let quizContainer = document.getElementById('quizContainer')
    let ques = document.getElementById('ques')
    let opt1 = document.getElementById('opt1')
    let opt2 = document.getElementById('opt2')
    let opt3 = document.getElementById('opt3')
    let opt4 = document.getElementById('opt4')
    let nextBtn = document.getElementById('nextBtn')
    let scoreEle = document.getElementById('score')
    let queEle = document.getElementById('queEle')
    let result = document.getElementById('result')
    let total = document.getElementById('total')
    let resultContainer = document.getElementById('resultContainer')
    
    let selectedOpt;
    
    let n=0;
    ques.innerText = questions[n].question
    opt1.innerText = questions[n].options[0]
    opt2.innerText = questions[n].options[1]
    opt3.innerText = questions[n].options[2]
    opt4.innerText = questions[n].options[3]
    queEle.innerText = `Questions ${n+1}/${questions.length}`

    startBtn.classList.toggle('hidden')
    quizContainer.classList.toggle('hidden')
 
    
    opt1.addEventListener('click',()=>{
        opt1.style.backgroundColor = 'lightblue'
        selectedOpt = 1;
        nextBtn.toggleAttribute('disabled')
        opt2.style.backgroundColor = 'white'
        opt3.style.backgroundColor = 'white'
        opt4.style.backgroundColor = 'white'
    })
    opt2.addEventListener('click',()=>{
        opt2.style.backgroundColor = 'lightblue'
        selectedOpt = 2;
        nextBtn.toggleAttribute('disabled')
        opt1.style.backgroundColor = 'white'
        opt3.style.backgroundColor = 'white'
        opt4.style.backgroundColor = 'white'
    })
    opt3.addEventListener('click',()=>{
        opt3.style.backgroundColor = 'lightblue'
        selectedOpt = 3;
        nextBtn.toggleAttribute('disabled')
        opt2.style.backgroundColor = 'white'
        opt1.style.backgroundColor = 'white'
        opt4.style.backgroundColor = 'white'
    })
    opt4.addEventListener('click',()=>{
        opt4.style.backgroundColor = 'lightblue'
        selectedOpt = 4;
        nextBtn.toggleAttribute('disabled')
        opt2.style.backgroundColor = 'white'
        opt3.style.backgroundColor = 'white'
        opt1.style.backgroundColor = 'white'
    })


     let score = 0;

     
        nextBtn.addEventListener('click',()=>{
            if(selectedOpt==questions[n].answer){
                if(selectedOpt==1) opt1.style.backgroundColor = 'green'
                else if(selectedOpt==2) opt2.style.backgroundColor = 'green'
                else if(selectedOpt==3) opt3.style.backgroundColor = 'green'
                else opt4.style.backgroundColor = 'green'
    
                score++;
                scoreEle.innerText = `score:${score}`
             }else {
                    if(selectedOpt==1) opt1.style.backgroundColor = 'red'
                    else if(selectedOpt==2) opt2.style.backgroundColor = 'red'
                    else if(selectedOpt==3) opt3.style.backgroundColor = 'red'
                    else opt4.style.backgroundColor = 'red'
    
                    if(questions[n].answer=='1') opt1.style.backgroundColor = 'green'
                    else if(questions[n].answer=='2') opt2.style.backgroundColor = 'green'
                    else if(questions[n].answer=='3') opt3.style.backgroundColor = 'green'
                    else opt4.style.backgroundColor = 'green'
             }
             n++;
             
             if(n==questions.length){
                result.innerText = score
                total.innerText = questions.length
                resultContainer.classList.toggle('hidden')
                quizContainer.classList.toggle('hidden')
                let tryAgain = document.getElementById('tryAgain')
                tryAgain.classList.toggle('hidden')
                tryAgain.addEventListener('click',()=>{
                    location.reload()
                })
        
             }else {
             setTimeout(()=>{
               
               ques.innerText = questions[n].question
               opt1.innerText = questions[n].options[0]
               opt2.innerText = questions[n].options[1]
               opt3.innerText = questions[n].options[2]
               opt4.innerText = questions[n].options[3]
               queEle.innerText = `Questions ${n+1}/${questions.length}`
               
             
               opt1.style.backgroundColor = 'white'
               opt2.style.backgroundColor = 'white'
               opt3.style.backgroundColor = 'white'
               opt4.style.backgroundColor = 'white'
             },500)
             
             nextBtn.toggleAttribute('disabled')
             }
             
    })
     }
    

