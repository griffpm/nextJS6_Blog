import CardBlog from '@/components/CardBlog';
import CardTag from '@/components/CardTag';
import Layout from '@/components/layout/Layout';
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
    <Layout>
      <div id='singlepage'>
      <div id='single_content'>
        <div id='column1'>
          <img src={featuredImage.fields.file.url} alt={title} />
          <h2 >{title}</h2>
          <div>{documentToReactComponents(content)}</div>
          <h2>#2 Créative Worpress themes</h2>
          <p>Morbi consequat viverra massa sed semper. Ut tempus nec libero et dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum pretium cursus leo, ac tincidunt eros scelerisque et. Duis porta faucibus vestibulum. Proin id mauris accumsan, malesuada massa vitae, tristique nisi. Vestibulum lacinia hendrerit risus ac porttitor. Aliquam erat volutpat. Phasellus pellentesque arcu et magna volutpat, id tincidunt risus laoreet. Etiam auctor ultrices quam sed aliquam. In tempor dolor turpis, vel pharetra nisi consequat eu.
          <br/>
          Duis dapibus lacinia pretium. Quisque tincidunt, velit at condimentum scelerisque, ante purus tempor orci, eu consectetur ex leo eu massa. Sed ac congue massa. Sed posuere ultrices arcu, eu ultrices ante iaculis eu. Sed elit sem, vestibulum sed porttitor et, convallis at nibh. Cras sodales, ipsum quis auctor vestibulum, lectus nisl consequat lorem, non ultricies nisi purus blandit risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam et eleifend eros.</p>
          <img src="/img/image_2.jpg" alt="" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quam justo, lacinia sit amet metus quis, semper bibendum tellus. Nam condimentum quis dolor quis bibendum. Vestibulum vel viverra massa. Aliquam erat volutpat. Duis quis metus nec leo dictum auctor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc tristique cursus tempor. Etiam vel nulla enim. Mauris nec ligula ante. Donec at hendrerit arcu. Donec eu mollis diam. Sed eleifend ex sed tristique commodo. Aliquam id risus mollis, egestas nisi eu, faucibus libero. Quisque aliquet ipsum ac nisi viverra, et dignissim erat elementum. Donec posuere ultricies sapien.
          <br/>
          Morbi consequat viverra massa sed semper. Ut tempus nec libero et dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum pretium cursus leo, ac tincidunt eros scelerisque et. Duis porta faucibus vestibulum. Proin id mauris accumsan, malesuada massa vitae, tristique nisi. Vestibulum lacinia hendrerit risus ac porttitor. Aliquam erat volutpat. Phasellus pellentesque arcu et magna volutpat, id tincidunt risus laoreet. Etiam auctor ultrices quam sed aliquam. In tempor dolor turpis, vel pharetra nisi consequat eu.
          <br/>
          Duis dapibus lacinia pretium. Quisque tincidunt, velit at condimentum scelerisque, ante purus tempor orci, eu consectetur ex leo eu massa. Sed ac congue massa. Sed posuere ultrices arcu, eu ultrices ante iaculis eu. Sed elit sem, vestibulum sed porttitor et, convallis at nibh. Cras sodales, ipsum quis auctor vestibulum, lectus nisl consequat lorem, non ultricies nisi purus blandit risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam et eleifend eros.
          <br/>
          Sed sodales ullamcorper leo, sit amet viverra sem fringilla et. Maecenas non nulla eget sapien ultricies ullamcorper non nec arcu. Praesent erat arcu, placerat quis sapien eget, efficitur molestie lorem. Nullam nec placerat metus. Phasellus viverra eu ex at sodales. Mauris interdum et justo in aliquam. Etiam ultricies dolor tellus, eu cursus ligula pulvinar vel. Quisque vehicula tristique molestie. Donec arcu lectus, pellentesque sit amet lorem egestas, maximus luctus leo. Vivamus hendrerit convallis ex eu mollis.</p>
          
        </div>
        <div id='column2'>
          <div id='search'></div>
          <div id='category'>
            <h3>Categories</h3>
            <p>Illustration</p>
            <p>Branding</p>
            <p>Application</p>
            <p>Design</p>
            <p>Marketing</p>
          </div>
          <div id='recent'>
            <h3>Recent Blog</h3>
            <CardBlog img="/img/image_1.jpg" date="19/10/22" author="Admin" nbCom="6" title={title} />
            <CardBlog img="/img/image_4.jpg" date="19/10/22" author="Admin" nbCom="18" title="un autre article" />
            <CardBlog img="/img/image_8.jpg" date="19/10/22" author="Admin" nbCom="2" title="Encore un autre" />
          </div>
          <div id='tag'>
            <h3>Tag Cloud</h3>
            <div id='tags'>
              <CardTag tag="cat"/>
              <CardTag tag="abstract"/>
              <CardTag tag="people"/>
              <CardTag tag="person"/>
              <CardTag tag="model"/>
              <CardTag tag="delicious"/>
              <CardTag tag="dessert"/>
              <CardTag tag="drinks"/>
            </div>
            
          </div>
          <div id='paragraph'>
            <h3>Paragraph</h3>
            <p>orem ipsum dolor sit amet, consectetur adipiscing elit. Ut quam justo, lacinia sit amet metus quis, semper bibendum tellus. Nam condimentum quis dolor quis bibendum. Vestibulum vel viverra massa. Aliquam erat volutpat. Duis quis metus nec leo dictum auctor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc tristique cursus tempor. Etiam vel nulla enim. Mauris nec ligula ante. Donec at hendrerit arcu. Donec eu mollis diam. Sed eleifend ex sed tristique commodo. Aliquam id risus mollis, egestas nisi eu, faucibus libero. Quisque aliquet ipsum ac nisi viverra, et dignissim erat elementum. Donec posuere ultricies sapien.</p>
          </div>
        </div>
      </div>

      </div>
    </Layout>










  )
}
