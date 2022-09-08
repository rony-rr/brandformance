import React from 'react';
import Link from 'next/link';

import { StyleButtonLinkMobile, StyleContentModal, StyleCustomModal } from "./style";
import { menu } from './data';

interface IProps {
	visible: boolean;
	onClose: () => void;
}

const MenuMobile = ({ visible, onClose }: IProps) => {
	const onClickElement = React.useCallback(() => {
		onClose();
	}, [onClose]);

	return (
		<StyleCustomModal
			style={{ top: 10 }}
			width="100%"
			visible={visible}
			onCancel={onClose}
		>
			<img width={175} src="/static/img/brand-menu.png" alt="Brandformace" />

			<StyleContentModal>
				{menu.map(({ title, href, key }) => (
					<Link href={href} key={key} passHref>
						<a href={href} onClick={onClickElement}>
							<StyleButtonLinkMobile>{title}</StyleButtonLinkMobile>
						</a>
					</Link>
				))}
			</StyleContentModal>
		</StyleCustomModal>
	);
};

export default React.memo(MenuMobile);
