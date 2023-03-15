import { useState, useEffect } from 'react';

const BookHouk = () => {
  const [bookData, setBookData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookData = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://api.matgargano.com/api/books/1003');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setBookData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchBookData();
  }, []);

  return { bookData, loading, error };
};

export default BookHouk;
