import 'styles/customAntd.less';
import 'animate.css/animate.css';
import 'slick-carousel/slick/slick.css';

import React from 'react';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { ConfigProvider } from 'antd';
import esES from 'antd/lib/locale/es_ES';

import { useApollo } from 'apollo/apolloClient';

import GlobalStyle from 'styles/general';

function MyApp({ Component, pageProps }: AppProps) {
	const apolloClient = useApollo(pageProps.initialApolloState);

	return (
		<>
			<ApolloProvider client={apolloClient}>
				<ConfigProvider locale={esES}>
					<GlobalStyle />
					<Component {...pageProps} />
				</ConfigProvider>
			</ApolloProvider>
		</>
	);
}

export default MyApp;
