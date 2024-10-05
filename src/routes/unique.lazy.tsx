import {
    createLazyFileRoute,
    Outlet,
    useNavigate,
} from '@tanstack/react-router';
import { FC } from 'react';


const Page: FC = function () {
    const navigage       = useNavigate();
    const onClickHandler = function () {
        navigage({ to: `/unique/${ crypto.randomUUID() }` });
    };

    return (
        <div>
            <p>unique page</p>
            <button onClick={ onClickHandler }>go to random page</button>
            <Outlet/>
        </div>
    );
};

export const Route = createLazyFileRoute('/unique')({
    component: Page,
});
