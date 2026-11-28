import type { JSX } from 'preact/jsx-runtime';
import type { Job } from '../types';
import '../index.css';

export default function CareerNode({
    title,
    description,
    date,
    url,
    logo_url,
    key_skills,
    company,
}: Job): JSX.Element {
    const dateRange = `${date.start} to ${date.end}`;
    return (
        <div class="liquid-glass">
            <img src={logo_url} />
            <div>
                <h1>
                    {title} -{' '}
                    <a href={url} target="_blank">
                        {company}
                    </a>
                </h1>
                <h2>{dateRange}</h2>
                <div style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
                    {key_skills.map((skill, index) => (
                        <p class="liquid-glass" key={index}>
                            {skill}
                        </p>
                    ))}
                </div>
                <p>{description}</p>
            </div>
        </div>
    );
}
