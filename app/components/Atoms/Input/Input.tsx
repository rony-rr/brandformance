import React from 'react';
import { InputStyle } from './style';

interface InputProps {
	className: string;
	placeholder: string;
}

const InputElement = ({	className, placeholder }: InputProps) => (
	<InputStyle className={className} placeholder={placeholder} />
);

export default React.memo(InputElement);
