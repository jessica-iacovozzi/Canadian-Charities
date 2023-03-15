import React from 'react';
import '../css/ResultsCount.css';

function ResultsCount(props) {
  const city = props.city;
  const sector = props.sector;
  const charityName = props.charityName
  const attributes = props.attributes
  const charities = props.charities;
  let results = ''

  if(charities.length === 1) {
    results = 'charity'
  } else {
    results = 'charities'
  }

  return (
  <div>
            {
                (() => {
                    if(charityName) {
                            return (
                              <h6 className='results'>
                                {charities.length} {results} found
                              </h6>
                            )
                        } else if (city && sector) {
                            return (
                            <h6 className='results'>
                              {(attributes.filter((charity) => charity.attributes.sector.split('-')[0].trim() === sector).filter((charity) => charity.attributes.city.split(',')[0].trim() === city)).length} {results} found
                            </h6>
                            )
                        } else if (city) {
                            return (
                            <h6 className='results'>
                              {attributes.filter((charity) => charity.attributes.city.split(',')[0].trim() === city).length} {results} found
                            </h6>
                            )
                        } else if (sector) {
                            return (
                            <h6 className='results'>
                              {attributes.filter((charity) => charity.attributes.sector.split('-')[0].trim() === sector).length} {results} found
                            </h6>
                            )
                        } else {
                            return (
                            <h6 className='results'>
                              {attributes.length} {results} found
                            </h6>
                            )
                        }
                })()
            }
        </div>
  )

  // return(
  //   <h6>
  //     {city || sector  || charityName ? charities.length : attributes.length} {results} found
  //   </h6>
  // )
}

export default ResultsCount;
