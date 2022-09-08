import React from 'react';
import { StyleClientCard, StyleClientImage, StyleClientTitle, StyleWrapClientImage } from './style';

interface IProps {
	image: string;
	name: string;
}

const ClientCard = ({ image, name }: IProps) => {
	return (
		<StyleClientCard>
			<StyleWrapClientImage>
				<StyleClientImage src={image}/>
			</StyleWrapClientImage>
			<StyleClientTitle>{name}</StyleClientTitle>
		</StyleClientCard>
	);
};

export default React.memo(ClientCard)
