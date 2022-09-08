import React from 'react';

// components
import Modal from 'components/Molecules/Modal';
import ProjectMoreInfo from 'components/Organisms/ProjectMoreInfo';

import { ModalContentStyle } from './style';

interface IProps {
	visible: boolean;
	currentProject?: any;
	onClose: () => void;
}

const ModalMoreInfoProject = ({ currentProject, visible, onClose }: IProps) => {
	return (
		<Modal width={896} visible={visible} onCancel={onClose}>
			<ModalContentStyle>
				<ProjectMoreInfo currentProject={currentProject} />
			</ModalContentStyle>
		</Modal>
	);
};

export default React.memo(ModalMoreInfoProject);
