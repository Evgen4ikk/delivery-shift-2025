import { Flex, Image, Text } from '@mantine/core';

export const Header = () => {
  return (
    <Flex align='center' justify='space-between' py='24'>
      <Image height={32} src='/img/logo.png' w='auto' />
      <Text fw={500} size='md'>
        Войти
      </Text>
    </Flex>
  );
};
