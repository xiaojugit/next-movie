import React from 'react';
import Head from 'next/head';
import Layout from '../../components/Layout';
import { Box, Divider, Heading, Text } from '@chakra-ui/layout';
import { css } from '@emotion/react';
import axios from 'axios';
import { baseURL } from '../../axiosConfig';

const cssContent = css`
  padding: 10px 0;
  font-size: 14px;
  p {
    margin-bottom: 10px;
  }
  img {
    display: block;
    margin-bottom: 10px;
  }
`;
export default function Detail({ detail }) {
  return (
    <>
      <Head>
        <title>{detail.title}</title>
      </Head>
      <Layout>
        <Box as="article" maxW="1200px" mt="70px" mx="auto">
          <Heading as="h2" size="2xl">
            {detail.title}
          </Heading>
          <Heading
            as="h4"
            mt="10px"
            size="lg"
            color="gray.500"
            fontWeight="light"
          >
            {detail.sub}
          </Heading>
          <Divider mt="10px" />
          <Box overflow="hidden" mt="10px">
            <Text float="left">Author: {detail.author}</Text>
            <Text float="right">Published: {detail.publish}</Text>
          </Box>
          <Divider mt="10px" />
          <Box
            as="section"
            css={cssContent}
            dangerouslySetInnerHTML={{ __html: detail.content }}
          ></Box>
        </Box>
      </Layout>
    </>
  );
}

/**
 * 获取用户能够访问到的所有路由参数
 */
export async function getStaticPaths() {
  /** @type {array} ["1","2"] */
  const { data } = await axios.get('/api/videos', { baseURL });
  /** @type {object} [{"params": {"id": "1"}}] */
  const paths = data.map(id => ({ params: { id } }));
  return { paths, fallback: false };
}

/**
 * 根据参数获取对应的数据
 */
export async function getStaticProps({ params }) {
  const { data: detail } = await axios.get(`/api/detail`, {
    baseURL,
    params,
  });
  return {
    props: {
      detail,
    },
  };
}
