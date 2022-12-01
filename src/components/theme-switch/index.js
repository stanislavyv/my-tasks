import { useState } from 'react';
import { Switch } from '@mui/material';

const ThemeSwitch = () => {
    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked((prev) => !prev);
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
