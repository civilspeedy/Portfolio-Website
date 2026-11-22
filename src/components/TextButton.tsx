import type { JSX } from 'preact/jsx-runtime';
import './button.css';
import '../index.css';

type props = { readonly text: string };
export default function TextButton({ text }: props): JSX.Element {
    return (
        <a class="glass-button">
            <span class="liquid-glass-text" id="button-text">
                {text}
            </span>
        </a>
    );
}
