import TaskProvider from './context/TaskContext';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
                <ToastContainer limit={1} position="top-right" />
            </MainContainer>
        </>
    );
}

export default App;
