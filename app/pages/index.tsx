import React from 'react';
import type { InferGetServerSidePropsType } from 'next';

// apollo
import { initializeApollo } from 'apollo/apolloClient';

// Query
import { GET_SEO_SETTING } from 'graphql/document';

// utils
import GetPropsSSR from 'utils/getPropsSSR';

import Layout from 'components/Organisms/Layout';
import HomeTemplate from 'components/Templates/Home';
import * as fbq from 'lib/fpixel';
import { SettingsSiteProvider } from '../Context/settings.context';

type ISeoProps = InferGetServerSidePropsType<typeof getServerSideProps>;

// styles
export default function Home({ simplePage }: ISeoProps) {
	React.useEffect(() => {
		// This pageview only trigger first time (it is important for Pixel to have real information)
		fbq.pageview();
	}, []);

	return (
		<SettingsSiteProvider>
			<Layout seoSettings={simplePage} >
				<HomeTemplate />
			</Layout>
		</SettingsSiteProvider>
	);
}

// SSR
export const getServerSideProps = async () => {
	const res = await GetPropsSSR(initializeApollo, GET_SEO_SETTING);
	return {
		props: res,
	};
};
