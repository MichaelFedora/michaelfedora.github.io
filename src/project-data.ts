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
    name: 'michaelfedora.github.io',
    link: 'https://michaelfedora.github.io',
    caption: 'A website for myself',
    tags: [ 'Vue.js' ],
    description: 'Finally made the time to make my own website. Sure, maybe it won\'t win awards, but it\'s me, and I quite like it!',
    details: [
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
  }
]; // basically json...

export default ProjectData;
