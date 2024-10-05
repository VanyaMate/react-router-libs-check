import {
    createFileRoute,
    useNavigate,
} from '@tanstack/react-router';
import { FC } from 'react';


const Page: FC = function () {
    const { id }   = Route.useParams();
    const navigage = useNavigate();

    const onClickHandler = function () {
        navigage({ to: `/unique/${ crypto.randomUUID() }` });
    };

    return (
        <div>
            <p>unique page: { id }</p>
            <button onClick={ onClickHandler }>go to random page</button>
        </div>
    );
};

export const Route = createFileRoute(`/unique/$id`)({
    component: Page,
});
