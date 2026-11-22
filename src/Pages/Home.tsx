import type { JSX } from 'preact/jsx-runtime';
import IconButton from '../components/IconButton';
import { setPage, theme, toggleTheme } from '../signals';
import TextButton from '../components/TextButton';
import content from '../assets/json/content.json';

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
