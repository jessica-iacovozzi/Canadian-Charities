# 1. Overview

<p>This is a JSON-based dockerized Rails API.</p>

<p>It lists Canadian charities data(1) scraped from charityintelligence.ca</p>

(1) Charity field include name, slogan, city, sector, website, rating, grade, demonstrated_impact and cents_to_cause_ratio.
  - Rating is based on financial transparency, need for funding, grade, demonstrated impact and cents to cause ratio.
  - Grade is based on the charity's public reporting of the work it does and the results it achieves.
  - Demonstrated impact is the impact per dollar calculated from available program information.
  - Cents to cause ratio is the percentage of every dollar donated available for programs, after overhead costs of fundraising and admin/management (excluding surplus).
  
<p>All requests are made to endpoints beginning by: https://canadian-charities.fly.dev/api/v1/charities</p>

# 2. Resources

<p>The API is RESTful and arranged around resources.</p>

The response is a list of charity objects. An empty array is returned if there are no charities corresponding to the given field attribute. The response array is wrapped in a data envelope.

Where a Charity object is:

| Field | Type | Description |
| ----- | ---- | ----------- |
| id | string | A unique identifier for the charity |
| type | string | Object type |
| attributes | object | Attributes of the charity |
| name | string | Name of the charity |
| slogan | string | Slogan of the charity |
| website | string | The URL to the charity's website |
| city | string | City the charity is based in |
| sector | string | Sector(industrty) of the charity |
| rating | string | Rating of the charity |
| grade | string | Grade of the charity |
| demonstrated_impact | string | Demonstrated impact score of the charity |
| cents_to_cause_ratio | string | Percentage of every dollar donated available for the charity's programs |

Possible errors:

| Error code | Description |
| ---------- | ----------- |
| 400 | Bad request |

### 2.1. Filtering charities

#### Listing charities in a specific city

<p>Returns a list of charities based in the given city.</p>
<p>A request to fetch a list of charities in a given city looks like this:</p>

```
GET https://canadian-charities.fly.dev/api/v1/charities?city={{city}}
```

Example request:

```
GET https://canadian-charities.fly.dev/api/v1/charities?city=new westminster
```

#### Listing charities from a specific sector

<p>Returns a list of charities of the given sector(industry).</p>
<p>A request to fetch a list of charities of a given sector looks like this:</p>

```
GET https://canadian-charities.fly.dev/api/v1/charities?sector={{sector}}
```

Example request:

```
GET https://canadian-charities.fly.dev/api/v1/charities?sector=international aid
```

| Sector options |
| ---------- |
| animal welfare |
| arts & culture |
| education |
| environment |
| fundraising organization |
| health |
| human rights advocacy |
| international aid |
| public benefit |
| religion |
| research & public policy |
| social services |
| sports & recreation |
| veterans |

#### Listing charities with a specific rating

<p>Returns a list of charities with the given rating.</p>
<p>A request to fetch a list of charities with a given rating looks like this:</p>

```
GET https://canadian-charities.fly.dev/api/v1/charities?rating={{rating}}
```

Example request:

```
GET https://canadian-charities.fly.dev/api/v1/charities?rating=5/5
```

Rating options:

> From 5/5 to 0/5

#### Listing charities with a specific grade

<p>Returns a list of charities with the given grade.</p>
<p>A request to fetch a list of charities with a given grade looks like this:</p>

```
GET https://canadian-charities.fly.dev/api/v1/charities?grade={{grade}}
```

Example request:

```
GET https://canadian-charities.fly.dev/api/v1/charities?grade=A%2B
```

Grade options:

> From F to A+
> Note: The + sign needs to be replaced by `%2B` in the URL

#### Listing charities with a specific demonstrated impact score

<p>Returns a list of charities with the given demonstrated impact score.</p>
<p>A request to fetch a list of charities with a given demonstrated impact score looks like this:</p>

```
GET https://canadian-charities.fly.dev/api/v1/charities?demonstrated_impact={{score}}
```

Example request:

```
GET https://canadian-charities.fly.dev/api/v1/charities?demonstrated_impact=high
```

| Score options |
| ---------- |
| high |
| good |
| average |
| fair |
| low |
| n/r |

#### Listing charities with a specific cents to cause ratio

<p>Returns a list of charities with the given cents to cause ratio.</p>
<p>A request to fetch a list of charities with a given cents to cause ratio looks like this:</p>

```
GET https://canadian-charities.fly.dev/api/v1/charities?cents_to_cause_ratio={{ratio}}
```

Example request:

```
GET https://canadian-charities.fly.dev/api/v1/charities?cents_to_cause_ratio=100
```

Ratio options:

> From 100 to -22

### 2.2. Sorting charities

#### Listing charities sorted by a specific atttribute

<p>Returns a list of charities sorted by a given atttribute.</p>
<p>A request to fetch a list of charities sorted by a given atttribute looks like this:</p>

```
GET https://canadian-charities.fly.dev/api/v1/charities?sort={{option}}
```

Example request:

```
GET https://canadian-charities.fly.dev/api/v1/charities?sort=demonstrated_impact
```

| Sorting options | order |
| --------------- | ----- |
| name | Ascending alphabetical |
| -name | Descending alphabetical |
| city | Ascending alphabetical |
| -city | Descending alphabetical |
| sector | Ascending alphabetical | 
| rating | Descending (5/5 to 0/5) |
| -rating | Ascending (0/5 to 5/5) |
| grade | Descending (A+ to F) |
| -grade | Ascending (F to A+) |
| demonstrated_impact | Descending (High to Low) |
| -demonstrated_impact | Ascending (Low to High) |
| cents_to_cause_ratio | Descending (100 to -22) |
| -cents_to_cause_ratio | Ascending (-22 to 100) |

### 2.3. Filtering + sorting charities

#### Listing filtered and sorted charities by specific attributes

<p>Returns a list of charities filtered by a given field and then sorted by a given option.</p>
<p>A request to fetch a list of filtered and sorted charities looks like this:</p>

```
GET https://canadian-charities.fly.dev/api/v1/charities?{{field}}={{attribute}}&sort={{option}}
```

Example request:

```
GET https://canadian-charities.fly.dev/api/v1/charities?city=montreal&sort=rating
```

# 3. Pagination

There is a limit of `20` objects per `page`.
To get results from the next page, you must specify the page number.

Example request:

```
GET https://canadian-charities.fly.dev/api/v1/charities?city=montreal&sort=rating&page=2
```
