import { Box, Container, Flex, Heading, Link, Text, VStack } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Box as="header" bg="gray.800" color="white" py={4}>
        <Container maxW="container.xl">
          <Heading as="h1" size="lg">Financial Times</Heading>
        </Container>
      </Box>

      <Box as="nav" bg="gray.700" color="white" py={2}>
        <Container maxW="container.xl">
          <Flex justify="space-between">
            <Link href="#" px={2}>Home</Link>
            <Link href="#" px={2}>News</Link>
            <Link href="#" px={2}>Markets</Link>
            <Link href="#" px={2}>Opinion</Link>
            <Link href="#" px={2}>More</Link>
          </Flex>
        </Container>
      </Box>

      <Flex as="main" direction={{ base: "column", md: "row" }} py={8} px={4}>
        <Box flex="3" pr={{ md: 4 }}>
          <Heading as="h2" size="xl" mb={4}>Featured Article</Heading>
          <Text fontSize="lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </Box>
        <Box flex="1" bg="gray.100" p={4} mt={{ base: 4, md: 0 }}>
          <Heading as="h3" size="md" mb={4}>Sidebar</Heading>
          <VStack align="start">
            <Link href="#">Link 1</Link>
            <Link href="#">Link 2</Link>
            <Link href="#">Link 3</Link>
          </VStack>
        </Box>
      </Flex>

      <Box as="footer" bg="gray.800" color="white" py={4}>
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center">
            <Text>&copy; 2023 Financial Times</Text>
            <Flex>
              <Link href="#" mx={2}><FaFacebook /></Link>
              <Link href="#" mx={2}><FaTwitter /></Link>
              <Link href="#" mx={2}><FaLinkedin /></Link>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </Container>
  );
};

export default Index;