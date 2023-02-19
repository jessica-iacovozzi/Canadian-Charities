class CharitySerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :slogan, :website, :city, :sector, :rating, :grade, :demonstrated_impact, :cents_to_cause_ratio
end
