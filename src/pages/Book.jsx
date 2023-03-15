import Container from '../components/Container';
//import BookHouk from './BookHouk'

const Book = () => {
  const { bookData, loading, error } = BookHouk();

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && (
        <div>
          <h2>{bookData.title}</h2>
          <p>Author: {bookData.author}</p>
          <p>Publication year: {bookData.publicationYear}</p>
          <p>ISBN: {bookData.isbn}</p>
        </div>
      )}
    </div>
  );
};

export default BookHouk;
