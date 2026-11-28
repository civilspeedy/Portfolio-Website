import type { JSX } from 'preact/jsx-runtime';
import { setPage, theme, toggleTheme } from '../signals';

import content from '../assets/json/content.json';
import IconButton from '../components/buttons/IconButton';
import TextButton from '../components/buttons/TextButton';

export default function Home(): JSX.Element {
    return (
        <>
            <h1 class="liquid-glass-text" id="main-heading">
                Charlie Slorick
            </h1>
            <IconButton
                icon={theme.value ? 'moon' : 'sun'}
                onPress={toggleTheme}
                styleOveride={{ position: 'absolute', top: 10, right: 10 }}
            />
            {content.map((i) => (
                <TextButton text={i.title} onClick={() => setPage(i.title)} />
            ))}
        </>
    );
}
