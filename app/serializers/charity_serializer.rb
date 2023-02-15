class CharitySerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :city, :sector
end
