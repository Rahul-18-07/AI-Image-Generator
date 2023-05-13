GitHub repository : `https://github.com/Rahul-18-07/AI-Image-Generator`
Working Link of Website : `https://imggenrator.netlify.app/`

# AI Image Generator

The AI Image Generator is a web-based application that generates images on the basis of images and saves image in database which can be used by the comuunity.

## Features

- Create Image on basis of a prompt
- Can share with it community
- Community images can be downloaded

## System Requirements 

 1. Operating System: You can use any operating system, including Windows, Linux, or macOS.

 2. Node.js and NPM: You need to have Node.js and NPM (Node Package Manager) installed on your system. You can download and install the latest version of Node.js and NPM from their official website.

 3. MongoDB: You need to have MongoDB installed on your system to store the data. You can download and install the latest version of MongoDB from their official website.

 4. Code Editor: You need a code editor to write and edit the code. Some popular code editors for MERN stack development include Visual Studio Code, Sublime Text, Atom, and WebStorm.
 
 5. Browser: You need a web browser to view and test your application. Some popular browsers for MERN stack development include Google Chrome, Mozilla Firefox, and Safari.

## Technologies

The AI Image Generator is built using the following technologies:

- Frontend: React, Tailwind CSS
- Backend: Node.js, Express.js, MongoDB

## Folders
  
 1. Cilent : Contains React and Tailwind CSS of Frontend.
 2. Server : Contains NodeJS and MongoDB routes. 

## Installation

1. Install dependencies using `npm install` in both the client and server folders
2. Create a `.env` file in the server folder and add the following environment variables:

   - OPENAI_API_KEY= open AI api key
   - MONGODB_URL= mongoDB String URL
   - CLOUDINARY_CLOUD_NAME= Name of cloudinary
   - CLOUDINARY_API_KEY=" API key of Cloudinary
   - CLOUDINARY_API_SECRET= Secret API key
   
3. Run the server using `npm start` in the server folder
4. Run the client using `npm run dev` in the client folder

## Usage

1. Open your web browser and go to `http://127.0.0.1:5173/`
2. Enter your name and Image prompt
3. Generate new image by clicking on generate image
4. Share the image using share with community button
5. Download any image by hovering over it and clicking download image.

## Known Issues/Limitations

- Images are generated using Dalle API.
- Images can be deleted

## Contact

If you have any questions or feedback about the  AI Image Generator, you can contact the maintainers at [rahultnw8527@gmail.com].

## Resources

- [React documentation](https://reactjs.org/docs/getting-started.html)
- [Tailwind CSS documentation](https://v2.tailwindcss.com/docs)
- [Node.js documentation](https://nodejs.org/en/docs/)
- [Express.js documentation](https://expressjs.com/)
- [MongoDB documentation](https://docs.mongodb.com/)
