import './App.css';
import GetPosts from './components/GetPosts';
import CreatePost from './components/CreatePost';
import UpdatePost from './components/UpdatePost';
import DeletePost from './components/DeletePost';

function App() {
  return (
    <div className="App">
      <GetPosts />
      <CreatePost />
      <UpdatePost />
      <DeletePost />
  </div>
  );
}

export default App;
