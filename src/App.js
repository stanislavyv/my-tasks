import MainContainer from './components/main-container';
import AppHeaderBar from './components/app-header-bar';
import TasksList from './components/tasks-list';
import AddButton from './components/add-button';
import AddDialog from './components/add-dialog';

function App() {
    return (
        <>
            <MainContainer>
                <AppHeaderBar />
                <TasksList />
                <AddDialog />
            </MainContainer>
        </>
    );
}

export default App;
