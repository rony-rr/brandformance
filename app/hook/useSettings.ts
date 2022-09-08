import { useContext } from 'react';
import { SettingsContext } from 'Context/settings.context';

export const useSettings = () => {
	return useContext(SettingsContext);
};
