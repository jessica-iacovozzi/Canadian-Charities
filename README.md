This is a dockerized Rails 7 API (hosted on fly.io) of Canadian charities data(1) scraped from charityintelligence.ca.

(1) Charity columns include name, slogan, city, sector, website, rating, grade, demonstrated_impact and cents_to_cause_ratio.
  - Rating is based on financial transparency, need for funding, grade, demonstrated impact and cents to cause ratio.
  - Grade is based on the charity's public reporting of the work it does and the results it achieves.
  - Demonstrated impact is the impact per dollar calculated from available program information.
  - Cents to cause ratio is the percentage of every dollar donated available for programs, after overhead costs of fundraising and admin/management (excluding surplus).
  
  <img width="1434" alt="charity_api" src="https://user-images.githubusercontent.com/104274353/221249525-e1c2406d-98c6-455e-9231-68d43b8c4cc9.png">

The results are paginated and can be filtered and/or sorted by every attribute.

<img width="1433" alt="charity_api_fs" src="https://user-images.githubusercontent.com/104274353/221249505-dd7013a6-755b-4ce9-bc41-598ac31557e5.png">
