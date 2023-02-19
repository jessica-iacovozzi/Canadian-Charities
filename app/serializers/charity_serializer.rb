class CharitySerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :city, :sector, :rating, :slogan, :grade, :demonstrated_impact, :website, :cents_to_cause_ratio
end
