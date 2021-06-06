import { Box, Button, Container, Image } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { FaSearch, FaSignInAlt } from 'react-icons/fa';
import { BsFillPersonFill } from 'react-icons/bs';
import { css } from '@emotion/react';

const logo = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 140px;
`;

const SignInAndJoin = styled.div`
  height: 52px;
  padding: 0 6px;
  border-left: 1px solid #393939;
  border-right: 1px solid #393939;
  line-height: 52px;
  float: left;
  & > button {
    padding: 0 10px;
    color: #fff;
    &:first-child::after {
      content: '';
      width: 1px;
      height: 10px;
      background: #fff;
      position: absolute;
      top: 10px;
      right: 0;
    }
  }
`;

const Search = styled.a`
  float: right;
  height: 52px;
  padding: 0 10px;
  line-height: 52px;
  border-left: 1px solid #393939;
  border-right: 1px solid #393939;
  color: #fff;
  font-size: 20px;
  display: flex;
  align-items: center;
`;

export default function Header() {
  return (
    <Box h="52px" bgColor="#202020" borderBottom="1px solid #393939">
      <Container h="52px" maxW={1200} mx="auto" pos="relative">
        <SignInAndJoin>
          <Button
            _focus={{ border: 'none' }}
            colorScheme="transparent"
            leftIcon={<FaSignInAlt />}
          >
            Sign in
          </Button>
          <Button
            _focus={{ border: 'none' }}
            colorScheme="transparent"
            leftIcon={<BsFillPersonFill />}
          >
            Sign up
          </Button>
        </SignInAndJoin>
        <Image css={logo} src="/images/zg_films.png" />
        <Search>
          <FaSearch />
        </Search>
      </Container>
    </Box>
  );
}
