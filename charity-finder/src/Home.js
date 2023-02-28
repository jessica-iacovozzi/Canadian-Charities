import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Banner from './components/Banner';
import Footer from './components/Footer';

const API_URL = 'https://canadian-charities.fly.dev/api/v1/charities'

function Home() {
  const [charities, setCharities] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [sortingMethod, setSortingMethod] = useState();
  const [attributes, setAttributes] = useState([]);
  const [city, setCity] = useState();
  // const [filteredCharities, setFilteredCharities] = useState(charities);

  useEffect(() => {
    const getAttributes = async () => {
      let results = [];

      for (let page = 1; ; page++) {
        const repo = await axios.get(`${API_URL}?page=${page}`);

        results = results.concat(repo.data.data.data);

        if (page > repo.data.meta.total_pages) {
          break;
        }
      }

      setAttributes(results);
    };
    getAttributes();

    const getCharities = async () => {
      const res = await fetch(
        `${API_URL}?sort=name`
      );
      const data = await res.json();
      const pages = data.meta.total_pages;
      setCharities(data.data.data);
      // setFilteredCharities(data.data.data);
      setPageCount(pages);
    };
    getCharities();
  }, []);

  const fetchCharities = async (currentPage, sort='name', city=null) => {
    const res = await fetch(
      `${API_URL}?page=${currentPage + 1}&sort=${sort}&city=${city}`
    );
    console.log(`${API_URL}?page=${currentPage + 1}&sort=${sort}&city=${city}`)
    const data = await res.json();
    const pages = data.meta.total_pages;
    setPageCount(pages);
    return data.data.data;
  };

  const handlePageClick = async (data) => {
    let currentPage = data.selected;
    const charitiesFormServer = await fetchCharities(currentPage, sortingMethod, city);
    setCharities(charitiesFormServer);
    setCurrentPage(currentPage);
    window.scrollTo({
      top: 400,
      left: 0,
      behavior: 'smooth'
    });
  };

  const handleCharitySorting = async (data) => {
    setCurrentPage(0);
    let currentPage = 0;
    let sortingMethod = data;
    setSortingMethod(sortingMethod);
    const charitiesFormServer = await fetchCharities(currentPage, sortingMethod, city);
    setCharities(charitiesFormServer);
    window.scrollTo({
      top: 400,
      left: 0,
      behavior: 'smooth'
    });
  };

    const handleCityFilter = async (data) => {
      setCurrentPage(0);
      let currentPage = 0;
      let city = data;
      setCity(city);
      console.log(city);
      const charitiesFormServer = await fetchCharities(currentPage, sortingMethod, city);
      setCharities(charitiesFormServer);
      window.scrollTo({
        top: 400,
        left: 0,
        behavior: 'smooth'
      });
  };

  const cities = [...new Set(attributes.map((charity) => charity.attributes.city.split(',')[0].trim()))].sort();

  return (
    <div>
      <Banner />
      <div className='row justify-content-center mt-4'>
        <div className='col-2'>
          <h3 className='text-center order-title'>Order charities by</h3>
          <select className='form-select mt-4' onChange={(e) => handleCharitySorting(e.target.value)}>
            <option value="name">Name</option>
            <option value="city">City</option>
            <option value="sector">Sector</option>
            <option value="rating">Rating</option>
            <option value="grade">Grade</option>
            <option value="demonstrated_impact">Impact</option>
            <option value="cents_to_cause_ratio">Cents to cause</option>
          </select>
        </div>
      </div>

      <div className='row justify-content-center mt-4'>
        <div className='col-2'>
          <h3 className='text-center order-title'>Filter charities by</h3>
          <select className='form-select mt-4' onChange={(e) => handleCityFilter(e.target.value)}>
            <option id='city' defaultValue='city'>City</option>
            {cities.map((city) => {
              return (
                <option value={city}>{city}</option>
              )
            })}
          </select>
        </div>
      </div>

      <div className="container">
        <div className='row m-3'>
          {charities.map((charity) => {
            return (
              <div key={charity.id} className='col-sm-6 v my-3'>
                <div className='card shadow w-100' style={{ minHeight: 400 }}>
                  <div className='card-body p-4'>
                    <a href={`//${charity.attributes.website}`} rel="noreferrer" target="_blank" className='text-decoration-none text-info'>
                      <h5 className='card-title text-center h3'>{charity.attributes.name}</h5>
                    </a>
                      <h6 className='card-subtile text-center text-muted mb-2'>{charity.attributes.slogan}</h6>
                      <p className='card-text'>City: {charity.attributes.city}</p>
                      <p className='card-text'>Sector: {charity.attributes.sector}</p>
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
            forcePage = {currentPage}
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
      <Footer />
    </div>
  );
}

export default Home;
