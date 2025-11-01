

const Section = ({ children, className, id }: SectionProps) => {
    return <section id={id} className={`section section-${className}`}>{children}</section>;
};

export default Section;
