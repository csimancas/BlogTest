import CreateDataContext from './createDataContext';
import axios from 'axios';
import {GET_ENTRIES, CREATE_ENTRY} from '../api';

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'get_entries':
      return {
        data: action.payload,
        isLoaded: true,
      };
    case 'add_entry':
      return {
        data: [...state.data, action.payload],
      };
    default:
      return state;
  }
};

const getEntries = (dispatch: any) => {
  return async () => {
    try {
      const response = await axios.get(GET_ENTRIES);
      const isLoaded = true;
      dispatch({type: 'get_entries', payload: response.data.entries, isLoaded});
    } catch (error) {
      console.log(error);
    }
  };
};

const addEntry = (dispatch: any) => {
  return async (title: string, content: string, author: string) => {
    const entryObj = {
      title,
      content,
      author,
      date: new Date().toLocaleDateString(),
    };

    try {
      axios
        .post(CREATE_ENTRY, {
          title: title,
          author: author,
          content: content,
          date: new Date().toLocaleDateString(),
        })
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
      dispatch({type: 'add_entry', payload: entryObj});
    } catch (error) {
      console.log(error);
    }
  };
};

export const {Context, Provider} = CreateDataContext(
  reducer,
  {
    getEntries,
    addEntry,
  },
  {
    data: [],
    isLoaded: false,
  },
);
