import React from 'react';
import { NextSeo } from 'next-seo';

// utils
import { settingsDefault } from 'utils/getDefaultSettings';

// import interface
import { SeoInterface } from 'utils/Interfaces';

interface IProps {
	seoSettings: SeoInterface;
}

const Seo = ({ seoSettings }: IProps) => {
	const [siteUrl, setSiteUrl] = React.useState('');

	React.useEffect(() => {
		setSiteUrl(window.location.protocol + '//' + window.location.host);
	}, []);

	let seoSet: any = {};
	if (seoSettings.seoTitle) {
		seoSet.title = seoSettings.seoTitle;
	}
	if (seoSettings.seoDescription) {
		seoSet.description = seoSettings.seoDescription;
	}
	let OGAdd: any = {};
	if (siteUrl) {
		seoSet.canonical = siteUrl;
		seoSet.url = siteUrl;
		OGAdd.type = 'website';
		OGAdd.site_name = settingsDefault.site_name;
	}

	let ObjImage: any = {};
	if (seoSettings.thmbnail) {
		ObjImage.url = seoSettings.thmbnail;
		ObjImage.width = 450;
		ObjImage.height = 253;
		ObjImage.alt = seoSettings.seoTitle;
	}

	return (
		<NextSeo
			{...seoSet}
			additionalMetaTags={[
				{
					property: 'keywords',
					content:
						seoSettings.seoMetakeywords || settingsDefault.seoMetakeywords,
				},
				{
					property: 'author',
					content: settingsDefault.author,
				},
			]}
			openGraph={{
				...seoSet,
				...OGAdd,
				images: [ObjImage],
			}}
		/>
	);
};

export default Seo;
