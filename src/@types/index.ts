import type { ReactElement } from "react";

declare global {

    interface Experience {
        startDate?: string;
        endDate?: string;
        title: string;
        company: string;
        location?: string;
        description: string[] | string;
        skills?: string[];
        icon: string;
    }
    interface ImgProps {
        src: string;
        className?: string;
        alt?: string;
    }

    type SectionProps = {
        children: ReactElement;
        className?: string
        id: string
    };
}