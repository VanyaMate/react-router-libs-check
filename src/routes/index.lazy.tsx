import { createLazyFileRoute } from '@tanstack/react-router';
import { HomePage } from '../pages/HomePage/HomePage.tsx';


export const Route = createLazyFileRoute('/')({
    component: HomePage,
});