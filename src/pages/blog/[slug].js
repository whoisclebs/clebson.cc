import { getSlug, getArticleFromSlug } from "../../utils/mdx"
import dayjs from 'dayjs'
import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import rehypeSlug from 'rehype-slug'
import { MDXRemote } from 'next-mdx-remote'
import rehypeHighlight from 'rehype-highlight'
import rehypeCodeTitles from 'rehype-code-titles'
import { serialize } from 'next-mdx-remote/serialize'
import 'highlight.js/styles/atom-one-dark-reasonable.css'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import Navbar from '../../components/navbar/navbar'
import {DiscussionEmbed} from "disqus-react"
import { useRouter } from 'next/router'

export async function getStaticPaths() {
    // getting all paths of each article as an array of
    // objects with their unique slugs
    const paths = (await getSlug()).map((slug) => ({ params: { slug } }))
  
    return {
      paths,
      // in situations where you try to access a path
      // that does not exist. it'll return a 404 page
      fallback: false,
    }
}

export async function getStaticProps({ params }) {
    //fetch the particular file based on the slug
    const { slug } = params
    const { content, post } = await getArticleFromSlug(slug)
  
    const mdxSource = await serialize(content, {
      mdxOptions: {
        rehypePlugins: [
          rehypeSlug,
          [
            rehypeAutolinkHeadings,
            {
              properties: { className: ['anchor'] },
            },
            { behaviour: 'wrap' },
          ],
          rehypeHighlight,
          rehypeCodeTitles,
        ],
      },
    })
  
    return {
      props: {
        post: {
          source: mdxSource,
          post,
        },
      },
    }
}

export default function Blog({ post: { source, post } }) {
    const router = useRouter();
    const disqusConfig = {
        url: "https://clebson.cc/"+router.asPath,
        identifier: post.slug, // Single post id
        title: post.title // Single post title
    }
    return (
        <>
          <Head>
            <title> {post.title} </title>
            <meta name="description" content={post.excerpt} />
          </Head>
          <section className="bg-white dark:bg-gray-900 min-h-screen">
            <Navbar/>
            <main className="pt-24 pb-16 lg:pt-24 lg:pb-24 bg-white dark:bg-gray-900">
              <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
                <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert text-justify whitespace-pre-line">
                  <header className="mb-4 lg:mb-6 not-format">
                    <address className="flex items-center mb-6 not-italic">
                      <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                        <img className="mr-4 w-16 h-16 rounded-full" src="/clebson.png" alt="Jese Leos"/>
                        <div>
                          <a href="#" rel="author" className="text-xl font-bold text-gray-900 dark:text-white">Clebson</a>
                          <p className="text-base font-light text-gray-500 dark:text-gray-400">Programador, professor & CEO Ledthinking Academy e Ignilabs</p>
                          <p className="text-base font-light text-gray-500 dark:text-gray-400">
                            <time>            
                              {dayjs(post.publishedAt).format('MMMM D, YYYY')} 
                              &mdash;{' '}
                              {post.readingTime}
                            </time>
                          </p>
                        </div>
                      </div>
                    </address>
                    <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">{post.title}</h1>
                  </header>
                  <div className="content">
                    <MDXRemote {...source} components={{ Image }} />
                  </div>
                  <section className="not-format">
                    <div className="flex justify-between items-center mb-6 pt-6">
                      <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">Comentarios</h2>
                    </div>
                    <DiscussionEmbed
                      shortname={"clebson"}
                      config={disqusConfig}
                    />
                  </section>
                </article>
              </div>
            </main>
          </section>
        </>
    )
  }