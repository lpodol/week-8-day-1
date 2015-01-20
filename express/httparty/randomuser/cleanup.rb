require 'sinatra'
require 'json'
require 'HTTParty'

response = HTTParty.get("http://api.randomuser.me/")

get '/' do
  content_type :json
  data = response["results"][0]["user"]
  string = "Name: " + data["name"]["first"] + " " + data["name"]["last"] + ". Email: " + data["email"] + ". Username: " + data["username"]
  string.to_json
end
