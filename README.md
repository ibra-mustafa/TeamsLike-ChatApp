### don't use npm start immediately you need first to install chat engine dependency with the blow command
 
 npm install react-chat-engine
 
 then you need to sign up in chatengine.io and make a new user and a new room
 
 in app.jsx
 make a chat engine component like this one 
 <ChatEngine height="100vh"
            projectID="add the project id given when you add new project"
            userName="add the user name of you new user you made"
            userSecret="add the user password" />
 
 then we start the app 
