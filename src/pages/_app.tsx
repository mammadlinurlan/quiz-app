import '@/styles/globals.css';
import type { AppProps } from 'next/app';

import Layout from '@/components/Layout/Layout';

import '../styles/globals.css';
import '../styles/fonts.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
