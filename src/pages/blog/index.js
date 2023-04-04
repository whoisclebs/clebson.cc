import React from 'react'
import Head from 'next/head'
import Link from "next/link"
import { getAllArticles } from '../../utils/mdx'
import dayjs from 'dayjs'
import Navbar from '../../components/navbar/navbar'
export default function BlogPage({ posts }) {
    return (
        <section className="bg-white dark:bg-gray-900 min-h-screen">
        <Head>
          <title>Blog</title>
        </Head>
        <Navbar/>

        <main className="py-24 flex justify-center">
          <div className='space-y-8 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-12 md:space-y-0'>
          {posts.reverse().map((post) => {
            return (
              <Link key={post} href={`/blog/${post.slug}`} passHref>
                <a className='block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
                  <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{post.title}</h1>
                  <p className="summary">{post.excerpt}</p>
                  <p className="date">
                    {dayjs(post.publishedAt).format('MMMM D, YYYY')} &mdash;{' '}
                    {post.readingTime}
                  </p>
                </a>
              </Link>
            )
          })}
          </div>
        </main>
      </section>
    )
  }

export async function getStaticProps() {
  const articles = await getAllArticles()

  articles
    .map((article) => article.data)
    .sort((a, b) => {
      if (a.data.publishedAt > b.data.publishedAt) return 1
      if (a.data.publishedAt < b.data.publishedAt) return -1

      return 0
    })

  return {
    props: {
      posts: articles.reverse(),
    },
  }
}