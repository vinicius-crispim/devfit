import GlobalStyle from './GlobalStyle';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';

function App() {
    return (
        <>
            <GlobalStyle />
            <Header />
            <Home />
            <Footer/>
        </>
    )
}

export default App;