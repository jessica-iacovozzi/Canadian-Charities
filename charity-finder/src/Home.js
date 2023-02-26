import './App.css';
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Banner from './components/Banner';

const API_URL = 'https://canadian-charities.fly.dev/api/v1/charities'

function Home() {
  const [charities, setCharities] = useState([]);
  const [pageCount, setpageCount] = useState(0);

  useEffect(() => {
    const getCharities = async () => {
      const res = await fetch(
        `${API_URL}?sort=name`
      );
      const data = await res.json();
      const pages = data.meta.total_pages;
      setCharities(data.data.data);
      setpageCount(pages)
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
    window.scrollTo(0,0);
  };

  return (
    <div>
      <Banner />

      <div className="container">
        <div className='row m-3'>
          {charities.map((charity) => {
            return (
              <div key={charity.id} className='col-sm-6 v my-3'>
                <div className='card shadow-sm w-100' style={{ minHeight: 345 }}>
                  <div className='card-body'>
                    <a href={`//${charity.attributes.website}`} target="_blank" className='text-decoration-none text-info'>
                      <h5 className='card-title text-center h3'>{charity.attributes.name}</h5>
                    </a>
                      <h6 className='card-subtile text-center text-muted mb-2'>{charity.attributes.slogan}</h6>
                      <p className='card-text'>Rating: {charity.attributes.rating}</p>
                      <p className='card-text'>Grade: {charity.attributes.grade}</p>
                      <p className='card-text'>Impact per dollar: {charity.attributes.demonstrated_impact}</p>
                      <p className='card-text'>{charity.attributes.cents_to_cause_ratio} of every dollar donated available for programs, after overhead costs of fundraising and admin/management (excluding surplus).</p>
                    </div>
                  </div>
              </div>
            )
          })}

          <ReactPaginate
            previousLabel={'Previous'}
            nextLabel={'Next'}
            pageCount={pageCount}
            onPageChange={handlePageClick}
            containerClassName={'pagination justify-content-center mt-3'}
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
    </div>
  );
}

export default Home;
