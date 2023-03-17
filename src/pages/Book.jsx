// import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import ErrorAlert from '../components/ErrorAlert';
// import Skeleton from 'react-loading-skeleton'
// import 'react-loading-skeleton/dist/skeleton.css'
// import Container from '../components/Container';


// const Book = () => {
//   const [book, setBook] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);

//   const { id } = useParams();

//   const getData = async () => {
//     const url = `https://api.matgargano.com/api/books/${id}`;
//     setLoading(true);
//     setError(false);

//     try {
//       const response = await fetch(url, { mode: 'cors' });
//       const data = await response.json();
//       setBook(data);
//     } catch (e) {
//       setError('Error: ' + e.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   return (
//     <Container>

    

//       {error && <ErrorAlert>{error}</ErrorAlert>}
//       {loading && <Skeleton count={3} />}
//       <>
//       {book && (
//         <div>
//           <h2 >TITLE: {book.title}</h2>
//           <p >Author: {book.author}</p>
//           <p >Publisher: {book.publisher}</p>
//           <p>Publication Year: {book.year}</p>
//           <p >Number of Pages: {book.pages}</p>
//           <p >Country Origin: {book.country}</p>
//           <img  src={book.imageURL} alt="" />

//         </div>
//       )}
//       </>
        
//     </Container>

//   );
// };

// export default Book;

import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ErrorAlert from '../components/ErrorAlert';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Container from '../components/Container';

const Book = () => {

    const [book, setBook] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const {id} = useParams();

    const getData = async () => {
        const url = `https://api.matgargano.com/api/books/${id}`;
        setLoading(true);
        setError(false);
        try {
            const request = await fetch(url);
            const response = await request.json();
            setBook(response);
           
        } catch(e) {
            setError('Error: ' + e.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getData();
    }, []);


    return (
    <Container>
        {error && <ErrorAlert>{error}</ErrorAlert>}
        {!error && loading && <div className="max-w-[230px]"><Skeleton count="10" /></div>}
        {!error && !loading && 
            <>
            {book && (
             <div>
                <p> TITLE: {book.title}</p>
                <p> AUTHOR: {book.author}</p>
                  
                </div>
            )} 

            </>  
            
        }
         </Container>
    );
};

export default Book;
