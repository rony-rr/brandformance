import React, { useEffect } from 'react';
import { Alert } from 'antd';
import Cookies from 'universal-cookie';

// hooks
import { useSettings } from 'hook/useSettings';

// styles
import { StyleModal } from './style';

const PolicyCookie = () => {
	const settings = useSettings();
	const [show, setShow] = React.useState<boolean>(false);
	const cookieName = 'displayPolicyCookie';

	const onClose = () => {
		const cookies = new Cookies();
		cookies.set(cookieName, true);
	};

	useEffect(() => {
		const cookies = new Cookies();
		if (!cookies.get(cookieName)) setShow(true);
	}, []);

	if (
		!show ||
		!settings?.contentCookie ||
		!settings?.ctaCookie ||
		!settings?.titleCookie
	) {
		return null;
	}

	return (
		<StyleModal>
			<Alert
				message={
					<div>
						<h2 dangerouslySetInnerHTML={{ __html: settings.titleCookie }} />
						<p dangerouslySetInnerHTML={{ __html: settings.contentCookie }} />
					</div>
				}
				type="warning"
				closeText={settings.ctaCookie}
				closable
				afterClose={onClose}
			/>
		</StyleModal>
	);
};

export default PolicyCookie;
