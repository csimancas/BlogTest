import {useState} from 'react';

interface Entry {
  id: number;
  title: string;
  content: string;
  date: string;
  author: string;
}

const useEntryList = () => {
  const [entries, setEntries] = useState([
    {
      id: 1,
      title: 'Hello World',
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      date: new Date().toLocaleDateString(),
      author: 'Jose luis',
    },
    {
      id: 2,
      title: 'Hello World',
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      date: new Date().toLocaleDateString(),
      author: 'Ricardo Penilla',
    },
    {
      id: 3,
      title: 'Hello World',
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      date: new Date().toLocaleDateString(),
      author: 'Dulce Rojas',
    },
    {
      id: 4,
      title: 'Hello World',
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      date: new Date().toLocaleDateString(),
      author: 'Pedro Picapiedra',
    },
    {
      id: 5,
      title: 'Hello World',
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      date: new Date().toLocaleDateString(),
      author: 'Pablo Marmol',
    },
  ]);

  const [filteredData, setFilteredData] = useState<Entry[]>([]);
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
  };
};

export default useEntryList;
