import TaskProvider from './context/TaskContext';

import MainContainer from './components/main-container';
import AppHeaderBar from './components/app-header-bar';
import TasksList from './components/tasks-list';
import AddDialog from './components/add-dialog';
import Toast from './components/toast';

function App() {
    return (
        <MainContainer>
            <AppHeaderBar />
            <TaskProvider>
                <TasksList />
                <AddDialog />
            </TaskProvider>
            <Toast />
        </MainContainer>
    );
}

export default App;
