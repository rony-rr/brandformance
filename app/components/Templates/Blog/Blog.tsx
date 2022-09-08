import React from 'react';

// components
import Banner from 'components/Molecules/Banner';
import SectionPosts from 'components/Organisms/SectionPosts';

// styles
import { CustomContainer, StyleBlogTemplate } from "./style";

const BlogTemplate = () => {
	return (
		<StyleBlogTemplate>
			<Banner
				image="/static/img/Banner_home.jpg"
				imageMovil="/static/img/Banner_home_movil.png"
			/>
			<CustomContainer>
				<SectionPosts />
			</CustomContainer>
		</StyleBlogTemplate>
	);
};

export default BlogTemplate;
