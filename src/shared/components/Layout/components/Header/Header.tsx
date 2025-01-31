import { Flex, Image, Text } from '@mantine/core';
import { Link } from '@tanstack/react-router';

export const Header = () => {
  return (
    <Flex align='center' justify='space-between' py='24'>
      <Link to='/'>
        <Image src='/svg/logo.svg' />
      </Link>

      <Text fw={500} size='md'>
        Войти
      </Text>
    </Flex>
  );
};
