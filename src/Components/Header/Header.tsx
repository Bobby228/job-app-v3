import { useState } from 'react';
import { Flex, Image, Text, Group, ThemeIcon } from '@mantine/core';
import headerImg from '../../img/hh.svg';
import IconUser from "../../img/user.svg";
import styles from './Header.module.css';
import {NavLink} from "react-router";

const Header = () => {
  const [active, setActive] = useState<'vacancies' | 'about'>('vacancies');

  return (
    <header className={styles.header}>
      <NavLink to='/vacancies/all' className={styles.headerLink}>
        <Flex align="center" gap={10}>
          <Image src={headerImg} w={30} h={30} alt="logo" />
          <Text fw={600} size="xl" c="black">.FrontEnd</Text>
        </Flex>
      </NavLink>

      <Group className={styles.centerNav}>
        <NavLink
          className={styles.headerLink}
          to='/vacancies/all'
          onClick={() => setActive('vacancies')}
        >
          <Group gap={12} align="center">
            <Text
              size="xl"
              fw={500}
              c={active === 'vacancies' ? 'black' : 'gray'}
            >
              Вакансии FE
            </Text>
            <ThemeIcon
              size={12}
              radius="xl"
              color="blue"
              className={`${styles.navIcon} ${active === 'vacancies' ? '' : styles.hidden}`}
            >
              <div />
            </ThemeIcon>
          </Group>
        </NavLink>

        <NavLink
          className={styles.headerLink}
          to='/about'
          onClick={() => setActive('about')}
        >
          <Group gap={12} align="center">
            <Image src={IconUser} w={18} h={18} />
            <Text
              size="xl"
              fw={500}
              c={active === 'about' ? 'black' : 'gray'}
            >
              Обо мне
            </Text>
            <ThemeIcon
              size={12}
              radius="xl"
              color="blue"
              className={`${styles.navIcon} ${active === 'about' ? '' : styles.hidden}`}
            >
              <div />
            </ThemeIcon>
          </Group>
        </NavLink>
      </Group>

      <div className={styles.emptyDiv} />
    </header>
  );
};

export default Header;