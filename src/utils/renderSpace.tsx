import {Badge} from "@mantine/core";

const renderSpace = (space: string) => {
  switch (space) {
    case 'remote':
      return (
        <Badge
          mb={8}
          px={6}
          py={1}
          radius={3}
          bg="rgba(66, 99, 235, 1)"
          c="white"
        >
          можно удалённо
        </Badge>
      );

    case 'office':
      return (
        <Badge
          mb={8}
          px={6}
          py={1}
          radius={3}
          bg="rgba(15, 15, 16, 0.1)"
          c="rgba(15, 15, 16, 0.5)"
        >
          офис
        </Badge>
      );

    case 'hybrid':
      return (
        <Badge
          mb={8}
          px={6}
          py={1}
          radius={3}
          bg="black"
          c="white"
        >
          гибрид
        </Badge>
      );

    default:
      return null;
  }
};

export default renderSpace