import React from 'react';
import { InstagramOutlined } from '@ant-design/icons';
import * as ga from 'lib/ga';

// components
import Button from 'components/Atoms/Button/Button';
import { VariantButton } from 'components/Atoms/Button/styles';
import { CustomIcon, SVGFacebook, SVGLinkedin } from 'components/Atoms/Icons';

// styles
import { StyleIconMediaSocial } from './style';

type SocialType =
	| 'Linkedin'
	| 'Youtube'
	| 'Instagram'
	| 'Facebook'
	| 'Twitter'
	| 'Pinterest';

interface IProps {
	variantButton?: VariantButton;
}

const SocialMedia = ({ variantButton = 'FULL_MAGENTA' }: IProps) => {
	const onClick = (label: SocialType) => {
		ga.push({
			label,
			category: 'engagement',
			event: 'social',
		});
	};

	return (
		<StyleIconMediaSocial>
			{/* Facebook */}
			<a
				target="_blank"
				rel="noopener noreferrer"
				href="https://fb.me/Brandformance.io"
				onClick={() => onClick('Facebook')}
			>
				<Button
					className="mr-1"
					variant={variantButton}
					icon={<CustomIcon icon={SVGFacebook} />}
				/>
			</a>
			{/* instagram */}
			<a
				target="_blank"
				rel="noopener noreferrer"
				href="https://www.instagram.com/brandformance.io"
				onClick={() => onClick('Instagram')}
			>
				<Button
					className="mr-1"
					variant={variantButton}
					icon={<InstagramOutlined />}
				/>
			</a>
			{/* TODO: actualmente no hay links del resto de redes sociales */}
			{/*<Button
				className="mr-1"
				variant={variantButton}
				icon={<YoutubeFilled />}
			/>*/}

			{/* linkedin */}
			<a
				target="_blank"
				rel="noopener noreferrer"
				href="https://www.linkedin.com/company/brandformance-io"
				onClick={() => onClick('Linkedin')}
			>
				<Button
					variant={variantButton}
					icon={<CustomIcon icon={SVGLinkedin} />}
				/>
			</a>
		</StyleIconMediaSocial>
	);
};

export default SocialMedia;
