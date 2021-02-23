This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Photo Gallery React

An incomplete photo gallery

The following tools and libraries are preinstalled for you:

- React v17
- React Router for client-side routing
- Jest as the test runner
- React Testing Library for executing React Components
- ESLint for linting
- Prettier for auto-formatting

## Desired Features

### Image Preview

- Use the [Picsum Photos API](https://picsum.photos), `https://picsum.photos/v2/list`
- Fetch 30 images and render each image in the Gallery so it includes the image and the author name

### Image Selection

- When a user clicks on one of the images in the gallery, it should show a green border and retain a selected state even when navigating to a different route within the app
- When a user clicks on an already selected image, it should deselect
- A count of selected images should appear at the top of the gallery and update whenever selections are added or removed

### Image Search

- Implement a search box at the top of the Gallery
- As a user types, the list of images in the Gallery should filter based on the matching author name

### Image Detailed View

- When a user clicks on an image, they should be taken to a detail view for that image which includes extended information such as `width`, `height`, `url` and `download_url`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
