import { useEffect, useState } from 'react';
import { api } from './api/api';
import './App.css';
import Content from './components/Content';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  const [search, setSearch] = useState('');

  const [songs, setSongs] = useState('');

  const fetchData = async(search) => {
    const res = await api.get(`/search?&media=music&term=${search}`)
                  .then((res) => setSongs(res.data.results))
                  .catch((error) => console.log(error))
          console.log(songs);
  }

  const handleSubmit = (search) => {
    setSearch(search)
    console.log(search);
    fetchData(search)
  }

  useEffect(() => {
    fetchData('beyonce');
  }, [])

  return (
    <div className="App">
      <Sidebar />
      <Header handleSubmit={handleSubmit} search={search} />
      <Content songs={songs} />
    </div>
  );
}

export default App;
