require 'sinatra'
require 'json'
require 'HTTParty'

var response = HTTParty.get("http://api.randomuser.me/")

get '/' do
  content_type :json
  var data =
  data.to_json
end
