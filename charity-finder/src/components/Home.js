import '../css/Home.css';
import axios from 'axios';
import BurgerNav from './BurgerNav';
import Navbar from './Navbar';
import Banner from './Banner';
import Footer from './Footer';
import ResultsCount from './ResultsCount';
import HomeInfo from './HomeInfo';
// import SearchBar from './components/SearchBar';
import { RxPinTop } from 'react-icons/rx';
import { useEffect, useState } from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react'
import ReactPaginate from 'react-paginate';
import Select from 'react-select';

export const API_URL = 'https://canadian-charities.fly.dev/api/v1/charities'

export function Home() {
  const [charities, setCharities] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [sortingMethod, setSortingMethod] = useState();
  const [attributes, setAttributes] = useState([]);
  const [city, setCity] = useState();
  const [sector, setSector] = useState();
  const [charityName, setCharityName] = useState();

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
      setPageCount(pages);
    };
    getCharities();
  }, []);

  const fetchCharities = async (currentPage, sort='name', city='', sector='', charityName='') => {
    const res = await fetch(
      `${API_URL}?page=${currentPage + 1}&sort=${sort}&city=${city}&sector=${sector}&name=${charityName}`
    );
    console.log(`${API_URL}?page=${currentPage + 1}&sort=${sort}&city=${city}&sector=${sector}&name=${charityName}`)
    const data = await res.json();
    const pages = data.meta.total_pages;
    setPageCount(pages);
    return data.data.data;
  };

  const handlePageClick = async (data) => {
    let currentPage = data.selected;
    const charitiesFormServer = await fetchCharities(currentPage, sortingMethod, city, sector, charityName);
    setCharities(charitiesFormServer);
    setCurrentPage(currentPage);
    scrollTo("charities", "start")
  };

  const handleCharitySorting = async (data) => {
    setCurrentPage(0);
    let currentPage = 0;
    let sortingMethod = data.value;
    setSortingMethod(sortingMethod);
    const charitiesFormServer = await fetchCharities(currentPage, sortingMethod, city, sector, charityName);
    setCharities(charitiesFormServer);
    scrollTo("charities", "start")
  };

  const handleCityFilter = async (data) => {
    setCurrentPage(0);
    let currentPage = 0;
    let city = data.value;
    setCity(city);
    const charitiesFormServer = await fetchCharities(currentPage, sortingMethod, city, sector, charityName);
    setCharities(charitiesFormServer);
    scrollTo("charities", "start")
  };

  const handleSectorFilter = async (data) => {
    setCurrentPage(0);
    let currentPage = 0;
    let sector = data.value;
    setSector(sector);
    const charitiesFormServer = await fetchCharities(currentPage, sortingMethod, city, sector, charityName);
    setCharities(charitiesFormServer);
    scrollTo("charities", "start")
  };

  const handleCharityFilter = async (data) => {
    setCurrentPage(0);
    let currentPage = 0;
    let charityName = data.value;
    setCharityName(charityName);
    const charitiesFormServer = await fetchCharities(currentPage, sortingMethod, city, sector, charityName);
    setCharities(charitiesFormServer);
    scrollTo("charities", "start")
  };

  const resetCharities = async () => {
    setSector();
    setCity();
    setSortingMethod();
    setCharityName();
    const charitiesFormServer = await fetchCharities(0, 'name', '', '', '');
    setCharities(charitiesFormServer);
    setPageCount(41);
    scrollTo("filter-section", "start")
  };

  const getSectors = () => {
    if (charityName) {
      return []
    } else if (!city) {
      return attributes
    } else {
      return attributes.filter((charity) => charity.attributes.city.split(',')[0].trim() === city)
    }
  };

  let sectors = [...new Set(getSectors().map((charity) => charity.attributes.sector.split('-')[0].trim()))].sort();

  const getCities = () => {
    if (charityName) {
      return []
    } else if(!sector) {
      return attributes
    } else {
      return attributes.filter((charity) => charity.attributes.sector.split('-')[0].trim() === sector)
    }
  };

  let cities = [...new Set(getCities().map((charity) => charity.attributes.city.split(',')[0].trim()))].sort();

  const getCharityNames = () => {
    if(city && sector) {
      return attributes.filter((charity) => charity.attributes.sector.split('-')[0].trim() === sector).filter((charity) => charity.attributes.city.split(',')[0].trim() === city)
    } else if(!city && sector) {
      return attributes.filter((charity) => charity.attributes.sector.split('-')[0].trim() === sector)
    } else if(city && !sector) {
      return attributes.filter((charity) => charity.attributes.city.split(',')[0].trim() === city)
    } else {
      return attributes
    }
  };

  let charityNames = [...new Set(getCharityNames().map((charity) => charity.attributes.name))];

  const city_options = []
  cities.map((city) => {
    return (
      city_options.push({ value: city, label: city })
    )
  })

  const sector_options = []
  sectors.map((sector) => {
    return (
      sector_options.push({ value: sector, label: sector })
    )
  })

  const charity_options = []
  charityNames.map((charity) => {
    return (
      charity_options.push({ value: charity, label: charity })
    )
  })

  const setSortingMethods = () => {
    if (charityName) {
      return []
    } else if(!city && !sector) {
      return ['Name', 'City', 'Sector', 'Rating']
    } else if(!city && sector){
      return ['Name', 'City', 'Rating']
    } else if(city && !sector){
      return ['Name', 'Sector', 'Rating']
    } else if(city && sector){
      return ['Name', 'Rating']
    }
  };

  const sorting_options = []
  setSortingMethods().map((method) => {
    return (
      sorting_options.push({ value: method, label: method })
    )
  })

  const [listRef] = useAutoAnimate();

  return (
    <div id="outer-container" className='home-bg'>
      <BurgerNav pageWrapId={'page-wrap'} outerContainerId={'outer-container'}/>
      <div id="page-wrap">
        <div className='nav-ban'>
          <Navbar />
          <Banner />
        </div>
        <HomeInfo />
        <div className='after-info'>
          <div id='filter-section' className='position-relative custom-shape-divider-top-1679023573'>
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill-2"></path>
            </svg>
          </div>
          <h3>Search through 817 Canadian charities</h3>
            <div id='filter-bar'>
            {/* <SearchBar placeholder="Type a charity name..." data={attributes} setCharities={setCharities} setPageCount={setPageCount} /> */}
              <div className='row justify-content-center mt-4 mx-2 nop'>
                <div className='col-2'>
                  <h4 className='text-center order-title'>Search by name</h4>
                  <Select options={charity_options}
                          isSearchable
                          className='dropdown mt-4 mb-2'
                          onChange={handleCharityFilter}
                          menuPortalTarget={document.body}
                          styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                          inputId='charity'
                          placeholder="Enter a charity name"
                          value={{value:charityName, label:charityName}}
                  />
                </div>
              </div>

              <div className='row justify-content-center mt-4 mx-2 nop'>
                <div className='col-2'>
                  <h4 className='text-center order-title'>Filter by city</h4>
                  <Select options={city_options}
                          isSearchable
                          className='dropdown mt-4 mb-2'
                          onChange={handleCityFilter}
                          menuPortalTarget={document.body}
                          styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                          inputId='city'
                          placeholder="Select a city"
                          value={{value:city, label:city}}
                  />
                </div>
              </div>

              <div className='row justify-content-center mt-4 mx-2 nop'>
                <div className='col-2'>
                  <h4 className='text-center order-title'>Filter by sector</h4>
                  <Select options={sector_options}
                          isSearchable
                          className='dropdown mt-4 mb-2'
                          onChange={handleSectorFilter}
                          menuPortalTarget={document.body}
                          styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                          inputId='sector'
                          placeholder="Select a sector"
                          value={{value:sector, label:sector}}
                  />
                </div>
              </div>

              <div className='row justify-content-center mt-4 mx-2 nop'>
                <div className='col-2'>
                  <h4 className='text-center order-title'>Sort by</h4>
                  <Select options={sorting_options}
                          isSearchable
                          className='dropdown mt-4 mb-2'
                          onChange={handleCharitySorting}
                          menuPortalTarget={document.body}
                          styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                          inputId='sorting'
                          placeholder="Select a sorting method"
                          value={{value:sortingMethod, label:sortingMethod}}
                  />
                </div>
              </div>
            </div>

            <div className='row justify-content-center mb-4 mx-2'>
              <div className='col-2'>
              <button onClick={() => {resetCharities()}} type="button" className="btn btn-lg mt-4 mb-2 reset-btn">Reset</button>
              </div>
            </div>
          <div className="container">
            <div ref={listRef} id='charities' className='row d-flex justify-content-evenly mt-4'>
              <ResultsCount city={city} sector={sector} charities={charities} charityName={charityName} attributes={attributes} />
              {charities.map((charity) => {
                return (
                  <div key={charity.id} className='col-12 col-lg-6 v my-3'>
                    <div className='card shadow w-100 h-100 rounded-4'>
                        <div className='card-body p-5 d-flex flex-column'>
                          <div>
                            <a href={`//${charity.attributes.website}`} rel="noreferrer" target="_blank" className='text-decoration-none'>
                              <h5 className='card-title text-center h1'>{charity.attributes.name}</h5>
                            </a>
                            <h5 className='card-subtile text-center h4 mb-4'>{charity.attributes.slogan}</h5>
                          </div>
                          <div>
                            <p>{charity.attributes.city}</p>
                            <p>{charity.attributes.sector} Sector</p>
                            <p>Overall rating: {charity.attributes.rating}</p>
                            <p>Results reporting grade: {charity.attributes.grade}</p>
                            <p>Social impact rating: {charity.attributes.demonstrated_impact}</p>
                            <p>Cents to the cause: {charity.attributes.cents_to_cause_ratio}</p>
                          </div>
                        </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className='pagination'>
            <ReactPaginate
              previousLabel={'Previous'}
              nextLabel={'Next'}
              pageCount={pageCount}
              onPageChange={handlePageClick}
              forcePage = {currentPage}
              containerClassName={'pagination justify-content-center mt-3'}
              pageClassName={'page-item'}
              marginPagesDisplayed={1}
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
            <RxPinTop onClick={() => {scrollTo("charities", "start")}} style={{fontSize: '30px', color: 'grey', marginLeft: '90%'}}/>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export const scrollTo = (section, block) => {
  const element = document.getElementById(section);
  element.scrollIntoView({ block: block, behavior: "smooth"});
};
