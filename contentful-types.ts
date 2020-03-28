import { Asset, Entry } from 'contentful';

export type arrayOfEntries<T> = Array<Entry<T>>;

export interface HomePageLayout {
  name: string;
  regions: arrayOfEntries<Region>;
  featuredHotels: arrayOfEntries<Hotel>;
  foodieHighlights: arrayOfEntries<Hotel>;
}

export interface Room {
  name: string;
  gallery: Array<Asset>;
  link: string;
}

export interface Hotel {
  name: string;
  description: string;
  gallery: Asset[];
  rooms: arrayOfEntries<Room>;
}

export interface Region {
  name: string;
  description: string;
  gallery: Array<Asset>;
  hotels: arrayOfEntries<Hotel>;
}
