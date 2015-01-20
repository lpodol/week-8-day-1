require 'sinatra'
require 'json'
require 'HTTParty'

response = HTTParty.get("http://api.randomuser.me/")

get '/' do
content_type :json
var data = response["results"][0]["user"]["name"]["first"]) + " " + (data["results"][0]["user"]["name"]["last"]))
data.to_json
end
