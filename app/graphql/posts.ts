import { gql } from '@apollo/client';
import { queryfy } from './helper';

export const GET_ALL_POSTS = gql`
	query getPosts {
		allBlogPosts(where: { state: "active" }, sortBy: name_ASC) {
			id
			name
			slug
			category {
				id
				name
			}
			thumbnail {
				id
				publicUrl
			}
		}
	}
`;

export const GET_POSTS_BY_CAT = (whereObj: any) => {
	let fieldsPosts = {
		state: 'active',
		...whereObj,
	};

	return gql`
		query getPostsByCat {
			allBlogPosts(
				where: ${queryfy(fieldsPosts)}
				sortBy: name_ASC
			) {
				id
				name
				slug
				category {
					id
					name
				}
				thumbnail {
					id
					publicUrl
				}
			}
		}
	`;
};

export const GET_POST_BY_ID = gql`
	query getPostByID {
		allBlogPosts(where: { state: "active" }, sortBy: name_ASC) {
			id
			name
			slug
			category {
				id
				name
			}
			thumbnail {
				id
				publicUrl
			}
		}
	}
`;

export const GET_POST_BY_SLUG = (whereObj: any) => {
	let fieldsPost = {
		state: 'active',
		...whereObj,
	};

	return gql`
		query getPostBySlug($first: Int) {
			allBlogPosts(
				where: ${queryfy(fieldsPost)}
				sortBy: name_ASC
				first: $first
			) {
				id
				name
				slug
				excerpt
				content
				category {
					id
					name
				}
				thumbnail {
					id
					publicUrl
				}
				imagePost{
					id
					publicUrl
				}
			}
		}
	`;
};

export const GET_POST_BY_SLUG_SEO = gql`
	query getPostBySlug($first: Int, $slug: String!) {
		allBlogPosts: allBlogPosts(
			where: { state: "active", slug: $slug }
			sortBy: name_ASC
			first: $first
		) {
			id
			name
			slug
			excerpt
			content
			category {
				id
				name
			}
			seoTitle
			seoDescription
			thumbnail {
				id
				publicUrl
			}
			imagePost {
				id
				publicUrl
			}
		}
	}
`;
