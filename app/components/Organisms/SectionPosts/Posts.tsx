import React from 'react';

import { Skeleton } from 'antd';
import { useQuery } from '@apollo/client';

// Components
import CardPostBlog from 'components/Organisms/CardPostBlog';

// Data
import {
	GET_POSTS_BY_CAT,
} from 'graphql/posts';

interface IProps {
	filter?: string;
}

interface ICat{
	id: string;
	name: string;
}

interface IThumbnail{
	id: string;
	publicUrl: string;
}

interface IPost {
	id: string;
	name: string;
	slug: string;
	thumbnail: IThumbnail;
	category: ICat[];
};

interface IAllPosts {
	allBlogPosts: IPost[];
};

const CardsPosts = ({ filter = '' }: IProps) => {
	let whereParams = {};
	if (filter) whereParams = { category_some: { id_in: [filter] } };

	const { data, loading } = useQuery<IAllPosts>(GET_POSTS_BY_CAT(whereParams));
	if (loading) return <Skeleton active />;

	const getPosts = () => {
		return data?.allBlogPosts.map((item: IPost, i: number) => {
			return (
				<CardPostBlog
					key={'cardPost_' + i}
					id={item.id}
					title={item.name}
					img={item.thumbnail.publicUrl}
					url={item.slug}
				/>
			);
		}) || [];
	};

	return <>{getPosts()}</>;
};

export default CardsPosts;
