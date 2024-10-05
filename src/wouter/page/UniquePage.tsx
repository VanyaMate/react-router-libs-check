import { ComponentPropsWithoutRef, FC, memo } from 'react';
import { useLocation, useParams } from 'wouter';


export type UniquePageProps =
    {}
    & ComponentPropsWithoutRef<'div'>;

export const UniquePage: FC<UniquePageProps> = memo(function UniquePage () {
    const { id }             = useParams();
    const [ _, setLocation ] = useLocation();

    return (
        <div>
            UniquePage id: { id ?? '[no-id]' }
            <button onClick={ () => {
                setLocation(`/unique/${ crypto.randomUUID() }`);
            } }>
                go to random
            </button>
        </div>
    );
});