import './App.css';
import {Background} from './Background/Background';
import {Title} from './Title/Title';
import {Link} from './Link/Link';

export const App: React.FC = () => {
    return (
        <div className="app">
            <Background dogesCount={50} />

            <Title>{'🎉 2021 🎉'}</Title>

            <Link href="https://bit.ly/37zbq84" />
        </div>
    );
}

export default App;
