import React from 'react';
import type { InferGetServerSidePropsType } from 'next';

// apollo
import { initializeApollo } from 'apollo/apolloClient';

// Query
import { GET_SEO_SETTING } from 'graphql/document';

// utils
import GetPropsSSR from 'utils/getPropsSSR';

import Layout from 'components/Organisms/Layout';
import BlogTemplate from 'components/Templates/Blog';

type ISeoProps = InferGetServerSidePropsType<typeof getServerSideProps>;

// styles
export default function Blog({ simplePage }: ISeoProps) {
	return (
		<Layout seoSettings={simplePage}>
			<BlogTemplate />
		</Layout>
	);
}

// SSR
export const getServerSideProps = async () => {
	const res = await GetPropsSSR(initializeApollo, GET_SEO_SETTING);
	return {
		props: res,
	};
};
