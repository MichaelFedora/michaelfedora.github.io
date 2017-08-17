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
    name: 'riven-lab',
    link: 'https://michaelfedora.github.io/riven-lab',
    featured: true,
    caption: 'A small tool to explore possible Riven builds',
    tags: [ 'Vue' ],
    description: `I made a small website as a fun little project to explore possible Riven mods\n
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
    link: 'https://test.crowfall.wiki',
    featured: true,
    caption: 'An (unofficial) network of tools for Crowfall',
    tags: [ 'Angular', 'Vue', 'GraphQL', 'REST', 'Express', 'Node.js' ],
    description: 'I\'m working with Scree to make a tool-network for the Crowfall MMO. '
                  + 'What is shown below is the prototype of the Wiki WebApp, made in Angular 2 with Angular Material. '
                  + 'We ended up switching to Vue later, as Angular seemed a little heavy handed (and scree doesn\'t like decorators) '
                  + '; that\'s what is running now on the test site. '
                  + 'Node.js/Express/Rethinkdb is used for the back-end, with both a REST and a GraphQL api structure. (I love GraphQL!)',
    details: [
      {
        image: 'all-empty.png',
        title: 'The \'all\' component',
        caption: 'My beloved creation. It searches all the data objects within the wiki.'
      },
      {
        image: 'all-bard.png',
        title: 'Searching for the Bard discipline',
        caption: '..brings it up, with a formatted card to display its properties.'
      },
      {
        image: 'all-data_type-race_human.png',
        title: 'Complex Searching',
        caption: 'Filters are able to be used too, and results are based on a scoring algorithm.'
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
