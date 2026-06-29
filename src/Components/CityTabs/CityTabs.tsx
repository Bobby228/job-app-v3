import {Tabs} from "@mantine/core";
import {useLocation, useNavigate} from "react-router";


const CityTabs = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const value = location.pathname.includes('moscow')
    ? 'moscow'
    : location.pathname.includes('petersburg')
      ? 'petersburg'
      : 'all';

  return (
    <Tabs
      w={337}
      value={value}
      onChange={(value) => navigate(`/vacancies/${value}`)}
    >
      <Tabs.List>
        <Tabs.Tab value='all'>
          Все города
        </Tabs.Tab>

        <Tabs.Tab value='moscow'>
          Москва
        </Tabs.Tab>

        <Tabs.Tab value='petersburg'>
          Санкт-Петербург
        </Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
};

export default CityTabs;