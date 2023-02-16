require 'open-uri'
require 'nokogiri'

Charity.destroy_all
puts 'Cleared database'

names = []
links = []
slogans = []
sectors = []
cities = []
ratings = []
@charities = []
numbers = 0.step(800, 20).to_a

numbers.each do |num|
  url = "https://www.charityintelligence.ca/charity-profiles/a-z-charity-listing?start=#{num}"
  html_file = URI.open(url).read
  html = Nokogiri::HTML.parse(html_file)

  # names << html.search('.title').text.strip
  # links << html.search('.title').attribute('href').value
  # slogans << html.search('.tag').text.strip
  # sectors << html.search('.loc:nth-child(2)').text.strip
  # cities << html.search('.loc:nth-child(3)').text.strip
  # ratings << html.search('.rating_stars').attribute('title').value[-3].to_i

  html.search('.title').each do |element|
    names << element.text.strip
    links << element.attribute('href').value
  end

  html.search('.tag').each do |element|
    slogans << element.text.strip
  end

  html.search('.loc:nth-child(2)').each do |element|
    sectors << element.text.strip
  end

  html.search('.loc:nth-child(3)').each do |element|
    cities << element.text.strip
  end

  html.search('.rating_stars').each do |element|
    ratings << element.attribute('title').value[-3].to_i
  end

  @charities_data = names.zip(links, slogans, sectors, cities, ratings)
end

@charities_data.each do |charity|
  @charities << {
    'name': charity[0],
    'link': charity[1],
    'slogan': charity[2],
    'sector': charity[3],
    'city': charity[4],
    'rating': charity[5]
  }
end

Charity.create!(@charities)
puts "Saved #{@charities.count} charities to database."

# require 'kimurai'

# class JobScraper < Kimurai::Base
#   @name = 'charity_scraper'
#   @start_urls = ['https://www.charityintelligence.ca/charity-profiles/a-z-charity-listing?start=0']
#   @engine = :selenium_chrome

#   @charities = []

#   def scrape_page
#     doc = browser.current_response
#     returned_charities = doc.css('ul.list')
#     returned_charities.css('li.item').each do |element|
#       name = element.css('div.hdr > a.title').text.strip
#       city = element.css('div.bdy > p.loc:nth-child(3)').text.strip
#       sector = element.css('div.bdy > p.loc:nth-child(2)').text.strip
#       rating = element.css('div.hdr > span.rating_cntnr > span.rating_stars').attribute('title').value[-3].to_i

#       charity = {
#         name: name,
#         city: city,
#         sector: sector,
#         rating: rating
#       }

#       @charities << charity unless @charities.include?(charity)
#     end
#   end

#   def parse
#     10.times do
#       scrape_page

#       browser.find('/html/body/div[0]/div[0]/section[4]/div/div/div/main/div/div[1]/div/div/div/div[1]/div/form/div/ul/li[-1]').click
#       puts "CURRENT NUMBER OF CHARITIES: #{@charities.count}"
#     end

#     @charities
#   end
# end

# charities = JobScraper.crawl!
# Charity.create!(charities)
# puts "Saved #{charities.count} charities to database."
