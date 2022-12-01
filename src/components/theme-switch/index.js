import { useState } from 'react';
import { useThemeMode } from '../../context/ThemeModeContext';

import { Switch } from '@mui/material';

const ThemeSwitch = () => {
    const [checked, setChecked] = useState(false);
    const { toggleThemeMode } = useThemeMode();

    const handleChange = () => {
        setChecked((prev) => !prev);
        toggleThemeMode();
    };

    return (
        <Switch
            edge="start"
            color="default"
            checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
        />
    );
};

export default ThemeSwitch;
