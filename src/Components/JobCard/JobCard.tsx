import { Group, Button } from '@mantine/core';
import type {Job} from "../../types.ts";
import {Link} from "react-router";
import JobCardTemplate from "../JobCardTemplate/JobCardTemplate.tsx";

export const JobCard = ({ job }: { job: Job }) => {
  return (
    <JobCardTemplate job={job}>
      <Group>
        <Button component={Link} to={`/job/${job.id}`} fz={14} fw={400} bg='black'>Смотреть вакансию</Button>
      </Group>
    </JobCardTemplate>
  );
};