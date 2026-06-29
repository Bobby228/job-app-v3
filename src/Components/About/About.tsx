import {Box, Card, Container, Title, Text} from "@mantine/core";

const About = () => {
  return (
    <Box pt={24} h='92vh'>
      <Container p={0} strategy="block" size={1000}>
        <Card w={659} p={24} radius="md" mx="auto">
          <Title order={1} mb={12}>Максим Бобров</Title>
          <Text>Привет! Я - Frontend-разработчик. Пишу приложения на React + TypeScript + Redux Toolkit.</Text>
        </Card>
      </Container>
    </Box>
  );
};

export default About;