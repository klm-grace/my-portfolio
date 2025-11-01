import type { ReactElement } from "react";

type SectionProps = {
    children: ReactElement;
    className?: string
};

const Section = ({ children, className }: SectionProps) => {
    return <section className={`section section-${className}`}>{children}</section>;
};

export default Section;
