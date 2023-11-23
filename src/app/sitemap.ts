import { type MetadataRoute } from "next";
import { Post } from "~/utils/content";
import { absoluteUrl } from "~/utils/url";

export default function sitemap(): MetadataRoute.Sitemap {
  const simpleRoutes = ["/", "/about", "/posts", "/rss"];
  const postsSitemap: MetadataRoute.Sitemap = Post.getAll().map((post) => ({
    url: absoluteUrl(post.slug),
    lastModified: post.date,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const simpleRoutesSitemap: MetadataRoute.Sitemap = simpleRoutes.map(
    (route) => ({
      url: absoluteUrl(route),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    }),
  );

  return [...simpleRoutesSitemap, ...postsSitemap];
}
