import { Box, Container, Flex, LoadingOverlay, Title } from '@mantine/core';
import { PropsWithChildren } from 'react';

type Props = Readonly<{
  pageTitle: string;
  loading?: boolean;
}>;

export default function AppBody(props: PropsWithChildren<Props>) {
  return (
    <Container>
      <LoadingOverlay visible={props.loading} />
      <Flex direction='column'>
        <Box py={40}>
          <Title order={3}>{props.pageTitle}</Title>
        </Box>
        {props.children}
      </Flex>
    </Container>
  );
}
