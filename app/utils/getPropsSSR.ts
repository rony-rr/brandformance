// utils
import { settingsDefault } from './getDefaultSettings';

const GetPropsSSR = async (
	initializeApollo: any,
	query: any,
	type?: string,
	slug?: string,
) => {
	const client = initializeApollo();

	// res object to props
	let res: any = {};

	// ALL QUERIES
	// get Seo fields Settings
	try {
		res = ExtractData(client, query, type, slug);
	} catch (e) {
		null;
	}

	return res;
};

export default GetPropsSSR;

const ExtractData = async (
	client: any,
	query: any,
	type?: string,
	slug?: string,
) => {
	let res: any = {
		simplePage: [],
		postPage: [],
	};

	if (type === 'post' && slug) {
		const { data } = await client.query({
			query: query,
			variables: {
				first: 1,
				slug: String(slug),
			},
		});

		if (data && data.allBlogPosts.length) {
			res.postPage = {
				seoTitle:
					data?.allBlogPosts[0]?.seoTitle || data?.allBlogPosts[0]?.name,
				seoDescription:
					data?.allBlogPosts[0]?.seoDescription ||
					data?.allBlogPosts[0]?.excerpt,
				thmbnail: data?.allBlogPosts[0]?.thumbnail?.publicUrl || '',
				imagePost: data?.allBlogPosts[0]?.imagePost?.publicUrl || '',
				id: data?.allBlogPosts[0]?.id,
				name: data?.allBlogPosts[0]?.name,
				slug: data?.allBlogPosts[0]?.slug,
				excerpt: data?.allBlogPosts[0]?.excerpt,
				content: data?.allBlogPosts[0]?.content,
				category: data?.allBlogPosts[0]?.category,
			};
			return res;
		} else {
			res.postPage = settingsDefault;
			return res;
		}
	}

	const { data } = await client.query({
		query: query,
	});

	res.simplePage = data?.seoSettings?.length
		? data?.seoSettings[0]
		: settingsDefault;

	return res;
};
