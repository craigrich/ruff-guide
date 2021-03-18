import { Entry, Asset } from 'contentful';

export type ArrayOfEntries<T> = Array<Entry<T>>;

export interface HomePageLayout {
  name: string;
  posts: ArrayOfEntries<Post>;
}

export interface Post {
  readonly title: string;
  readonly slug: string;
  readonly heroImage: Asset;
  readonly content: { data: any; content: any; nodeType: string };
}
