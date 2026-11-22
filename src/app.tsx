import type { JSX } from 'preact/jsx-runtime';
import './index.css';
import IconButton from './components/IconButton';
import { theme, toggleTheme } from './signals';

export function App(): JSX.Element {
    return (
        <>
            <h1>Charlie Slorick</h1>
            <IconButton
                icon={theme.value ? 'moon' : 'sun'}
                onPress={toggleTheme}
                styleOveride={{ position: 'absolute', top: 10, right: 10 }}
            />
        </>
    );
}
