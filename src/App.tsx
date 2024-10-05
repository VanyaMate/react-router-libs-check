import { FC, memo } from 'react';
import css from './App.module.css';
import { ReactRouterDom } from './react-router-dom/ReactRouterDom.tsx';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen.ts';
import { Wouter } from './wouter/Wouter.tsx';


const router = createRouter({ routeTree });

export const App: FC = memo(function App () {
    return (
        <main className={ css.container }>
            <section className={ css.item }>
                <h1>react-router-dom</h1>
                <div>
                    <ReactRouterDom/>
                </div>
            </section>
            <section className={ css.item }>
                <h1>@tanstack/react-router</h1>
                <div>
                    <RouterProvider router={ router }/>
                </div>
            </section>
            <section className={ css.item }>
                <h1>wouter</h1>
                <div>
                    <Wouter/>
                </div>
            </section>
        </main>
    );
});