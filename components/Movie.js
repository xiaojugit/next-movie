import { Box, Heading, HStack, Image, Text } from '@chakra-ui/react';
import { MdMovie } from 'react-icons/md';
import axios from 'axios';
import { baseURL } from '../axiosConfig';
import Link from 'next/link';

export default function Movie({ data, title }) {
  return (
    <Box maxW="1200px" mx="auto" mt="20px">
      <HStack spacing="3" fontSize="24px">
        <MdMovie />
        <Heading as="h3" fontSize="24px">
          {title}
        </Heading>
      </HStack>
      <HStack spacing={3} mt="15px">
        {data.map(item => (
          <Box w="290px" key={item.id}>
            <Link href="/detail/[id]" as={`/detail/${item.vid}`}>
              <a>
                <Image src={item.url} />
                <Text mt="10px">{item.description}</Text>
              </a>
            </Link>
          </Box>
        ))}
      </HStack>
    </Box>
  );
}

export async function loadMovie() {
  return axios.get('/api/movie', { baseURL });
}
