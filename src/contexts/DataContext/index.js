import PropTypes from "prop-types";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

const DataContext = createContext({});

export const api = {
  loadData: async () => {
    const json = await fetch("/events.json");
    return json.json();
  },
};



export const DataProvider = ({ children }) => {
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  // Ajout de last pour récupérer le dernier évènement
  const [last, setLast] = useState(null)

  const getData = useCallback(async () => {
    try {
      const loadedData = await api.loadData()
      setData(loadedData);
      // Si data est défini et qu'il y a au moins 1 event alors je récupère le dernier évènement et je met à jour setLast avec
      if (loadedData && loadedData.events.length > 0) {
        const lastEvent = (loadedData.events[loadedData.events.length - 1]);
        setLast(lastEvent);
      }
    } catch (err) {
      setError(err);
    }
  }, []);
  

  useEffect(() => {
    if (data) return;
    getData();
  },[data]);



  return (
    <DataContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        data,
        error,
        // Ajout de la propriété pour y avoir accès dans ma page Home
        last: last || {title: "", cover: "", data: "", type: ""} ,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export const useData = () => useContext(DataContext);


export default DataContext;
