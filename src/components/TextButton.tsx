import type { JSX } from 'preact/jsx-runtime';
import './button.css';
import '../index.css';

type props = { readonly text: string; onClick: () => void };
export default function TextButton({ text, onClick }: props): JSX.Element {
    return (
        <a class="glass-button" onClick={onClick}>
            <span class="liquid-glass-text" id="button-text">
                {text}
            </span>
        </a>
    );
}
