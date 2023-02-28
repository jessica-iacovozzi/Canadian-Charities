# require 'open-uri'
# require 'nokogiri'

# Charity.destroy_all
# puts 'Cleared database'

# @charities = []
# numbers = 0.step(800, 20).to_a

# numbers.each do |num|
#   url = "https://www.charityintelligence.ca/charity-profiles/a-z-charity-listing?start=#{num}"
#   html_file = URI.open(url).read
#   html = Nokogiri::HTML.parse(html_file)

#   html.search('.item').each do |element|
#     name = element.search('.title').text.strip
#     link = element.search('.title').attribute('href').value
#     slogan = element.search('.tag').text.strip
#     sector = element.search('.loc:nth-child(2)').text.strip
#     city = element.search('.loc:nth-child(3)').text.strip
#     rating_data = element.search('.rating_stars').attribute('title')
#     rate = rating_data.nil? ? 'NR' : rating_data.value[-3..]
#     rating = rate

#     @charities << {
#       'name': name,
#       'link': link,
#       'slogan': slogan,
#       'sector': sector,
#       'city': city,
#       'rating': rating
#     }
#   end
#   puts "Saved #{@charities.count} charities"
# end

# Charity.create!(@charities)
# puts "Saved #{@charities.count} charities to database."

# @charities = Charity.all

# @charities.each_with_index do |charity, index|
#   url = "https://www.charityintelligence.ca#{charity.link}"
#   html_file = URI.open(url).read
#   html = Nokogiri::HTML.parse(html_file)

#   reg = html.search('#sppb-addon-1548963496069').text.strip[-17..]
#   website = html.search('#sppb-addon-1548963496069 a').attribute('href').value
#   phone = html.search('#sppb-addon-1549917617869').text.strip[-12..]
#   grade = html.search('#snapshotrow .col:nth-child(2)').text.strip[0, 2].strip
#   impact = html.search('#snapshotrow .col:nth-child(3)').text.strip[0, 7].strip
#   cents = html.search('#snapshotrow .col:nth-child(5)').text.strip[0, 4].strip

#   charity['registration_number'] = reg
#   charity['website'] = website
#   charity['phone_number'] = phone
#   charity['grade'] = grade
#   charity['demonstrated_impact'] = impact
#   charity['cents_to_cause_ratio'] = cents

#   charity.save!
#   puts "Charity #{index + 1} updated"
# end

DIACRITICS = [*0x1DC0..0x1DFF, *0x0300..0x036F, *0xFE20..0xFE2F].pack('U*')
def removeaccents(str)
  str
    .unicode_normalize(:nfd)
    .tr(DIACRITICS, '')
    .unicode_normalize(:nfc)
end

Charity.all.each do |c|
  c.city = removeaccents(c.city)
  c.save!
end
