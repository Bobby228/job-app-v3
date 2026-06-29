import {useParams} from "react-router";
import {useEffect, useState} from "react";
import JobCardTemplate from "../JobCardTemplate/JobCardTemplate.tsx";
import {Box, Card, Container, Flex, Text, Title} from "@mantine/core";
import type {Job} from "../../types.ts";

const JobPage = () => {
  const {id} = useParams();
  const [job, setJob] = useState<Job | null>(null)

  useEffect(() => {
    fetch(`https://kata-jobs.onrender.com/api/jobs/${id}`)
      .then(res => res.json())
      .then(data => setJob(data.job))
  }, [id]);

  return (
    <Box pt={24} h='92vh'>
      <Container p={0} strategy="block" size={1000}>
        {job
          ? <Flex direction="column" align='center'>
            <JobCardTemplate job={job}></JobCardTemplate>
            <Card w={659} p={24} radius="md" mb="md">
              <Title order={1} fz={20} fw={600} mb={12}>Компания</Title>
              <Text mb={16}>{job.about_company}</Text>
              <Title order={3} fz={16} fw={600} mb={12}>О вакансии:</Title>
              <Text>{job.description}</Text>
            </Card>
          </Flex>
          : <Title order={1} ta='center'>Загрузка...</Title>
        }
      </Container>
    </Box>
  );
};

export default JobPage;