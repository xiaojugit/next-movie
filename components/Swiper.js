import { Carousel } from 'react-responsive-carousel';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Box, Heading, Text, Button } from '@chakra-ui/react';
import axios from 'axios';
import { baseURL } from '../axiosConfig';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Link from 'next/link';

const CarouselItem = styled.div`
  position: relative;
  & > div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    max-width: 1200px;
    padding-inline-start: 1rem;
    padding-inline-end: 1rem;
    color: #fff;
    text-align: left;
    > p {
      width: 500px;
      margin: 10px 0;
      font-size: 14px;
    }
  }

  & > img {
    filter: brightness(50%);
  }
`;

const swiper = css`
  position: relative;
  > .carousel:last-child {
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;

    .thumbs-wrapper {
      margin: 10px;
    }
  }
`;
export default function Swiper({ data }) {
  return (
    <Carousel
      css={swiper}
      showArrows={false}
      showIndicators={false}
      showStatus={false}
    >
      {data.map(item => (
        <CarouselItem key={item.id}>
          <img src={item.url} />
          <Box>
            <Heading as="h2" size="lg">
              {item.title}
            </Heading>
            <Text>{item.description}</Text>
            <Button colorScheme="red">
              <Link href="/detail/[id]" as={`/detail/${item.vid}`}>
                <a>CHECK DETAIL</a>
              </Link>
            </Button>
          </Box>
        </CarouselItem>
      ))}
    </Carousel>
  );
}

export function loadSwiper() {
  return axios.get('/api/swiper', { baseURL });
}
