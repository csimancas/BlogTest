import {useEffect, useState} from 'react';
import axios from 'axios';
import {GET_ENTRIES} from '../api';

interface Entry {
  id: number;
  title: string;
  content: string;
  date: string;
  author: string;
}

const useEntryList = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    axios
      .get(GET_ENTRIES)
      .then(response => {
        setEntries(response.data.entries);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const [filteredData, setFilteredData] = useState<Entry[]>([]);
  const [selectedEntry, setSelectedEntry] = useState<Entry>();
  const [searchText, setSearchText] = useState('');

  const searchItem = (text: string) => {
    setSearchText(text);

    const query = searchText.toLowerCase();

    const filterData = entries.filter(item => {
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
    entries,
    searchText,
    searchItem,
    filteredData,
    selectedEntry,
    setSelectedEntry,
  };
};

export default useEntryList;
