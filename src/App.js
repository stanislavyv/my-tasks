import MainContainer from './components/main-container';
import AppHeaderBar from './components/app-header-bar';
import TasksList from './components/tasks-list';

function App() {
    return (
        <>
            <MainContainer>
                <AppHeaderBar />
                <TasksList />
            </MainContainer>
        </>
    );
}

export default App;
