import { ComponentPropsWithoutRef, FC, memo } from 'react';
import { Switch, Route, Link } from 'wouter';
import { HomePageAsync } from '../pages/HomePage/HomePage.async.tsx';
import { AboutPageAsync } from '../pages/AboutPage/AboutPage.async.tsx';
import { ContentPageAsync } from '../pages/ContentPage/ContentPage.async.tsx';
import { NotFoundPage } from '../pages/NotFoundPage/NotFoundPage.tsx';
import { UniquePageAsync } from './page/UniquePage.async.tsx';


export type WouterProps =
    {}
    & ComponentPropsWithoutRef<'div'>;

export const Wouter: FC<WouterProps> = memo(function Wouter () {
    return (
        <>
            <nav>
                <Link href={ '/' }>Home</Link>
                <Link href={ '/about' }>About</Link>
                <Link href={ '/content' }>Content</Link>
                <Link href={ '/unique' }>Unique</Link>
                <Link href={ '/not-found' }>NotFound</Link>
            </nav>
            <Switch>
                <Route path={ '/' }><HomePageAsync/></Route>
                <Route path={ '/about' }><AboutPageAsync/></Route>
                <Route path={ '/content' }><ContentPageAsync/></Route>
                <Route path={ '/unique' }><UniquePageAsync/></Route>
                <Route path={ '/unique/:id' }><UniquePageAsync/></Route>
                <Route path={ '*' }><NotFoundPage/></Route>
            </Switch>
        </>
    );
});