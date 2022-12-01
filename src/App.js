import TaskProvider from './context/TaskContext';

import MainContainer from './components/main-container';
import AppHeaderBar from './components/app-header-bar';
import TasksList from './components/tasks-list';
import AddDialog from './components/add-dialog';

function App() {
    return (
        <>
            <MainContainer>
                <AppHeaderBar />
                <TaskProvider>
                    <TasksList />
                    <AddDialog />
                </TaskProvider>
            </MainContainer>
        </>
    );
}

export default App;
