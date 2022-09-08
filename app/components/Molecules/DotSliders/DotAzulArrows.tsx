import React from 'react';

// components
import {
	CustomIcon,
	SVGArrowLeftIcon,
	SVGArrowRightIcon,
} from 'components/Atoms/Icons';

// styles
import {
	DotsWrapperModalProject,
	DotsWrapperUl,
	StylePrevNextButton,
} from './style';

interface IProps {
	onPrev: () => void;
	onNext: () => void;
	dots: React.ReactNode;
	style?: React.CSSProperties;
}

const DotAzulArrows = ({ onPrev, dots, onNext, style = {} }: IProps) => {
	return (
		<DotsWrapperModalProject style={style} className="m-dots__custm" >
			<DotsWrapperUl>
				<StylePrevNextButton
					className="prev-button"
					icon={<CustomIcon icon={SVGArrowLeftIcon} />}
					onClick={onPrev}
				/>
				{dots}
				<StylePrevNextButton
					className="next-button"
					icon={<CustomIcon icon={SVGArrowRightIcon} />}
					onClick={onNext}
				/>
			</DotsWrapperUl>
		</DotsWrapperModalProject>
	);
};

export default React.memo(DotAzulArrows);
