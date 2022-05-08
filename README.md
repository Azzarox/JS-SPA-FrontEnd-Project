# JS-SPA-FrontEnd-Project
Small Front-End project which is a Single Page Application and uses Firebase for authentication and database.

# The project
Link: https://fir-project-39721.web.app/

## Project overview:
1. Sign-Up
2. Sign-In
3. View all created photos from other users and you respectively
4. Create a photo
5. Edit a photo
6. Delete a photo
7. Comment a photo
8. Like a photo
9. Search photo
10. View your profile
11. Edit your profile
12. View your created photos in the profile page

**The Project is responsive 
**Price functionality is currently not working due to restrictions in the back-end

# Developing Instructions
1. Run `npm start` to start the lite-server for dynamic changes while developing.
2. Run `npm run watch` to update the `dist`.

# Notes about Developing
1. If want to add a new `.css` file. After creating it, it needs to be added to the `app.js` as an import so the webpack sees it.

# Dependencies and packages used
1. Webpack as a module bundler.
2. Firebase as a backend as a service
2.1 Firebase Authentication
2.2 Firebase Firestore Database
2.3 Algolia Search (instantsearch.js) Extension to Firestore for a searching functionality
3. `lit-html` as a templating engine.
4. `page.js` as a router.
5. Other dependencies and plugins for webpack which could be found in the `package.json` file.

