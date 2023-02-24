This is a dockerized Rails 7 API (hosted on fly.io) of Canadian charities data(1) scraped from charityintelligence.ca.

(1) Charity columns include name, slogan, city, sector, website, rating, grade, demonstrated_impact and cents_to_cause_ratio.
  - Rating is based on financial transparency, need for funding, grade, demonstrated impact and cents to cause ratio.
  - Grade is based on the charity's public reporting of the work it does and the results it achieves.
  - Demonstrated impact is the impact per dollar calculated from available program information.
  - Cents to cause ratio is the percentage of every dollar donated available for programs, after overhead costs of fundraising and admin/management (excluding surplus).
  
<img width="1436" alt="charity-api" src="https://user-images.githubusercontent.com/104274353/220225169-1876cdb9-9873-45b8-95fb-066684fc0934.png">
  
The results are paginated and can be filtered and/or sorted by every attribute.

<img width="1428" alt="charity-api-fs" src="https://user-images.githubusercontent.com/104274353/220225185-f4c90ee3-c756-4cbd-9760-f3047af214be.png">
