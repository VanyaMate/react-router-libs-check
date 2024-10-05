import { createRootRoute, Link, Outlet } from '@tanstack/react-router';


export const Route = createRootRoute({
    component: () => (
        <main>
            <nav style={ { display: 'flex', gap: '10px' } }>
                <Link to={ '/' }>Home</Link>
                <Link to={ '/about' }>About</Link>
                <Link to={ '/content' }>Content</Link>
                <Link to={ '/unique' }>Unique</Link>
                <Link to={ '/404' }>NotFound</Link>
            </nav>
            <Outlet/>
        </main>
    ),
});