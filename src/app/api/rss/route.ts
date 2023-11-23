import { env } from "~/env/client.mjs";
import { Post } from "~/utils/content";

const getRss = () => {
  const posts = Post.getAll();

  const items = posts
    .map(
      (post) => `
  <item>
  <title>${post.title}</title>
  ${post.description ? `<description>${post.description}</description>` : ""}
  <link>${env.NEXT_PUBLIC_URL}${post.slug}</link>
  <guid isPermaLink="true">${env.NEXT_PUBLIC_URL}${post.slug}</guid>
  <pubDate>${new Date(post.date).toUTCString()}</pubDate>
</item>
  `,
    )
    .join("");

  const rss = `
  <?xml version="1.0" encoding="UTF-8" ?>
  <rss xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">

  <channel>
    <title>vincentdusautoir.com</title>
    <link>${env.NEXT_PUBLIC_URL}</link>
    <description>Vincent Dusautoir's Blog</description>
    ${
      posts[0]
        ? `<lastBuildDate>${new Date(
            posts[0]?.date,
          ).toUTCString()}</lastBuildDate>`
        : ""
    }
    <atom:link href="${
      env.NEXT_PUBLIC_URL
    }/api/rss" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
  
  </rss>
  `.trim();

  return new Response(rss, {
    headers: {
      "content-type": "text/xml",
    },
  });
};

export { getRss as GET };
