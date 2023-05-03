import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { createClient } from 'contentful';
import React from 'react'


// 1. connection a contentful
const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});


// 2. generer ou recuperer tous les slug de mes articles
export async function getStaticPaths(){
  // je recupere mes posts dans contentful
  const res = await client.getEntries({
    content_type:"escciBlog",
  });

  const slugs = res.items.map((slug) => {
    return {
      params: {slug: slug.fields.slug},
    };
  });

  // renvoie tous les slugs dans paths
  return{
    paths: slugs,
    fallback: false // tous les slugs qui ne sont pas mon paths => page 404
  };
}

// 3. recuperer data du post en fonction du slug
export async function getStaticProps({params}){
  // recuperer la data lié au slug
  const res = await client.getEntries({
    content_type: "escciBlog",
    "fields.slug": params.slug,
  });

  // Je stock la data du post dans une variables
  const post = res.items;

  return{
    props:{
      post: post[0],
    },
  };
}

export default function Index({post}) {
  console.log("post", post);
  const {title, content, featuredImage} = post.fields;
  return (
    <div>
        <h1 className="flex justify-center text-5xl pt-2 font-bold underline" >Page Dynamique</h1>
        <div>
          <h2 className='flex justify-center text-3xl pt-4 pb-12 text-red-400 font-semibold capitalize'>{title}</h2>
          <div className='ml-auto mr-auto flex justify-center space-x-6 p-2 border-[2px] border-red-400 w-[900px] '>
            <img src={featuredImage.fields.file.url} alt={title} className='w-[300px] border-[5px] border-blue-600' />
            <div className='w-[600px]'>{documentToReactComponents(content)}</div>
          </div>
        </div>
    </div>
  )
}
