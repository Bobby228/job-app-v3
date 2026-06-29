import SkillsInput from "../SkillsInput/SkillsInput.tsx";
import {Flex, Title} from "@mantine/core";
import { useEffect } from "react";
import { JobCard } from "../JobCard/JobCard.tsx";
import styles from "./JobsList.module.css";
import { useTypedDispatch, useTypedSelector } from "../../hooks/hooks.ts";
import { fetchJobs } from "../../reducers/JobThunks.ts";
import Pag from "../Pagination/Pagination.tsx";
import { setSearch, setSkills, setPage } from "../../reducers/JobSlice";
import {useSearchParams, useParams} from "react-router";
import CityTabs from "../CityTabs/CityTabs.tsx";

const JobsList = () => {
  const dispatch = useTypedDispatch();
  const {city} = useParams()
  const cityName =
    city === "moscow"
      ? "Москва"
      : city === "petersburg"
        ? "Санкт-Петербург"
        : "";

  const {
    search,
    page,
    jobsList,
    skills,
    isLoading
  } = useTypedSelector((state) => state.jobs);

  const [params, setParams] = useSearchParams();

  useEffect(() => {
    dispatch(setSearch(params.get("search") || ""));
    dispatch(setPage(Number(params.get("page") || 1)));

    const skillsParam = params.get('skills');

    if (skillsParam) {
      dispatch(setSkills(skillsParam.split(',')));
    }
  }, []);

  useEffect(() => {
    dispatch(fetchJobs({ search, city: cityName, page, skills }));
  }, [search, city, page, skills]);

  useEffect(() => {
    const obj: Record<string, string> = {};

    if (search) obj.search = search;
    if (skills.length) obj.skills = skills.join(",");
    if (page) obj.page = String(page);

    setParams(obj);
  }, [search, skills, page]);

  return (
    <Flex mih="100vh" pt={24} pb={84} gap={24}>
      <Flex direction="column" gap={28}>
        <SkillsInput />
      </Flex>

      <Flex direction="column" gap={24}>
        <CityTabs />
        {isLoading ?
          <Title>Загрузка...</Title>
          :
          <>
            {jobsList.length
              ? <>
                <ul>
                  {jobsList.map((job) => (
                    <li key={job.id} className={styles.liItem}>
                      <JobCard job={job}/>
                    </li>
                  ))}
                </ul>
                <Pag/>
              </>
              : <Title order={1}>Вакансии не найдены</Title>
            }
          </>
        }
      </Flex>
    </Flex>
  );
};

export default JobsList;