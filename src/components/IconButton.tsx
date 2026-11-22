import type { JSX } from 'preact/jsx-runtime';
import '../index.css';
import FeatherIcon from 'feather-icons-react';
import type { CSSProperties } from 'preact';

type buttonProps = {
    readonly icon: 'moon' | 'sun';
    onPress: () => void;
    readonly styleOveride?: CSSProperties;
};

export default function IconButton({
    icon,
    onPress,
    styleOveride,
}: buttonProps): JSX.Element {
    return (
        <a class="glass-button" onClick={onPress} style={styleOveride}>
            <FeatherIcon icon={icon} />
        </a>
    );
}
