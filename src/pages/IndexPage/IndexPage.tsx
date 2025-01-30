import {
  Box,
  Button,
  Combobox,
  Flex,
  Image,
  Input,
  Loader,
  SegmentedControl,
  Select,
  Stack,
  Text,
  Title
} from '@mantine/core';
import { IconChevronDown, IconLocation, IconMail, IconMapPin } from '@tabler/icons-react';
import { Controller } from 'react-hook-form';

import { useIndexPage } from './hooks/useIndexPage';

const PACKAGE_IMAGE: Record<string, string> = {
  '1': '/img/envelope.png',
  '2': '/img/carton_XS.png',
  '3': '/img/carton_S.png',
  '4': '/img/carton_M.png'
};

export const IndexPage = () => {
  const { combobox, state, functions, form } = useIndexPage();

  if (state.loading.getSelectItems) {
    return (
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
              <Image src='/img/box.png' />
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
  }

  return (
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
            <Image src='/img/box.png' />
            <Image src='/img/qr.png' />
            <Text c='var(--text-tertiary)'>Наведите камеру телефона на QR‑код</Text>
          </Flex>
        </Flex>

        <Box bg='white' px={72} py={32} style={{ borderRadius: 24 }} w={500}>
          <Stack c='var(--text-secondary)' gap={24} component='form' onSubmit={functions.onSubmit}>
            <Title size='24'>Рассчитать доставку</Title>
            <Stack gap={4}>
              <Controller
                render={({ field }) => (
                  <Select
                    c='var(--text-secondary)'
                    data={state?.points?.map((point) => point.name)}
                    {...field}
                    label='Город отправки'
                    value={state.points.find((point) => point.name === field.value)?.name}
                    leftSection={
                      <IconMapPin size={20} color='var(--indicator-medium)' stroke={2} />
                    }
                    onChange={field.onChange}
                    rightSection={<IconChevronDown color='var(--indicator-medium)' stroke={1} />}
                    withCheckIcon={false}
                  />
                )}
                name='receiverPoint'
                control={form.control}
              />

              <Flex gap={8}>
                {['Санкт-Петербург', 'Новосибирск', 'Томск'].map((city, index) => (
                  <Text
                    inline
                    key={index}
                    c='var(--text-tertiary)'
                    size='14'
                    style={{ textDecoration: 'underline', cursor: 'pointer' }}
                  >
                    {city}
                  </Text>
                ))}
              </Flex>
            </Stack>
            <Stack gap={4}>
              <Controller
                render={({ field }) => (
                  <Select
                    c='var(--text-secondary)'
                    data={state?.points?.map((point) => point.name)}
                    {...field}
                    label='Город назначения'
                    value={state.points.find((point) => point.name === field.value)?.name}
                    leftSection={
                      <IconLocation size={20} color='var(--indicator-medium)' stroke={2} />
                    }
                    onChange={field.onChange}
                    rightSection={<IconChevronDown color='var(--indicator-medium)' stroke={1} />}
                    withCheckIcon={false}
                  />
                )}
                name='senderPoint'
                control={form.control}
              />

              <Flex gap={8}>
                {['Санкт-Петербург', 'Новосибирск', 'Томск'].map((city, index) => (
                  <Text
                    inline
                    key={index}
                    c='var(--text-tertiary)'
                    size='14'
                    style={{ textDecoration: 'underline', cursor: 'pointer' }}
                  >
                    {city}
                  </Text>
                ))}
              </Flex>
            </Stack>
            <Controller
              render={({ field }) => (
                <Combobox store={combobox}>
                  <Combobox.Target>
                    <Select
                      readOnly
                      label='Размер посылки'
                      leftSection={
                        <IconMail size={20} color='var(--indicator-medium)' stroke={2} />
                      }
                      onClick={() => combobox.openDropdown()}
                      placeholder={
                        state.mode === 'approximate'
                          ? field.value?.name
                          : `${field.value?.width} x ${field.value?.height} x ${field.value?.length} см`
                      }
                      rightSection={<IconChevronDown color='var(--indicator-medium)' stroke={1} />}
                    />
                  </Combobox.Target>

                  <Combobox.Dropdown
                    style={{
                      backgroundColor: 'transparent',
                      boxShadow: 'none',
                      border: 'none'
                    }}
                  >
                    <Stack gap={8}>
                      <SegmentedControl
                        data={[
                          { label: 'Примерные', value: 'approximate' },
                          { label: 'Точные', value: 'exact' }
                        ]}
                        radius={14}
                        value={state.mode}
                        onChange={functions.setMode}
                      />

                      {state.mode === 'approximate' ? (
                        <Stack bg='white' gap={4} p={8} style={{ borderRadius: 8 }}>
                          {state.packages.map((item) => (
                            <Combobox.Option
                              key={item.id}
                              bg='var(--bg-secondary)'
                              value={item.name}
                              onClick={() => {
                                field.onChange({
                                  name: item.name,
                                  weight: item.weight.toString(),
                                  length: item.length.toString(),
                                  width: item.width.toString(),
                                  height: item.height.toString()
                                });
                                combobox.closeDropdown();
                              }}
                            >
                              <Flex align='center' gap={16}>
                                <Image h={48} src={PACKAGE_IMAGE[item.id]} w={48} />
                                <Stack gap={8}>
                                  <Title size={20}>{item.name}</Title>
                                  <Text inline size='12'>
                                    {item.length}x{item.width}x{item.height}
                                  </Text>
                                </Stack>
                              </Flex>
                            </Combobox.Option>
                          ))}
                        </Stack>
                      ) : (
                        <Stack bg='white' gap={16} px={16} py={8} style={{ borderRadius: 8 }}>
                          <Flex align='center' gap={16} justify={'space-between'}>
                            <Text c='var(--text-secondary)'>Длина</Text>
                            <Input
                              maw={240}
                              size='md'
                              type='number'
                              value={field.value.length}
                              w='100%'
                              onChange={(e) =>
                                field.onChange({ ...field.value, length: e.target.value })
                              }
                              placeholder='cм'
                            />
                          </Flex>
                          <Flex align='center' gap={16} justify={'space-between'}>
                            <Text c='var(--text-secondary)'>Ширина</Text>
                            <Input
                              maw={240}
                              size='md'
                              type='number'
                              value={field.value.width}
                              w='100%'
                              onChange={(e) =>
                                field.onChange({ ...field.value, width: e.target.value })
                              }
                              placeholder='cм'
                            />
                          </Flex>
                          <Flex align='center' gap={16} justify={'space-between'}>
                            <Text c='var(--text-secondary)'>Высота</Text>
                            <Input
                              maw={240}
                              size='md'
                              type='number'
                              value={field.value.height}
                              w='100%'
                              onChange={(e) =>
                                field.onChange({ ...field.value, height: e.target.value })
                              }
                              placeholder='cм'
                            />
                          </Flex>
                          <Flex align='center' gap={16} justify={'space-between'}>
                            <Text c='var(--text-secondary)'>Вес</Text>
                            <Input
                              maw={240}
                              size='md'
                              type='number'
                              value={field.value.weight}
                              w='100%'
                              onChange={(e) =>
                                field.onChange({ ...field.value, weight: e.target.value })
                              }
                              placeholder='кг'
                            />
                          </Flex>
                        </Stack>
                      )}
                    </Stack>
                  </Combobox.Dropdown>
                </Combobox>
              )}
              name='package'
              control={form.control}
            />

            <Button
              bg='var(--bg-brand)'
              disabled={state.loading.submitForm}
              radius={16}
              size='xl'
              type='submit'
              loading={state.loading.submitForm}
            >
              Рассчитать
            </Button>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};
