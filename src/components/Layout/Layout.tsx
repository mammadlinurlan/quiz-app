import { Container } from '@chakra-ui/react';
import { Header } from '@/components/Header/Header';
import { ProviderWrapper } from '../ProviderWrapper/ProviderWrapper';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ProviderWrapper>
      <Container
        maxW={{
          base: '100%',
          xl: '1160px',
        }}
        height='100vh'
        display='flex'
        flexDirection='column'
        px={{ base: '24px', md: '64px', xl: 0 }}
      >
        <Header />
        {children}
      </Container>
    </ProviderWrapper>
  );
}
