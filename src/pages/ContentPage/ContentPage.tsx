import { ComponentPropsWithoutRef, FC, memo } from 'react';


export type ContentPageProps =
    {}
    & ComponentPropsWithoutRef<'div'>;

export const ContentPage: FC<ContentPageProps> = memo(function ContentPage () {
    return (
        <div>
            ContentPage
        </div>
    );
});