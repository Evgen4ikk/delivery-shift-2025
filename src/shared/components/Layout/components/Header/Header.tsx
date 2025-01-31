import { Flex, Image, Text } from '@mantine/core';
import { IconClock, IconLogin, IconLogin2, IconUser } from '@tabler/icons-react';
import { Link, useLocation, useNavigate } from '@tanstack/react-router';

import { useAuth } from '@/shared/contexts/auth';

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { authFunctions, authState } = useAuth();
  const pathname = location.pathname;

  return (
    <Flex align='center' gap={32} justify='space-between' py='24'>
      <Link to='/'>
        <Image src='/svg/logo.svg' />
      </Link>

      <Flex align='center' justify={authState.isAuth ? 'space-between' : 'flex-end'} w='100%'>
        {authState.isAuth && (
          <Flex align='center' gap={32}>
            <Flex
              style={{
                cursor: 'pointer'
              }}
              align='center'
              c={pathname === '/profile' ? 'var(--bg-brand)' : 'var(--text-secondary)'}
              gap={16}
              onClick={() => navigate({ to: '/profile' })}
            >
              <IconUser size={24} stroke={1} />
              <Text fw={500} mt={4} size='md'>
                Профиль
              </Text>
            </Flex>
            <Flex
              style={{
                cursor: 'pointer'
              }}
              align='center'
              c={pathname === '/history' ? 'var(--bg-brand)' : 'var(--text-secondary)'}
              gap={16}
              onClick={() => navigate({ to: '/history' })}
            >
              <IconClock size={24} stroke={1} />
              <Text fw={500} mt={4} size='md'>
                История
              </Text>
            </Flex>
          </Flex>
        )}
        {!authState.isAuth && (
          <Flex
            style={{
              cursor: 'pointer'
            }}
            align='center'
            gap={16}
            onClick={() => navigate({ to: '/auth' })}
          >
            <IconLogin size={24} stroke={1} />
            <Text fw={500} mt={4} size='md'>
              Войти
            </Text>
          </Flex>
        )}
        {authState.isAuth && (
          <Flex
            style={{
              cursor: 'pointer'
            }}
            align='center'
            gap={16}
            onClick={authFunctions.clearUser}
          >
            <IconLogin2 size={24} stroke={1} />
            <Text fw={500} mt={4} size='md'>
              Выйти
            </Text>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};
