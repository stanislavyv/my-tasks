import MainContainer from './components/main-container';
import AppHeaderBar from './components/app-header-bar';
import TasksList from './components/tasks-list';
import AddButton from './components/add-button';

function App() {
    return (
        <>
            <MainContainer>
                <AppHeaderBar />
                <TasksList />
                <AddButton />
            </MainContainer>
        </>
    );
}

export default App;
