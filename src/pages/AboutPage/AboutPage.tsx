import { ComponentPropsWithoutRef, FC, memo } from 'react';


export type AboutPageProps =
    {}
    & ComponentPropsWithoutRef<'div'>;

export const AboutPage: FC<AboutPageProps> = memo(function AboutPage () {
    return (
        <div>
            AboutPage
        </div>
    );
});