/**
 * @type {IMy} My
 */
var My = My || { };

My.Projects = [
  {
    "name": "michaelfedora.github.io",
    "caption": "A website for myself",
    "tags": [ "Vue.js" ],
    "description": "Finally made the time to make my own website. Sure, maybe it won't win awards, but it's me, and I quite like it!",
    "details": [
    ]
  },
  {
    "name": "crowfall.wiki",
    "featured": true,
    "caption": "An unofficial Wiki for Crowfall",
    "tags": [ "Angular2", "Express", "Node.js" ],
    "description": "I worked with Scree to make a WebApp Wiki for the Crowfall MMO. We used Angular 2 for the frontend, Angular Material 2 for development styling, and a Node.js/Express/Rethinkdb for the backend",
    "details": [
      {
        "image": "all-empty.png",
        "title": "The \"all\" component",
        "caption": "My beloved creation. It searches all the data objects within the wiki."
      },
      {
        "image": "all-bard.png",
        "title": "Searching for the Bard discipline",
        "caption": "..brings it up, with a formatted card to display its properties."
      },
      {
        "image": "all-data_type-race_human.png",
        "title": "Complex Searching",
        "caption": "Filters are able to be used too, and results are based on a scoring algorithm."
      }
    ]
  }
]; // basically json...
