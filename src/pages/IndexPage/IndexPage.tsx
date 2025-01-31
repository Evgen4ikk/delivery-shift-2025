import {
  Box,
  Button,
  Combobox,
  Flex,
  Image,
  Input,
  SegmentedControl,
  Select,
  Stack,
  Text,
  Title
} from '@mantine/core';
import { IconChevronDown, IconLocation, IconMail, IconMapPin } from '@tabler/icons-react';
import { Controller } from 'react-hook-form';

import { Loading } from './components/Loading';
import { useIndexPage } from './hooks/useIndexPage';

const PACKAGE_IMAGE: Record<string, string> = {
  '1': '/svg/envelope.svg',
  '2': '/svg/carton_XS.svg',
  '3': '/svg/carton_S.svg',
  '4': '/svg/carton_M.svg'
};

export const IndexPage = () => {
  const { combobox, state, functions, form } = useIndexPage();

  if (state.loading.getSelectItems) return <Loading />;

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
            <Image src='/svg/box.svg' />
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
                {state?.points?.slice(0, 3).map((point, index) => (
                  <Text
                    inline
                    key={index}
                    c='var(--text-tertiary)'
                    size='14'
                    style={{ textDecoration: 'underline', cursor: 'pointer' }}
                    onClick={() => form.setValue('receiverPoint', point.name)}
                  >
                    {point.name}
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
                {state?.points?.slice(0, 3).map((point, index) => (
                  <Text
                    inline
                    key={index}
                    c='var(--text-tertiary)'
                    size='14'
                    style={{ textDecoration: 'underline', cursor: 'pointer' }}
                    onClick={() => form.setValue('senderPoint', point.name)}
                  >
                    {point.name}
                  </Text>
                ))}
              </Flex>
            </Stack>
            <Controller
              render={({ field }) => (
                <Combobox store={combobox}>
                  <Combobox.Target>
                    <Stack gap={4}>
                      <Text inline c='var(--text-secondary)' size='14'>
                        Размер посылки
                      </Text>
                      <Flex
                        style={{
                          border: '1px solid var(--border-light)',
                          borderRadius: 4
                        }}
                        align='center'
                        justify='space-between'
                        pl={8}
                        pr={4}
                        py={6}
                        onClick={() => combobox.openDropdown()}
                      >
                        <Flex align='center' gap={8}>
                          <IconMail size={20} color='var(--indicator-medium)' stroke={2} />
                          <Text inline c='var(--text-secondary)' size='14'>
                            {state.mode === 'approximate'
                              ? field.value?.name
                              : `${field.value?.length} x ${field.value?.width} x ${field.value?.height} см`}
                          </Text>
                        </Flex>
                        <IconChevronDown color='var(--indicator-medium)' stroke={1} />
                      </Flex>
                    </Stack>
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

                      {state.mode === 'approximate' && (
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
                      )}
                      {state.mode === 'exact' && (
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
