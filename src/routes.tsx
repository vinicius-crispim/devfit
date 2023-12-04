import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Load = lazy(() => import('./pages/Load'));

const AppRouter = () => {
    return(
        <main>
            <Router>
                <Suspense fallback={<Load/>}>
                    <Header/>
                    <Routes>
                        <Route path='/'>
                            <Route index element={<Home/>} />
                            <Route path='contato' element={<Load/>}/>
                            <Route path='sobrenos' element={<About/>}/>
                        </Route>
                    </Routes>
                    <Footer/>
                </Suspense>
            </Router>
        </main>
    )
}

export default AppRouter;