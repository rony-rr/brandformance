import React from 'react';
import { useRouter } from "next/router";

// components
import Button from 'components/Atoms/Button';

// styles
import { StyleCard, StyleContainer, StyledImage, StyleTitle, StyleBoxContent } from './style';

interface ICardProps {
	img: string;
	title: string;
	id: any;
	url: string;
}

const CardPostBlog = ({
	img,
	title,
	url = '',
}: ICardProps) => {
	const router = useRouter();

	const goTo = (slug: string) => {
		router.push({
			pathname: "/blog/[slug]",
			query: { slug }
		});
	};

	return (
		<StyleCard xs={24} sm={24} md={12} lg={8}>
			<StyleContainer span={24} className="m-container__card">
				<StyledImage src={img} alt={title} />
				<StyleBoxContent className="m-box-content">
					<StyleTitle color="primary" variant="BRANDON_25_28_800">
						{title}
					</StyleTitle>
					<Button variant="FULL_PRIMARY" onClick={() => goTo(url)}>
						Leer más
					</Button>
				</StyleBoxContent>
			</StyleContainer>
		</StyleCard>
	);
};

export default CardPostBlog;
