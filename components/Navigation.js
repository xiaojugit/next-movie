import { Box, HStack } from '@chakra-ui/layout';
import Link from 'next/link';
export default function Navigation() {
  return (
    <Box h="52px" bgColor="#202020" color="#fff">
      <HStack h="52px" alignItems="center" justifyContent="center" spacing="3">
        {['Film', 'Comic', 'Movie', 'TV', 'News'].map(v => (
          <Link href="#" key={v}>
            <a>{v}</a>
          </Link>
        ))}
      </HStack>
    </Box>
  );
}
