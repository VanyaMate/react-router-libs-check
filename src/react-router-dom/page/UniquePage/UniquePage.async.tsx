import { FC, lazy, memo, Suspense } from 'react';
import { delay } from '../../../helper/delay.ts';
import { useParams } from 'react-router-dom';


const UniquePage = lazy(() => import('./UniquePage.tsx').then(async (data) => {
    await delay(500);
    return {
        default: data.UniquePage,
    };
}));

export const UniquePageAsync: FC = memo(function UniquePageAsync () {
    const params = useParams();

    return (
        <Suspense fallback={ 'Unique loading...' }>
            <UniquePage uniqueId={ params?.id ?? 'no-id' }/>
        </Suspense>
    );
});