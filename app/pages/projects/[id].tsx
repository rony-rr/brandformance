import React from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

// apollo
import { initializeApollo } from 'apollo/apolloClient';

// Query
import { GET_SEO_SETTING } from 'graphql/document';

// utils
import GetPropsSSR from 'utils/getPropsSSR';

import { useGetProjectById } from 'mock/getProjects';

import Layout from 'components/Organisms/Layout';
import Container from 'components/Atoms/Container';
import ProjectMoreInfo from 'components/Organisms/ProjectMoreInfo';

type ISeoProps = InferGetServerSidePropsType<typeof getServerSideProps>;

const ProjectInfo = ({
	id,
	simplePage
}: ISeoProps) => {
	const getByIdProject = useGetProjectById(id);
	return (
		<Layout seoSettings={simplePage}>
			<Container>
				<div>
					<ProjectMoreInfo currentProject={getByIdProject} />
				</div>
			</Container>
		</Layout>
	);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	const res = await GetPropsSSR(initializeApollo, GET_SEO_SETTING);
	return {
		props: {
			res,
			...context.params,
		}, // will be passed to the page component as props
	};
};

export default React.memo(ProjectInfo);
