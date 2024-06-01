import { Box, Container, Flex, Heading, HStack, Link, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Header */}
      <Box bg="gray.800" color="white" py={4}>
        <Container maxW="container.xl">
          <Heading as="h1" size="xl">Financial Times</Heading>
        </Container>
      </Box>

      {/* Navigation Bar */}
      <Box bg="gray.700" color="white" py={2}>
        <Container maxW="container.xl">
          <HStack spacing={8}>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.300" }}>Home</Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.300" }}>News</Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.300" }}>Markets</Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.300" }}>Opinion</Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.300" }}>More</Link>
          </HStack>
        </Container>
      </Box>

      {/* Main Content Area */}
      <Flex direction={{ base: "column", md: "row" }} py={8} px={4}>
        {/* Featured Article */}
        <Box flex="3" pr={{ md: 8 }}>
          <Heading as="h2" size="lg" mb={4}>Featured Article</Heading>
          <Text fontSize="md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque leo nec sem feugiat, nec fermentum dolor cursus. 
            Vivamus vel turpis at libero tincidunt tincidunt. Integer sit amet arcu non nulla tincidunt tincidunt.
          </Text>
        </Box>

        {/* Sidebar */}
        <Box flex="1" mt={{ base: 8, md: 0 }}>
          <Heading as="h3" size="md" mb={4}>Sidebar</Heading>
          <VStack spacing={4} align="stretch">
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.600" }}>Link 1</Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.600" }}>Link 2</Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.600" }}>Link 3</Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.600" }}>Link 4</Link>
          </VStack>
        </Box>
      </Flex>

      {/* Footer */}
      <Box bg="gray.800" color="white" py={4} mt={8}>
        <Container maxW="container.xl">
          <Flex justify="space-between" direction={{ base: "column", md: "row" }}>
            <Text>Contact us: contact@financialtimes.com</Text>
            <HStack spacing={4}>
              <Link href="#" _hover={{ textDecoration: "none", color: "gray.300" }}>Facebook</Link>
              <Link href="#" _hover={{ textDecoration: "none", color: "gray.300" }}>Twitter</Link>
              <Link href="#" _hover={{ textDecoration: "none", color: "gray.300" }}>LinkedIn</Link>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Container>
  );
};

export default Index;