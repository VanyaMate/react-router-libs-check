import { ComponentPropsWithoutRef, FC, lazy, memo, Suspense } from 'react';
import { delay } from '../../helper/delay.ts';


export type HomePageAsyncProps =
    {}
    & ComponentPropsWithoutRef<'div'>;

const HomePage = lazy(() => import('./HomePage').then(async (data) => {
    await delay(500);
    return {
        default: data.HomePage,
    };
}));

export const HomePageAsync: FC<HomePageAsyncProps> = memo(function HomePageAsync () {
    return (
        <Suspense fallback={ 'loading home page...' }>
            <HomePage/>
        </Suspense>
    );
});