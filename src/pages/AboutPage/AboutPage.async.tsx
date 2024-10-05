import { ComponentPropsWithoutRef, FC, lazy, memo, Suspense } from 'react';
import { delay } from '../../helper/delay.ts';


export type AboutPageAsyncProps =
    {}
    & ComponentPropsWithoutRef<'div'>;

const AboutPage = lazy(() => import('./AboutPage.tsx').then(async (data) => {
    await delay(500);
    return {
        default: data.AboutPage,
    };
}));

export const AboutPageAsync: FC<AboutPageAsyncProps> = memo(function AboutPageAsync () {
    return (
        <Suspense fallback={ 'loading about page...' }>
            <AboutPage/>
        </Suspense>
    );
});