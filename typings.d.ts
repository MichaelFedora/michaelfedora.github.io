declare var Vue: any;
declare var VueMaterial: any;

declare interface IMy {
  Projects?: {
    name: string,
    caption: string,
    tags: string[],
    description: string,
    featured?: boolean,
    details: { image: string, title: string, caption: string }[]
  }[];
}
