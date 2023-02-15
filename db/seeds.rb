require 'open-uri'
require 'nokogiri'

Charity.destroy_all
puts 'Cleared database'

names = []
links = []
cities = []
ratings = []
sectors = []
@charities = []

sectors_array = ['Animal Welfare', 'Arts & Culture', 'Education', 'Environment', 'Health', 'Social Services', 'International Aid', 'Religion']

sectors_array.each do |sector|
  url = "https://www.charityintelligence.ca/?option=com_charities&view=sectorsearch&s=#{sector}"
  html_file = URI.open(url).read
  html_doc = Nokogiri::HTML.parse(html_file)

  html_doc.search('.title').each do |element|
    names << element.text.strip
    links << element.attribute('href').value
  end

  html_doc.search('.loc:nth-child(3)').each do |element|
    cities << element.text.strip
  end

  html_doc.search('.rating_stars').each do |element|
    ratings << element.attribute('title').value[-3]
  end

  sectors << sector

  @charities_data = names.zip(links, cities, ratings, sectors)
end

@charities_data.each do |charity|
  @charities << {
    'name': charity[0],
    'link': charity[1],
    'city': charity[2],
    'rating': charity[3].to_i,
    'sector': charity[4]
  }
end

Charity.create!(@charities)
puts "Saved #{@charities.count} charities to database."
