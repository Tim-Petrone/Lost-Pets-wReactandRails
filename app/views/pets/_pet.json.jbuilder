json.extract! pet, :id, :species, :name, :color, :place, :time, :created_at, :updated_at
json.url pet_url(pet, format: :json)
