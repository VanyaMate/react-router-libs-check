import { FC, memo } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { HomePageAsync } from '../pages/HomePage/HomePage.async.tsx';
import { AboutPageAsync } from '../pages/AboutPage/AboutPage.async.tsx';
import { ContentPageAsync } from '../pages/ContentPage/ContentPage.async.tsx';
import { NotFoundPage } from '../pages/NotFoundPage/NotFoundPage.tsx';
import { UniquePageAsync } from './page/UniquePage/UniquePage.async.tsx';


export const ReactRouterDom: FC = memo(function ReactRouterDom () {
    return (
        <BrowserRouter>
            <nav style={ { display: 'flex', gap: '10px' } }>
                <Link to={ '/' }>Home</Link>
                <Link to={ '/about' }>About</Link>
                <Link to={ '/content' }>Content</Link>
                <Link to={ '/unique' }>Unique</Link>
                <Link to={ '/404' }>NotFound</Link>
            </nav>
            <Routes>
                <Route path={ '/' } element={ <HomePageAsync/> }/>
                <Route path={ '/about' } element={ <AboutPageAsync/> }/>
                <Route path={ '/content' } element={ <ContentPageAsync/> }/>
                <Route path={ '/unique/:id?' } element={ <UniquePageAsync/> }/>
                <Route path={ '*' } element={ <NotFoundPage/> }/>
            </Routes>
        </BrowserRouter>
    );
});