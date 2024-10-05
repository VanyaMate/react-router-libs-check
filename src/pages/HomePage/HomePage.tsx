import { ComponentPropsWithoutRef, FC, memo } from 'react';


export type HomePageProps =
    {}
    & ComponentPropsWithoutRef<'div'>;

export const HomePage: FC<HomePageProps> = memo(function HomePage () {
    return (
        <div>
            HomePage
        </div>
    );
});