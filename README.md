# Mind_Blog
Mind_Blog exam preparation for JS_BackEnd

### 1. Initialize Project 
 - [x] Initialize npm project `npm init -y`
 - [x] Change module system
 - [x] Add start file `/src/index.js`
 - [x] Add dev script
 - [x] Config debugger
 - [x] Add resources

### 2. Expres
 - [x] Install express `npm i express`
 - [x] Init express server
 - [x] Setup static middleware
 - [x] Add body parser
 - [x] Add home controller
 - [x] Add route file
 - [x] Add error controller

### 3. Handlebars
 - [x] Install handlebars `npm i express-handlebars`
 - [x] Config hanlebars engine
 - [x] Use handlebars engine
 - [x] Config handlebars file extension
 - [x] Set views folder
 - [x] Add home view
 - [x] Render home view without layout `res.render('home', {layout: false});`
 - [x] Fix asset paths
 - [x] Add layout
 - [x] Add partials dir
 - [x] Config handlebars to work with mongoose documents `runtimeOptions: { allowProtoPropertiesByDefault: true, allowProtoMethodsByDefault: true }`

### 4. Database
 - [x] Install mongoose `npm i mongoose`
 - [x] Connect to db
 - [x] Add error handling on connect
 - [x] Add simple user model

### 5. Register
 - [x] Fix navigation links
 - [x] Add user controller
 - [x] Add user controller to routes
 - [x] Create register view
 - [x] Render register view
 - [x] Modify register form
 - [x] Create post route for register
 - [x] Create user service
 - [x] Redirect after successfull register
 - [x] Instal bcrypt `npm i bcrypt`
 - [x] Hash passwords before safe
 - [x] BONUS: Check if user exists

### 6. Login
 - [x] Fix login navigation link
 - [x] Add login view
 - [x] Add get login action
 - [x] Fix login form
 - [x] Add post login acion
 - [x] Add login method in userService
 - [x] Validate if user exists
 - [x] Validate password
 - [x] Install jsonwebtoke `npm i jsonwebtoken`
 - [x] Generate token
 - [x] Call userService from userController
 - [x] Send token as cookie
 - [x] Redirect to homepage
 - [x] BONUS: Extract jwt secret to constant or env 
 - [x] Auto login on register

### 7. Logout
 - [x] Add logout navigation link
 - [x] Add logout action

### 8. Authentication
 - [x] Install and use cookie-parser `npm i cookie-parser`
 - [x] Create auth middleware
    - [x] Allow if guest (no token)
    - [x] Verify token (clear session if invalid)
    - [x] Attach decoded token to req.user (if token is valid)
 - [x] Use auth middleware

### 9. Authorization
 - [x] Create isAuth middleware
 - [x] Create isGuest middleware
 - [x] Add route guards
 - [x] Add not found page

### 10. Dynamic content
 - [x] Add user data to handlebars context
 - [x] Dynamic navigation
 - [x] Dynamic titles
 - [x] BONUS: Set page title from view
  
### 11. Error handling and Validation
 - [x] Add error message in notification
 - [x] Notification conditional rendering
 - [x] Create getErrorMessage util function
 - [x] Add error handling for register
 - [x] Add register form data persistance
 - [x] Check repeatPassword in service
 - [x] BONUS: Check repeatPassword in model
 - [x] Error handling and data persistance on login 

### Bonus
 - [x] Export helpers into separate module
 - [x] Add env variable for debuging
 - [x] Add global error handler
 - [ ] Add bundler
 - [ ] Use async jwt
 - [ ] Refresh token

## Steps to Use the Skeleton Project
 - [x] Install dependencies `npm i`
 - [x] Remove old resources and add new resources `/src/public`
 - [x] Add html files to the views folder
 - [x] Rename database name
 - [x] Replace layout
   - [x] Dynamic title
   - [x] Fix resource routes
   - [x] Error notification
   - [x] Body
   - [x] Dynamic Navigation
 - [x] Replace home page
 - [x] Modify navigation links
 - [x] Modify User model
 - [x] Modify login and register controller
 - [x] Modify login and register service
 - [x] Modify token generation
 - [x] Modify login and register error handlers
 - [x] Replace login page
 - [x] Replace register page
 - [x] Replace 404 page

## Solve Mind Blog Exam Prep

### Create Blog Page
 - [x] Fix create blog navigation link
 - [x] Add blog controller
 - [x] Add controller to routes
 - [x] Add create action with render
 - [x] Add blogs folder in views
 - [x] Add create blog view
 - [x] Add blog model
 - [x] Modify create blog form
 - [x] Create blog post action
 - [x] Create blog service with create method
 - [x] Add owner on blog creation
 - [x] Add error handling

### Blogs Catalog Page
 - [x] Fix navigation link
 - [x] Add catalog view
 - [x] Add get catalog action with static blogs
 - [x] Get all blogs service
 - [x] Show dynamic blogs 

### Home page blogs
 - [x] Add get latest blogs in blog service
 - [x] Show dynamic lastest blogs on home

### Blog details
 - [x] Fix details link in blogs page
 - [x] Fix details link in home page
 - [x] Show static details page
 - [x] Add getOne method in blog service
 - [x] Show dynamic details page (without author and followers)
 - [x] Show dynamic author
 - [x] Hide buttons if not logged
 - [x] Show edit and delete button if author
 - [x] Show follow and already following buttons if logged
 - [x] Implement follow functionallity
   - [x] Add followers in blog relation
   - [x] Add follow action
   - [x] Add follow service method
   - [x] Fix follow link
 - [x] Show dynamic follwers
 - [x] Show follow button or already following buttons conditionally

### Delete blog
 - [x] Fix navigation link in details
 - [x] Add delete action
 - [x] Add delete method in blog service
  
### Edit blog
 - [x] Fix navigation link in details
 - [x] Add get edit action
 - [x] Show empty edit page
 - [x] Populate edit form with blog data
 - [x] Add post edit action
 - [x] Add edit method in blog service
 - [x] Add error handling

### Profile
 - [x] Fix navigation link
 - [x] Show static profile page
 - [x] Show dynamic user information
 - [x] Show created blogs
 - [x] Show followed blogs

## Validation and error handling

### Bonus
 - [ ] Fix sort(_id) problem
