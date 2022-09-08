import React from 'react';
import { ButtonProps } from 'antd/lib/button';

// styles
import { ButtonStyle, IBorderType, VariantButton } from './styles';

interface IButtonProps extends ButtonProps {
	variant: VariantButton;
	borderRadius?: IBorderType;
}

const Button = ({
	children,
	type,
	icon,
	htmlType,
	variant,
	borderRadius = 'default',
	...rest
}: IButtonProps) => {
	return (
		<ButtonStyle
			icon={icon}
			$variant={variant}
			type={type}
			$isBorder={borderRadius}
			htmlType={htmlType}
			{...rest}
		>
			{children}
		</ButtonStyle>
	);
};

export default React.memo(Button);
