import { getCollection } from 'astro:content';

export async function getPosts() {
  return (await getCollection('blog')).filter((post) =>
    import.meta.env.DEV ? true : post.data.published
  );
}
