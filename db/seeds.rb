require 'open-uri'
require 'nokogiri'

Charity.destroy_all
puts 'Cleared database'

@charities = []
numbers = 0.step(800, 20).to_a

numbers.each do |num|
  url = "https://www.charityintelligence.ca/charity-profiles/a-z-charity-listing?start=#{num}"
  html_file = URI.open(url).read
  html = Nokogiri::HTML.parse(html_file)

  html.search('.item').each do |element|
    name = element.search('.title').text.strip
    link = element.search('.title').attribute('href').value
    slogan = element.search('.tag').text.strip
    sector = element.search('.loc:nth-child(2)').text.strip
    city = element.search('.loc:nth-child(3)').text.strip
    rating_data = element.search('.rating_stars').attribute('title')
    rate = rating_data.nil? ? 'NR' : rating_data.value[-3..]
    rating = rate

    @charities << {
      'name': name,
      'link': link,
      'slogan': slogan,
      'sector': sector,
      'city': city,
      'rating': rating
    }
  end
  puts "Saved #{@charities.count} charities"
end

Charity.create!(@charities)
puts "Saved #{@charities.count} charities to database."
