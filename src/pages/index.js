import Card from "@/components/Card";
import Layout from "@/components/layout/Layout";
import { createClient } from "contentful";
import Link from "next/link";

export default function Home({ posts }) {
  return (
    <Layout>
      <h1 className="text-red-500">Hello world</h1>
      {
        posts.map(post=>(
          <Link href={`post/${post.fields.slug}`}key={post.sys.id}>
          <Card
            
            title={post.fields.title} 
            excerpt={post.fields.excerpt} 
            img={post.fields.featuredImage.fields.file.url}
            slug={post.fields.slug}
            />
            </Link>
            
        ))
      }
    </Layout>
  )
}

export async function getStaticProps(){
  /* 1. connect to contentful*/
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  });

  /* 2. Recuperer ma data en cas de success pour le content_type => EscciBlog */
  // je limite a 8 posts
  const data = await client.getEntries({
    content_type:"escciBlog",
    order:"sys.createdAt",
    limit: 8,
  });

  /* 3. on envoie la data dans le props de la page */
  return{
    props: {
      posts: data.items,
  },
};
}