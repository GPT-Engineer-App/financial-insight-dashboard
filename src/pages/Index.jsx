import { Box, Container, Flex, Heading, Link, Text, VStack } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      {/* Header */}
      <Box as="header" py={4} borderBottom="1px" borderColor="gray.200">
        <Heading as="h1" size="xl" textAlign="center">
          Financial Times
        </Heading>
      </Box>

      {/* Navigation Bar */}
      <Flex as="nav" py={4} justifyContent="center" borderBottom="1px" borderColor="gray.200">
        <Link mx={2} href="#">Home</Link>
        <Link mx={2} href="#">News</Link>
        <Link mx={2} href="#">Markets</Link>
        <Link mx={2} href="#">Opinion</Link>
        <Link mx={2} href="#">More</Link>
      </Flex>

      {/* Main Content Area */}
      <Flex as="main" py={8} direction={{ base: "column", md: "row" }}>
        {/* Featured Article */}
        <Box flex="3" pr={{ md: 8 }}>
          <Heading as="h2" size="lg" mb={4}>
            Featured Article
          </Heading>
          <Text fontSize="md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque leo nec libero fermentum, a dictum magna gravida. 
            Suspendisse potenti. Integer non libero nec nulla facilisis tincidunt. 
          </Text>
        </Box>

        {/* Sidebar */}
        <Box flex="1" mt={{ base: 8, md: 0 }}>
          <Heading as="h3" size="md" mb={4}>
            Sidebar
          </Heading>
          <VStack spacing={4} align="stretch">
            <Link href="#">Link 1</Link>
            <Link href="#">Link 2</Link>
            <Link href="#">Link 3</Link>
            <Link href="#">Link 4</Link>
          </VStack>
        </Box>
      </Flex>

      {/* Footer */}
      <Box as="footer" py={4} borderTop="1px" borderColor="gray.200" textAlign="center">
        <Text mb={2}>Contact us: contact@financialtimes.com</Text>
        <Flex justifyContent="center" mb={2}>
          <Link mx={2} href="#"><FaTwitter /></Link>
          <Link mx={2} href="#"><FaFacebook /></Link>
          <Link mx={2} href="#"><FaLinkedin /></Link>
        </Flex>
        <Text>&copy; 2023 Financial Times. All rights reserved.</Text>
      </Box>
    </Container>
  );
};

export default Index;