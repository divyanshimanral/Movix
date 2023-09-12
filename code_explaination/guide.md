# For making the project form the scratch follow the folowing steps:

1. create vite app and install the folowing dependencies

```"@reduxjs/toolkit": "^1.9.1",
        "axios": "^1.2.2",
        "dayjs": "^1.11.7",
        "react": "^18.2.0",
        "react-circular-progressbar": "^2.1.0",
        "react-dom": "^18.2.0",
        "react-icons": "^4.7.1",
        "react-infinite-scroll-component": "^6.1.0",
        "react-lazy-load-image-component": "^1.5.6",
        "react-player": "^2.11.0",
        "react-redux": "^8.0.5",
        "react-router-dom": "^6.6.2",
        "react-select": "^5.7.0",
        "sass": "^1.57.1"
```

- axios: for fetching the api's
- dayjs: to have nicely formatted dates
- react-circular-progressbar:for creating progress bars
- react-icons: for icons
- react-infinite-scroll-component: for creating inifite scroll
- react-player: for creating video player
- react-redux: for creating the store for states
- react-select:
- sass: for styling

now run npm i after adding the dependecies in package.json and then start the app after runing `npm run dev` copy and add index.scss code 

2. Add all the assests: 
3. Index.html: change logo and website name 
4. Get api key from the TMBD website: using token for accessing key add the key in .env folder don't forget to add VITE_APP ahead of key name
5. api.js: In utilis folder create api.js and in it create global method for call api
6. App.jsx: 
7. Create store: store.js and  HomeSlice.jsx
8. Hooks.jsx
9. create Lazy load image component and then contentWrapper, mixins.scss
8. Create HeroBanner.jsx:
8. Components and Pages folder: Header and Footer 
11. create trending component then switch tabs, carousel, circleRating, 
12. create genreCall in app.jsx, create genres.jsx, Popular.jsx
13. Home section created
14. detail Page then detailBanner.jsx, playBtn, VideoPopup.jsx, Cast.jsx, videoSection, then make carousel in pages folder inside detail folder, Similar.jsx
15. SearchResult.jsx, spinner.jsx, MovieCard.jsx, Explore.jsx
