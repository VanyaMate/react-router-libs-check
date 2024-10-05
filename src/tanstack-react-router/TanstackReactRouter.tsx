import { ComponentPropsWithoutRef, FC, memo } from 'react';


export type TanstackReactRouterProps =
    {}
    & ComponentPropsWithoutRef<'div'>;

export const TanstackReactRouter: FC<TanstackReactRouterProps> = memo(function TanstackReactRouter () {
    return (
        <div>Tanstack React Router</div>
    );
});