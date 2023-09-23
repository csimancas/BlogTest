import {useEffect, useState, useContext} from 'react';
import {Context as EntriesContext} from '../context/entriesContext';

interface Entry {
  id: number;
  title: string;
  content: string;
  date: string;
  author: string;
}

const useEntryList = () => {
  const {
    state: {data, isLoaded},
    getEntries,
  } = useContext(EntriesContext);

  useEffect(() => {
    getEntries();
  }, []);

  const [filteredData, setFilteredData] = useState<Entry[]>([]);
  const [selectedEntry, setSelectedEntry] = useState<Entry>();
  const [searchText, setSearchText] = useState('');

  const searchItem = (text: string) => {
    setSearchText(text);

    const query = searchText.toLowerCase();

    const filterData = data.filter(item => {
      const title = item.title.toLowerCase();
      const content = item.content.toLowerCase();
      const author = item.author.toLowerCase();

      return (
        title.includes(query) ||
        content.includes(query) ||
        author.includes(query)
      );
    });

    setFilteredData(filterData);
  };

  return {
    data,
    isLoaded,
    searchText,
    searchItem,
    filteredData,
    selectedEntry,
    setSelectedEntry,
  };
};

export default useEntryList;
