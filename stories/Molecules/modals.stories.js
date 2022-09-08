import React from 'react';
import ModalComponent from '../../app/components/Molecules/Modal';
import Button from '../../app/components/Atoms/Button';
import useModal from '../../app/hook/useModal';

export default {
	title: 'Molecules/Modal',
	argTypes: {
		children: {
			control: {
				type: 'text',
			},
			defaultValue: 'content here',
		},
	},
};

const Template = ({ children, ...args }) => {
	const { isOpen, toggleModal } = useModal();
	return (
		<>
			<Button variant="FULL_MAGENTA" onClick={toggleModal}>
				Abrir modal
			</Button>
			<ModalComponent
				{...args}
				width={896}
				visible={isOpen}
				onCancel={toggleModal}
			>
				<div style={{ height: '150vh' }}>{children}</div>
			</ModalComponent>
		</>
	);
};
export const Modal = Template.bind({});
