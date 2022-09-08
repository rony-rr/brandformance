import React from 'react';

import { Skeleton, Row, Col } from 'antd';

// components
import Container from 'components/Atoms/Container';
import Wysiwyg from 'components/Atoms/Wysiwyg';
import Title from 'components/Atoms/Title';
import Banner from 'components/Molecules/Banner';
import NewsletterComponent from 'components/Molecules/Newsletter';

// styles
import { StylePostTemplate } from './style';

interface IProps {
	postData: IData;
}

interface IData {
	seoTitle: string;
	seoDescription: string;
	thmbnail: string;
	imagePost: string;
	id: number | string;
	name: string;
	slug: string;
	excerpt: string;
	content: HTMLElement;
	category: ICats[];
}

interface ICats {
	id: number | string;
	name: string;
}

const PostTemplate = ({ postData }: IProps) => {

	const [loading, setLoading] = React.useState(true);

	React.useEffect(() => {
		setTimeout(() => { setLoading(false); }, 1000);
	}, []);

	if (loading) return <Skeleton active />;

	let dataShow = {
		imageBanner: postData.imagePost,
		imageBannerMobile: postData.thmbnail,
		name: postData.name,
		content: postData.content,
	};

	return (
		<StylePostTemplate>
			<Banner
				className="a-banner"
				image={dataShow.imageBanner}
				imageMovil={dataShow.imageBannerMobile}
			/>
			<Container>
				<div className="a-divider"/>
				<div className="a-divider"/>
				<Title
					className="a-title__post_bg"
					color="white"
					variant="BRANDON_55_65_800"
				>
					<strong>{dataShow.name}</strong>
				</Title>
				<Title
					className="a-title__post_mb"
					color="primary"
					variant="BRANDON_55_65_800"
				>
					<strong>{dataShow.name}</strong>
				</Title>
				<div className="a-divider"/>
				<Row className="m-content">
					<Col xs={24} sm={24} md={24} lg={15}>
						<Wysiwyg html={dataShow.content} />
					</Col>
					<Col xs={24} sm={24} md={24} lg={2}/>
					<NewsletterComponent />
				</Row>
				<div className="a-divider"/>
				<div className="a-divider"/>
			</Container>
		</StylePostTemplate>
	);
};

export default PostTemplate;
