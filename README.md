# Blocks Playground App

An app to generate new boxes and move them using keyboard keys inside a square fence.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

Make sure you are using node version mentioned below
`node version: 14.17.6`

### `npm install`

This will install all the required dependencies of the project.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## How to play

- The app consists of a single page.
- On the middle there would be Sqaure box indicating the fence of the playground.
- By Default there will be a single block added on the playground at left-top ocrner.
- Default block color is white.
- On Clicking the block it will select it and make it yellow in color.
- Selected block will be able to move using W,A,S,D keyboard buttons.
- Selected block will be deleted using delete button on the keyboard.
- You can see Selected Block id on the left of the playground.
- Selected Block id = 0 means no block is selected. 
- You can see any error message if any on the left below the selected Block id.
- Below that are just keyboard buttons and there actions.

### Add button
- Add Button on the right would add a new block with a new ID inside the playground.
- The new block will get automatically selected.

### Pause/Play button
- Pause/Play Button on the right to toggle the keyboard listeners. You cannot use the keyboard to move or delete any block.


## Optimisation / Future scope
- There are further optimisations possible on the app by changing blocks data into a different data structure.
- Even re-renderings on the page can be further reduced.


`Hope you enjoy the app, I enjoyed a lot creating it!`
