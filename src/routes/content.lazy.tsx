import { createLazyFileRoute } from '@tanstack/react-router';
import { ContentPage } from '../pages/ContentPage/ContentPage.tsx';


export const Route = createLazyFileRoute('/content')({
    component: ContentPage,
});
