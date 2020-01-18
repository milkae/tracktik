import axios from "axios";
import httpAdapter from "axios/lib/adapters/http";

const instance = axios.create({
  baseURL: "https://tracktik-challenge.staffr.com",
  adapter: httpAdapter
});

export const formatOptions = (options: any) => {
  const sort = `_sort=${options.sort.field}&_order=${options.sort.order}`;
  const filters = !!options.filters
    ? `&${options.filters
        .map(({ key, value }: any) => `${key}=${value}`)
        .join("&")}`
    : "";
  const search = options.search ? `&q=${options.search}` : "";

  return sort + filters + search;
};

export default {
  searchSites(options: any) {
    return instance
      .get(`/sites?${formatOptions(options)}`)
      .then((result: any) => result.data);
  }
};
