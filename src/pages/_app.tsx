import { NextPage } from 'next';
import { ReactNode } from 'react';
import type { AppProps } from 'next/app';
import { ProviderGroup } from '../containers/groupProvider';
import '../../styles/global.css';

type GetLayout = (page: ReactNode) => ReactNode;

type Page<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: GetLayout;
};

type AdAppProps<P = {}> = AppProps<P> & {
  Component: Page<P>;
};

export default function App(appProps: AdAppProps) {
  const { Component, pageProps } = appProps;

  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);

  return (
    <ProviderGroup>
       {getLayout(<Component {...pageProps} />)}
    </ProviderGroup>
  );
}
