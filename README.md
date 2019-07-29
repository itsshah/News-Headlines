# News-Headlines
Simple static news headline link reader.

Works as a Progressive Web App 

Set up with Web Components and Service Workers.

Uses Parcel.js as a Module Bundler https://parceljs.org/getting_started.html

# Start

Scripts set up in package.json to get started
"dev": "parcel index.html",
"build": "parcel build index.html"

Use "npm run dev" for a dev server or "npm run build" for production

Connects to https://newsapi.org for the api.

Register for a key here https://newsapi.org/register and add it to the file util.js as const apiKey = "Your Key Here";
