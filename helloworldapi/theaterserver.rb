require 'sinatra'
require 'json'

get '/top_theaters' do
  content_type :json
  data = {results: [{"Jurassic Park"=> 9}, {"Superman"=> 2}, {"Inception"=> 8}]}
  #use hash rockets! JSON loves hash rockets (with strings)!
  data.to_json
end
