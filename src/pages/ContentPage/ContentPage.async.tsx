import { ComponentPropsWithoutRef, FC, lazy, memo, Suspense } from 'react';
import { delay } from '../../helper/delay.ts';


export type ContentPageAsyncProps =
    {}
    & ComponentPropsWithoutRef<'div'>;

const ContentPage = lazy(() => import('./ContentPage.tsx').then(async (data) => {
    await delay(500);
    return {
        default: data.ContentPage,
    };
}));

export const ContentPageAsync: FC<ContentPageAsyncProps> = memo(function ContentPageAsync () {
    return (
        <Suspense fallback={ 'loading content page...' }>
            <ContentPage/>
        </Suspense>
    );
});