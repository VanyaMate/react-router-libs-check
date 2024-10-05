import { ComponentPropsWithoutRef, FC, lazy, memo, Suspense } from 'react';
import { delay } from '../../helper/delay.ts';


export type UniquePageAsyncProps =
    {}
    & ComponentPropsWithoutRef<'div'>;

const UniquePage = lazy(() => import('./UniquePage.tsx').then(async (data) => {
    await delay(500);
    return {
        default: data.UniquePage,
    };
}));

export const UniquePageAsync: FC<UniquePageAsyncProps> = memo(function UniquePageAsync () {
    return (
        <Suspense fallback={ 'unique page loading...' }>
            <UniquePage/>
        </Suspense>
    );
});