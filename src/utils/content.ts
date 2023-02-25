import { allPages, allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";

export class Post {
  static getAll = () => {
    return allPosts
      .filter((post) => {
        return post.published || process.env.NODE_ENV === "development";
      })
      .sort((a, b) => {
        return compareDesc(new Date(a.date), new Date(b.date));
      });
  };

  static getLatest = (count = 4) => {
    return this.getAll().slice(0, count);
  };
}

export class Page {
  static getAll = () => {
    return allPages.filter((page) => {
      return page.published || process.env.NODE_ENV === "development";
    });
  };
}
