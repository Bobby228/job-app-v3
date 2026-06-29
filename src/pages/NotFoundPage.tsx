import {Box, Button, Card, Container, Flex, Text, Title, Image} from "@mantine/core";
import SadCat from '../img/sad-cat.gif'
import {Link} from "react-router";

const NotFoundPage = () => {
  return (
    <Box pt={72} h='92vh'>
      <Container p={0} strategy="block" size={1000}>
        <Card mx='auto' w={707} p={32} radius="md" mb="md">
          <Flex direction="column" align='center'>
            <Flex mb={32} align='center'>
              <Box>
                <Title order={1} fz={32} mb={12}>Упс! Такой страницы не существует</Title>
                <Text>Давайте перейдём к началу.</Text>
              </Box>
              <Button w={135} h={42} bg='#4263EB' radius={4} component={Link} to='/vacancies/all'>На главную</Button>
            </Flex>
            <Box>
              <Image radius='md' src={SadCat} />
            </Box>
          </Flex>
        </Card>
      </Container>
    </Box>
  );
};

export default NotFoundPage;