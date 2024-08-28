import './styles/main.scss'
import Header from './layouts/header/header';
import Content from './layouts/content/content';

function App() {
    return (
        <div className='wrapper'>
            <div className='main'>
                <Header />
                <Content />
            </div>
        </div>        
    )
}

export default App;