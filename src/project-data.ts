export interface ProjectDetail {
  image: string;
  title: string;
  caption: string
};

export interface Project {
  name: string;
  link: string;
  caption: string;
  tags: string[];
  description: string;
  featured?: boolean;
  details: { image: string, title: string, caption: string }[];
}

export const ProjectData: Project[] = [
  {
    name: 'hestia',
    link: 'https://github.com/otorno/hestia',
    featured: true,
    caption: 'Pseudo-Decentralized Storage Middleware',
    tags: [ 'Vue', 'Blockstack', 'Node.js', 'Express '],
    description: `This service was created to replace the overly-simple Gaia hub created by Blockstack PBC by not only adding the ability
to add plugins but also allow user-drivers, which, in contrast to using a hub-run storage backend like an Amazon S3 service, allow users
to use their own Dropbox to store their data -- giving them more control.\n\nIn addition, it also provides an explorer and keeps track of
all your files for you, giving you an easier time to migrate to another Hestia hub or backup the files themselves.`,
    details: [
      {
        image: 'screenshot.png',
        title: 'Overview Screenshot',
        caption: 'This is the basic overview for what the typical end-user would see: a nice explorer with their data on it, along with'
        + ' options to manage connections, import a migration index, and create an index as well.'
      }
    ]
  },
  {
    name: 'Mercurius',
    link: 'https://michaelfedora.github.io/mercurius',
    featured: true,
    caption: 'Gaia hub explorer',
    tags: [ 'Vue', 'Blockstack' ],
    description: `I created this app in order to explore what was on stored on my behalf in the official Gaia hub provided
by Blockstack PBC. There was previously no way to easily look through all the files that are stored by applications, and so
I created this in order to actually see what Apps were doing behind the scenes.`,
    details: [
      {
        image: 'sample-interface.png',
        title: 'Overview Screenshot',
        caption: 'An example of what the interface looks like while it is looking up apps and populating the explorer.'
      }
    ]
  },
  {
    name: 'ublockstack-extension',
    link: 'https://github.com/michaelfedora/unofficial-blockstack-extension',
    featured: true,
    caption: 'Adds Blockstack support to the Browser',
    tags: [ 'Vue', 'Blockstack', 'Node.js', 'Express' ],
    description: `I made a web extension to add Blockstack support to the Web browser in a more
native-friendly way, with popups instead of redirects. While it doesn't have feature parity with
the official browser, it implements everything that is required for a browser to work while being
just as easy -- if not easier -- to use.`,
    details: [
      {
        image: 'screenshot-1.png',
        title: 'Overview screenshot',
        caption: 'A basic overview of what the different elements look like, with a sample app in the background'
      }
    ]
  },
  {
    name: 'riven-lab',
    link: 'https://michaelfedora.github.io/riven-lab',
    featured: false,
    caption: 'A small tool to explore possible Riven builds',
    tags: [ 'Vue' ],
    description: `I made a small website as a fun little project to explore possible Riven mods
in Warframe, a game by Digital Extremes. It was also a great place to learn more about how Vue's
data reactivity works when handling very dynamic/volatile data.`,
    details: [
      {
        image: 'standard-page.png',
        title: 'A place to build',
        caption: `Here you can see both the preview on the left as well as all of the controls on the right.
It's fairly good at input validation as well, such as capping the cost at 10 to 18 among other things.`
      },
      {
        image: 'handling-errors.png',
        title: 'Handling Errors',
        caption: `There are rules when creating Rivens, which mainly center around the different stats that can be
on one. This includes having a minimum of 2 stats, a maximum of 4, requiring the existence (or non-) of a negative stat,
and making sure the stat is compatible with the weapon type, such as having something concerning Slide Attacks on a Secondary.`
      },
      {
        image: 'sharing.png',
        title: 'Sharing is caring',
        caption: `Say you found a build that you think is pretty cool or funny - like this one here. The website always keeps your
changes up to date within the Query string, so if you share the url it goes right there! Like so:
<a href="https://michaelfedora.github.io/riven-lab/?itemName=Opticor&itemType=0&cost=18&polarity=zenurik&PunctureDamage=188.90&ImpactDamage=106.40&Recoil=218.30">link</a>.`
      }
    ]
  },
  {
    name: 'malekai.network',
    link: 'https://malekai.org',
    featured: false,
    caption: 'An (unofficial) wiki for Crowfall',
    tags: [ 'Vue', 'GraphQL', 'REST', 'Express', 'Node.js' ],
    description: `I worked with <a href='https://github.com/TheScree'>Scree</a> to make a Wiki for the MMO called Crowfall.
The screenshots below are the version that I worked on, which was made using Vue.js for the frontend. Scree did most of the
design work and I implemented it in code. The backend I made in Node.js with Express, with both a REST interface as well
as a GraphQL interface, which was a lot of fun to implement. It also runs off RethinkDB in the background with microservices
to generate changelogs (Scree did that part).`,
    details: [
      {
        image: 'home.png',
        title: 'Home Page',
        caption: 'This is the home page for malekai.org, where a beautiful splash and search bar can be seen, as well as the tabs up top.'
      },
      {
        image: 'search.png',
        title: 'Search',
        caption: 'This is the search in use, displaying all items that match where some text field includes your query.'
      },
      {
        image: 'disciplines.png',
        title: 'Disciplines (Category Page)',
        caption: 'This is what a category page looks like, with a table that has filters on it and a neat overview display of each entry.'
      },
      {
        image: 'discipline-upper.png',
        title: 'Discipline (Item; Upper)',
        caption: 'The upper half of the item page, where the item with it\'s description, attributes, and child-items are shown.'
      },
      {
        image: 'discipline-lower.png',
        title: 'Discipline (Item; Lower)',
        caption: 'The lower half of the item page, where compatible parent-items are shown (as links), and the item\'s changelog is displayed.'
      }
    ]
  },
  {
    name: 'michaelfedora.github.io',
    link: 'https://michaelfedora.github.io',
    caption: 'A website for myself',
    tags: [ 'Vue' ],
    description: 'Finally made the time to make my own website. Sure, maybe it won\'t win awards, but it\'s me, and I quite like it!',
    details: [
    ]
  },
]; // basically json...

export default ProjectData;
