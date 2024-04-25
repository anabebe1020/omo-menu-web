import { Anchor, Flex } from '@mantine/core';
import Link from 'next/link';
import { AppBody } from './(common)/_components';
import Routes from './(common)/_routes';

const PAGE_TITLE = 'tokyo omo style menu';

export default function TopPage() {
  return (
    <AppBody pageTitle={PAGE_TITLE}>
      <Flex direction='column'>
        <Anchor component={Link} href={`${Routes.ProductDetailPage.path}/aaa`}>
          商品
        </Anchor>
      </Flex>
    </AppBody>
  );
}
