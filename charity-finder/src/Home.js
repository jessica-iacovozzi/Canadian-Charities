import './App.css';
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

const API_URL = 'https://canadian-charities.fly.dev/api/v1/charities'

function Home() {
  const [charities, setCharities] = useState([])

  useEffect(() => {
    const getCharities = async () => {
      const res = await fetch(
        `${API_URL}?page=1&sort=name`
      );
      const data = await res.json();
      setCharities(data.data.data);
    };
    getCharities();
  }, []);

  const fetchCharities = async (currentPage) => {
    const res = await fetch(
      `${API_URL}?page=${currentPage}`
    );
    const data = await res.json();
    return data.data.data;
  };

  const handlePageClick = async (data) => {
    let currentPage = data.selected + 1
    const charitiesFormServer = await fetchCharities(currentPage);
    setCharities(charitiesFormServer)
  };

  return (
    <div className="container">
      <div className='row m-2'>
        {charities.map((charity) => {
          return (
            <div className='col-sm-6 col-md-4 v my-2'>
              <div className='card shadow-sm w-100' style={{ minHeight: 225 }}>
                <div className='card-body'>
                  <h5 className='card-title text-center h2'>{charity.attributes.name}</h5>
                  <h6 className='card-subtile text-center text-muted mb-2'>{charity.attributes.slogan}</h6>
                  <p className='card-text'>Website: {charity.attributes.website}</p>
                </div>
              </div>
            </div>
          )
        })}

        <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
          pageCount={41}
          onPageChange={handlePageClick}
          containerClassName={'pagination justify-content-center'}
          pageClassName={'page-item'}
          pageLinkClassName={'page-link'}
          previousClassName={'page-item'}
          previousLinkClassName={'page-link'}
          nextClassName={'page-item'}
          nextLinkClassName={'page-link'}
          breakClassName={'page-item'}
          breakLinkClassName={'page-link'}
          activeClassName={'active'}
        />
      </div>
    </div>
  );
}

export default Home;
