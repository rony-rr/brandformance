import React from 'react';
import { useQuery } from '@apollo/client';

// data
import { GET_SETTINGS } from 'graphql/home';

interface SettingsProps extends SettingProject {
	// eslint-disable-next-line no-unused-vars
	setSettings: (v: SettingsProps) => void;
}

const defaultValue: SettingsProps = {
	titleContact: '',
	contentContact: '',
	ctaContact: '',
	emailContact: '',
	titleCookie: '',
	contentCookie: '',
	ctaCookie: '',
	terms: {
		publicUrl: ''
	},
	setSettings: () => {},
};

export const SettingsContext = React.createContext<SettingsProps>(defaultValue);

interface ProviderProps {
	children: React.ReactNode;
}

interface GraphSettingsRes {
	settings: SettingProject[];
}

export const SettingsSiteProvider = ({ children }: ProviderProps) => {
	const { data } = useQuery<GraphSettingsRes>(GET_SETTINGS);
	const [state, setState] = React.useState<Omit<SettingsProps, 'setSettings'>>(
		defaultValue,
	);

	const setSettings = React.useCallback(
		(v: Omit<SettingsProps, 'setSettings'>) => {
			setState(v);
		},
		[],
	);

	React.useEffect(() => {
		if (data?.settings && data?.settings?.length) {
			return setSettings(data.settings[0]);
		}
	}, [data, setSettings]);

	return (
		<SettingsContext.Provider
			value={{
				...state,
				setSettings,
			}}
		>
			{children}
		</SettingsContext.Provider>
	);
};
