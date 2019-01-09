# Day 3, Exercise AM: Static HTML

## Overview

Create a static website using HTML and CSS.

You can add new pages by creating new HTML files in the `View` folder and then adding new route handlers to `index.js` in this fashion:

```
app.get("/about", (req, res) => {
  res.sendFile("about.html");
});
```

## Specification

Your website must include the following elements:

- two numbered lists

## Testing

You can run your web server by running `npm run start` and accessing `localhost:3000` in your browser to view your homepage (`index.html`).
