import { Box, Flex, Image, Loader, Stack, Text, Title } from '@mantine/core';

export const Loading = () => (
  <Box bg='var(--bg-secondary)' h='calc(100vh - 80px)'>
    <Flex
      align='center'
      left='50%'
      style={{ transform: 'translate(-50%, -50%)' }}
      pos='absolute'
      top='50%'
    >
      <Flex gap={40} direction='column'>
        <Stack gap={16} w={567}>
          <Title c='var(--text-primary)' fw={700} maw={430} size='48'>
            Мы доставим ваш заказ
          </Title>
          <Text inline c='var(--text-tertiary)' fw={300} size='28'>
            Отправляйте посылки <br /> в приложении Шифт Delivery
          </Text>
        </Stack>
        <Flex align='center' bg='white' gap={16} maw={380} p={16} style={{ borderRadius: 16 }}>
          <Image src='/svg/box.svg' />
          <Image src='/img/qr.png' />
          <Text c='var(--text-tertiary)'>Наведите камеру телефона на QR‑код</Text>
        </Flex>
      </Flex>

      <Flex align='center' justify='center' w={500}>
        <Loader color='var(--bg-brand)' />
      </Flex>
    </Flex>
  </Box>
);
