import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import Swiper, { loadSwiper } from '../components/Swiper';
import Movie, { loadMovie } from '../components/Movie';

export default function Home({ swiper, movies }) {
  return (
    <>
      <Head>
        <title>Movie</title>
      </Head>
      <Layout>
        <Swiper data={swiper} />
        <Movie data={movies} title="Movies" />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  // const { data: swiper } = await loadSwiper();
  // const { data: movies } = await loadMovie();
  const [{ data: swiper }, { data: movies }] = await Promise.all([
    loadSwiper(),
    loadMovie(),
  ]);
  return {
    props: {
      swiper,
      movies,
    },
  };
}
