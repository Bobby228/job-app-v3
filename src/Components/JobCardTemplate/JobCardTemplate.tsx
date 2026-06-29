import {Box, Card, Group, Text, Title} from "@mantine/core";
import renderSpace from "../../utils/renderSpace.tsx";
import type {Job} from "../../types.ts";


interface JobCardTemplateProps {
  job: Job;
  children?: React.ReactNode;
}

const JobCardTemplate = ({ job, children }: JobCardTemplateProps) => {

  return (
    <Card w={659} padding="lg" radius="md" mb="md">
      <Box mb={16}>
        <Title order={2} mb={10} fw={600} fz={20} c='rgba(54, 79, 199, 1)'>{job.name}</Title>
        <Group>
          <Text fz={16}>{Number(job.salary).toLocaleString('ru-RU')} ₽</Text>
          <Text fz={14} c='rgba(15, 15, 16, 0.5)'>Опыт: {job.experience}</Text>
        </Group>
      </Box>
      <Box mb={16}>
        <Text fz={14} mb={8} c='rgba(15, 15, 16, 0.5)'>{job.company_name}</Text>
        {renderSpace(job.space)}
        <Text>{job.city}</Text>
      </Box>
      {children}
    </Card>
  );
};

export default JobCardTemplate;