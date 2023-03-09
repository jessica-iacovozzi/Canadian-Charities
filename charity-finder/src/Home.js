import './App.css';
import axios from 'axios';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import { MDBTooltip } from 'mdb-react-ui-kit';
import { BsInfoCircle } from 'react-icons/bs';
import { RxPinTop } from 'react-icons/rx';
import { useEffect, useState } from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { Zoom } from "react-awesome-reveal";
import ReactPaginate from 'react-paginate';
import Select from 'react-select'

export const API_URL = 'https://canadian-charities.fly.dev/api/v1/charities'

export function Home() {
  const [charities, setCharities] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [sortingMethod, setSortingMethod] = useState();
  const [attributes, setAttributes] = useState([]);
  const [city, setCity] = useState();
  const [sector, setSector] = useState();

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

  const fetchCharities = async (currentPage, sort='name', city='', sector='') => {
    const res = await fetch(
      `${API_URL}?page=${currentPage + 1}&sort=${sort}&city=${city}&sector=${sector}`
    );
    console.log(`${API_URL}?page=${currentPage + 1}&sort=${sort}&city=${city}&sector=${sector}`)
    const data = await res.json();
    const pages = data.meta.total_pages;
    setPageCount(pages);
    return data.data.data;
  };

  const handlePageClick = async (data) => {
    let currentPage = data.selected;
    const charitiesFormServer = await fetchCharities(currentPage, sortingMethod, city, sector);
    setCharities(charitiesFormServer);
    setCurrentPage(currentPage);
    scrollTo("charities", "start")
  };

  const handleCharitySorting = async (data) => {
    setCurrentPage(0);
    let currentPage = 0;
    let sortingMethod = data.value;
    setSortingMethod(sortingMethod);
    const charitiesFormServer = await fetchCharities(currentPage, sortingMethod, city, sector);
    setCharities(charitiesFormServer);
    scrollTo("charities", "start")
  };

  const handleCityFilter = async (data) => {
    setCurrentPage(0);
    let currentPage = 0;
    let city = data.value;
    setCity(city);
    const charitiesFormServer = await fetchCharities(currentPage, sortingMethod, city, sector);
    setCharities(charitiesFormServer);
    scrollTo("charities", "start")
  };

  const handleSectorFilter = async (data) => {
    setCurrentPage(0);
    let currentPage = 0;
    let sector = data.value;
    setSector(sector);
    const charitiesFormServer = await fetchCharities(currentPage, sortingMethod, city, sector);
    setCharities(charitiesFormServer);
    scrollTo("charities", "start")
  };

  const resetCharities = async () => {
    document.getElementById('sorting').selectedIndex = 0;
    document.getElementById('city').selectedIndex = 0;
    document.getElementById('sector').selectedIndex = 0;
    setSector();
    setCity();
    setSortingMethod('Name');
    const charitiesFormServer = await fetchCharities(0, 'name', '', '');
    setCharities(charitiesFormServer);
    setPageCount(41);
    scrollTo("filter-section", "start")
    Array.from(document.querySelectorAll("Select")).forEach(
      input => (input.value = "")
    );
  };

  const getSectors = () => {
    if(!city) {
      return attributes
    } else {
      return attributes.filter((charity) => charity.attributes.city.split(',')[0].trim() === city)
    }
  };

  let sectors = [...new Set(getSectors().map((charity) => charity.attributes.sector.split('-')[0].trim()))].sort();

  const getCities = () => {
    if(!sector || sector === '') {
      return attributes
    } else {
      return attributes.filter((charity) => charity.attributes.sector.split('-')[0].trim() === sector)
    }
  };

  let cities = [...new Set(getCities().map((charity) => charity.attributes.city.split(',')[0].trim()))].sort();

  const city_options = [{ value: '', label: 'All cities' }]
  cities.map((city) => {
    return (
      city_options.push({ value: city, label: city })
    )
  })

  const sector_options = [{ value: '', label: 'All sectors' }]
  sectors.map((sector) => {
    return (
      sector_options.push({ value: sector, label: sector })
    )
  })

  const setSortingMethods = () => {
    if(!city && !sector) {
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
      sorting_options.push({ value: method.toLowerCase(), label: method })
    )
  })

  const [listRef] = useAutoAnimate();

  return (
    <div>
      <Navbar />
      <Banner />
      <div id='filter-section' className='red-bg p-3 position-relative'>
        <div id='filter-bar'>
      <Zoom cascade triggerOnce duration={800} damping={0.2}>
        <SearchBar placeholder="Type a charity name..." data={attributes} setCharities={setCharities} setPageCount={setPageCount} />
          <div id='city-bar' className='row justify-content-center my-4 mx-2'>
            <div className='col-2'>
              <h4 className='text-center order-title muli'>Filter by city</h4>
              <Select options={city_options}
                      isSearchable={true}
                      className='dropdown mt-4 mb-2 muli'
                      onChange={handleCityFilter}
                      menuPortalTarget={document.body}
                      styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                      inputId='city'
                      value={{value:city,label:city} || city_options[0]}
                      placeholder="Select a city"
              />
            </div>
          </div>

          <div className='row justify-content-center my-4 mx-2'>
            <div className='col-2'>
              <h4 className='text-center order-title muli'>Filter by sector</h4>
              <Select options={sector_options}
                      isSearchable={true}
                      className='dropdown mt-4 mb-2 muli'
                      onChange={handleSectorFilter}
                      menuPortalTarget={document.body}
                      styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                      inputId='sector'
                      value={{value:sector,label:sector}}
                      placeholder="Select a sector"
              />
            </div>
          </div>

          <div className='row justify-content-center my-4 mx-2'>
            <div className='col-2'>
              <h4 className='text-center order-title muli'>Sort by</h4>
              <Select options={sorting_options}
                      isSearchable={true}
                      className='dropdown mt-4 mb-2 muli'
                      onChange={handleCharitySorting}
                      menuPortalTarget={document.body}
                      styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                      inputId='sorting'
                      value={{value:sortingMethod,label:sortingMethod}}
                      placeholder="Select a sorting ..."
              />
            </div>
          </div>
        </Zoom>
        </div>
          <div className='row justify-content-center mb-4 mx-2'>
            <div className='col-2'>
            <button onClick={() => {resetCharities()}} type="button" className="btn btn-lg mt-4 mb-2 muli bg-light reset-btn">Reset</button>
            </div>
          </div>
      </div>
      <div className="container">
        <div ref={listRef} id='charities' className='row d-flex justify-content-evenly mt-4'>
          {charities.map((charity) => {
            return (
              <div key={charity.id} className='col-12 col-lg-6 v my-3'>
                <div className='card shadow w-100 h-100 red-bg rounded-5'>
                  {/* <Fade duration={2000} triggerOnce> */}
                    <div className='card-body p-5 muli d-flex flex-column'>
                      <div>
                        <a href={`//${charity.attributes.website}`} rel="noreferrer" target="_blank" className='text-decoration-none text-info'>
                          <h5 className='card-title text-center h2 font-weight-bold text-white'>{charity.attributes.name}</h5>
                        </a>
                        <h5 className='card-subtile text-center h5 text-white mb-4'>{charity.attributes.slogan}</h5>
                      </div>
                      <div>
                        <p className='card-text'>City: {charity.attributes.city}</p>
                        <p className='card-text'>Sector: {charity.attributes.sector}</p>
                        <div className='d-flex align-items-center'>
                          <MDBTooltip tag='p' placement="bottom" title="Rating is based on the charity's financial transparency, need for funding, grade, impact per dollar and % of $ available for programs after overhead costs.">
                            <BsInfoCircle className='svg' />Rating: {charity.attributes.rating}
                          </MDBTooltip>
                        </div>
                        <div className='d-flex align-items-center'>
                          <MDBTooltip tag='p' placement="bottom" title="Grade is based on the charity's public reporting of the work it does and the results it achieves.">
                            <BsInfoCircle className='svg' />Grade: {charity.attributes.grade}
                          </MDBTooltip>
                        </div>
                        <div className='d-flex align-items-center'>
                          <MDBTooltip tag='p' placement="bottom" title="Impact per dollar is calculated from the charity's available program information.">
                            <BsInfoCircle className='svg' />Impact per dollar: {charity.attributes.demonstrated_impact}
                          </MDBTooltip>
                        </div>
                        <p className='card-text'>{charity.attributes.cents_to_cause_ratio} of every dollar donated is available for programs, after overhead costs of fundraising and administration.</p>
                      </div>
                    </div>
                  {/* </Fade> */}
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
  );
}

export const scrollTo = (section, block) => {
  const element = document.getElementById(section);
  element.scrollIntoView({ block: block, behavior: "smooth"});
};
