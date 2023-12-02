import GlobalStyle from './GlobalStyle';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import AppRouter from './routes';

function App() {
    return (
        <>
            <GlobalStyle />
            <AppRouter />
            {/* <GlobalStyle />
            <Header />
            <Home />
            <Footer/> */}
        </>
    )
}

export default App;