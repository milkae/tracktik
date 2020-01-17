export interface Site {
  id: string;
  title: string;
  images: string[];
  contacts: SiteContacts;
  [propName: string]: any;
}

export interface SiteContact {
  firstname: string;
  lastname: string;
  [propName: string]: any;
}

export interface SiteContacts {
  main: any;
}

export interface Sort {
  field: string;
  order: string;
}

export interface SitesMenuOptions {
  filters: string[];
  sort: Sort;
  search: string;
}

export interface SitesState {
  sites: Site[];
  sitesMenuOptions: SitesMenuOptions;
}
