import type { JSX } from 'preact/jsx-runtime';
import './index.css';
import { page } from './signals';

export function App(): JSX.Element {
    return <>{page}</>;
}
