import { Flex, Image, Text } from '@mantine/core';
import { Link } from '@tanstack/react-router';

export const Header = () => {
  return (
    <Flex align='center' justify='space-between' py='24'>
      <Link to='/'>
        <Image height={32} src='/img/logo.png' w='auto' />
      </Link>

      <Text fw={500} size='md'>
        Войти
      </Text>
    </Flex>
  );
};
