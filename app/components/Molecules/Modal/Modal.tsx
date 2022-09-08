import React from 'react';
import { ModalProps } from 'antd/lib/modal';
import Image from 'next/image';

import Scrollbar from 'components/Atoms/Scrollbar';
import { StyleIconClose, StyleModal } from './style';

interface IProps extends ModalProps {
	children: React.ReactNode;
}

const Modal = ({
	children,
	visible,
	onCancel,
	onOk,
	title,
	footer = null,
	...rest
}: IProps) => {
	return (
		<StyleModal
			onOk={onOk}
			title={title}
			footer={footer}
			visible={visible}
			onCancel={onCancel}
			style={{ top: 50 }}
			maskStyle={{backgroundColor: 'rgba(34,31,32, .85)'}}
			closeIcon={
				<StyleIconClose>
					<Image src="/static/img/close.svg" alt="" width={44} height={44} />
				</StyleIconClose>
			}
			{...rest}
		>
			<Scrollbar height="calc(100vh - 100px)">
				{children}
			</Scrollbar>
		</StyleModal>
	);
};

export default React.memo(Modal);
