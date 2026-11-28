import type { JSX } from 'preact/jsx-runtime';
import careerHisory from '../assets/json/career_history.json';
import CareerNode from '../components/CareerNode';

export default function CareerHistory(): JSX.Element {
    return (
        <>
            {careerHisory.career_history.map((j, index) => (
                <CareerNode
                    key={index}
                    title={j.title}
                    company={j.company}
                    url={j.url}
                    logo_url={j.logo_url}
                    date={j.date}
                    key_skills={j.key_skills}
                    description={j.description}
                />
            ))}
        </>
    );
}
