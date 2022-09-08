import React from 'react';
import type { InferGetServerSidePropsType } from 'next';

// apollo
import { initializeApollo } from 'apollo/apolloClient';

// Query
import { GET_POST_BY_SLUG_SEO } from 'graphql/posts';

// utils
import GetPropsSSR from 'utils/getPropsSSR';

import Layout from 'components/Organisms/Layout';
import PostTemplate from 'components/Templates/Blog/Post';

type ISeoProps = InferGetServerSidePropsType<typeof getServerSideProps>;

const Post = ({ postPage }: ISeoProps) => {
	return (
		<Layout className="t-post" seoSettings={postPage}>
			<PostTemplate postData={postPage} />
		</Layout>
	);
};

// SSR
interface ISSRProps {
	query: IQuery;
}

interface IQuery {
	slug: string;
}

export const getServerSideProps = async ({ query }: ISSRProps) => {
	const res = await GetPropsSSR(initializeApollo, GET_POST_BY_SLUG_SEO, 'post', query.slug);
	return {
		props: res,
	};
};

export default Post;
