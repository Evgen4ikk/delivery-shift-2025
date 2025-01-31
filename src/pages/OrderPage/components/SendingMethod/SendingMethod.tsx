import { Flex, Image, Stack, Text, Title } from '@mantine/core';
import { IconBus, IconPlaneTilt } from '@tabler/icons-react';

import { getDayPrefix } from '@/shared/utils';

import type { useOrderPageProps } from '../../types';

import styles from './SendingMethod.module.css';

export const SendingMethod = ({ functions, state }: useOrderPageProps) => {
  return (
    <Stack gap={24} maw={468}>
      {state.options.map((option, index) => {
        const isSelected = state.orderState.option?.id === option.id;

        return (
          <Stack
            key={option.id}
            className={`${styles.optionItem} ${isSelected ? styles.selected : ''}`}
            p={16}
            onClick={() => {
              functions.orderFunctions.setOption(option);
              functions.nextStep();
            }}
          >
            <Flex align='center' gap={16}>
              <Flex
                align='center'
                bg='var(--bg-secondary)'
                c='var(--border-medium)'
                className={styles.iconWrapper}
                h={48}
                justify='center'
                w={48}
              >
                {index === 0 ? <IconPlaneTilt /> : <IconBus />}
              </Flex>
              <Stack gap={8}>
                <Text inline className={styles.optionName} size='12'>
                  {option.name}
                </Text>
                <Title className={styles.optionPrice} size={20}>
                  {option.price} ₽
                </Title>
              </Stack>
            </Flex>
            <Text inline className={styles.dayInfo} ml={64} size='12' component='p'>
              {getDayPrefix(option.days)}
            </Text>
          </Stack>
        );
      })}
      <Image src='/img/advertisement.png' w='100%' />
    </Stack>
  );
};
