import React, { useState } from 'react';
import { Menu } from 'antd';
import { CheckOutlined, DownOutlined } from '@ant-design/icons';
import useModal from 'hook/useModal';

// components
import Text from 'components/Atoms/Text';

// styles
import {
	ButtonsStyle,
	DropdownStyle,
	DropdownStyleIcon,
	StyleMenu,
	StyleMenuText,
} from './style';

interface IDropDown {
	items: IMenu[];
	label: string;
	onChange?: (v: string) => void;
	isHover?: boolean;
	className?: string;
	style?: React.ReactNode;
	labelColor?: 'magenta' | 'azulVioleta';
}

const Dropdown = ({
	isHover,
	items,
	label,
	onChange,
	labelColor = 'azulVioleta',
	...rest
}: IDropDown) => {
	// const ref = React.useRef();
	const { isOpen, toggleModal } = useModal();
	const [current, setCurrent] = useState<IMenu | undefined>(undefined);
	// useOnClickOutside(ref, closeModal);

	const onClickMenu = React.useCallback(
		({ key }: { key: string }) => {
			const item = items.find((i) => i.value === key);
			setCurrent(item);
			if (onChange && item) {
				onChange(item.value)
			}
			toggleModal();
		},
		[items, toggleModal, onChange],
	);

	// click flag
	const flag = React.useMemo<['hover'] | ['click']>(() => {
		if (isHover) {
			return ['hover'];
		}
		return ['click'];
	}, [isHover]);

	// selectKeys
	const selectKey = React.useMemo<string[]>(() => {
		if (current) {
			return [current.value];
		}
		return [];
	}, [current]);

	const menu = React.useMemo(() => {
		return (
			<StyleMenu
				selectedKeys={selectKey}
				$color={labelColor}
				onClick={onClickMenu}
			>
				{items.map(({ value, label }) => (
					<Menu.Item key={value}>
						<StyleMenuText>
							{label}
							<DropdownStyleIcon>
								<CheckOutlined />
							</DropdownStyleIcon>
						</StyleMenuText>
					</Menu.Item>
				))}
			</StyleMenu>
		);
	}, [selectKey, labelColor, onClickMenu, items]);

	return (
		<DropdownStyle visible={isOpen} overlay={menu} trigger={flag} {...rest}>
			<ButtonsStyle onClick={toggleModal}>
				<Text variant="MONTSERRAT_16_22_400" color={labelColor}>
					{current?.label || label}{' '}
					<DropdownStyleIcon>
						<DownOutlined />
					</DropdownStyleIcon>
				</Text>
			</ButtonsStyle>
		</DropdownStyle>
	);
};

export default React.memo(Dropdown);
