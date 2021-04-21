import Header from './Header.js'
import DateView from './DateView.js';
import Habits from './Habits.js';
import Input from './Input.js';

function App($app) {
    this.state = {
        header : false,
        dateView: false,
        habits: [
            'dfjdkf','fjdkfd','dfjiwjga','dfjiv','fiwig',
            'dfjdkf','fjdkfd','dfjiwjga','dfjiv','fiwig',
            'dfjdkf','fjdkfd','dfjiwjga','dfjiv','fiwig'
        ],
        input: {
            isActive: false
        }
    }

    const header = new Header({ $app, state: this.state });
    const dateView = new DateView({ $app, state: this.state.dateView });
    const habits = new Habits({ $app, state: this.state.habits });
    const input = new Input({ $app, state: this.state.input })
}

export default App;