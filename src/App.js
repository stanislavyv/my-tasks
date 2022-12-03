import TaskProvider from './context/TaskContext';
import { useThemeMode } from './context/ThemeModeContext';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import MainContainer from './components/main-container';
import AppHeaderBar from './components/app-header-bar';
import TasksList from './components/tasks-list';
import AddDialog from './components/add-dialog';

function App() {
    const { mode } = useThemeMode();

    return (
        <>
            <MainContainer>
                <AppHeaderBar />
                <TaskProvider>
                    <TasksList />
                    <AddDialog />
                </TaskProvider>
                <ToastContainer
                    limit={1}
                    position="top-right"
                    closeOnClick={false}
                    theme={mode}
                />
            </MainContainer>
        </>
    );
}

export default App;
