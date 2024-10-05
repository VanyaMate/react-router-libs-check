import { FC, memo } from 'react';


export const NotFoundPage: FC = memo(function NotFoundPage () {
    return (
        <div>
            <h2>404</h2>
            <p>Not Found</p>
        </div>
    );
});