# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).

# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
require "open-uri"

# ApplicationRecord.transaction do
puts "Destroying tables..."
# Unnecessary if using `rails db:seed:replant`
# Review.destroy_all
Business.destroy_all
User.destroy_all

puts "Resetting primary keys..."
# For easy testing, so that after seeding, the first `User` has `id` of 1
ApplicationRecord.connection.reset_pk_sequence!("users")
ApplicationRecord.connection.reset_pk_sequence!("businesses")
ApplicationRecord.connection.reset_pk_sequence!("reviews")

puts "Creating users..."
# Create one user with an easy to remember username, email, and password:
demo = User.create!(
  email: "demo@demo.com",
  password: "123456",
  first_name: "Demo",
  last_name: "User",
  zip_code: "12345",
  birthday: "1995-05-15",
)
demo.avatar.attach(io: URI.open("https://dine-discovery-seeds.s3.us-west-1.amazonaws.com/avatar.png"), filename: "avatar.png")

mike = User.create!(
    email: 'mike123@gmail.com',
    first_name: 'Mike',
    last_name: 'Man',
    zip_code: '95121',
    password: 'password',
)
mike.avatar.attach(io: URI.open("https://dine-discovery-seeds.s3.us-west-1.amazonaws.com/man.png"), filename: "man.png")

paulo = User.create!(
  email: 'paulo123@example.com',
  first_name: 'Paulo',
  last_name: 'LastName',
  zip_code: '12345',
  password: 'password'
)
paulo.avatar.attach(io: URI.open("https://dine-discovery-seeds.s3.us-west-1.amazonaws.com/man2.png"), filename: "man2.png")

chris = User.create!(
  email: 'chris123@example.com',
  first_name: 'Chris',
  last_name: 'Lastname',
  zip_code: '54321',
  password: 'password'
)

abbey = User.create!(
  email: 'abbey123@example.com',
  first_name: 'Abbey',
  last_name: 'Lastname',
  zip_code: '67890',
  password: 'password'
)
abbey.avatar.attach(io: URI.open("https://dine-discovery-seeds.s3.us-west-1.amazonaws.com/images-1.png"), filename: "images-1.png")

darren = User.create!(
  email: 'darren123@example.com',
  first_name: 'Darren',
  last_name: 'Lastname',
  zip_code: '13579',
  password: 'password'
)
diego = User.create!(
  email: 'diego123@example.com',
  first_name: 'Diego',
  last_name: 'Lastname',
  zip_code: '24680',
  password: 'password'
)

taylor = User.create!(
  email: 'taylor123@example.com',
  first_name: 'Taylor',
  last_name: 'Lastname',
  zip_code: '13579',
  password: 'password'
)
taylor.avatar.attach(io: URI.open("https://dine-discovery-seeds.s3.us-west-1.amazonaws.com/woman.jpg"), filename: "woman.jpg")

disnee = User.create!(
  email: 'disnee123@example.com',
  first_name: 'Disnee',
  last_name: 'Lastname',
  zip_code: '98765',
  password: 'password'
)
disnee.avatar.attach(io: URI.open("https://dine-discovery-seeds.s3.us-west-1.amazonaws.com/woman2.png"), filename: "woman2.png")

puts "Creating businesses..."

pizzaPizza = Business.create!(
  user_id: 1,
  name: "Pizza Pizza",
  city: "SF",
  state: "CA",
  zip_code: "95121",
  phone_number: "1234567890",
  price_range: 10,
  category: "Pizza",
  lat: 0,
  lng: 0,
)
pizzaPizza.photo.attach(io: URI.open("https://dine-discovery-seeds.s3.us-west-1.amazonaws.com/p1.jpg"), filename: "p1.jpg")


pizzaHut = Business.create!(
  user_id: 2,
  name: "Pizza Hut",
  city: "SF",
  state: "CA",
  zip_code: "95121",
  phone_number: "1234567890",
  price_range: 10,
  category: "Pizza",
  lat: 0,
  lng: 0,
)
pizzaHut.photo.attach(io: URI.open("https://dine-discovery-seeds.s3.us-west-1.amazonaws.com/Pizza-Hut.webp"), filename: "pizzahut.jpg")

unionSquarePizza = Business.create!(
  user_id: 3,
  name: "Tres Pizza",
  city: "SF",
  state: "CA",
  zip_code: "95121",
  phone_number: "1234567890",
  price_range: 10,
  category: "Pizza",
  lat: 0,
  lng: 0,
)
unionSquarePizza.photo.attach(io: URI.open("https://dine-discovery-seeds.s3.us-west-1.amazonaws.com/download.jpg"), filename: "pizzau.jpg")

helloP = Business.create!(
  user_id: 4,
  name: "Hello Pizza",
  city: "SF",
  state: "CA",
  zip_code: "95121",
  phone_number: "1234567890",
  price_range: 10,
  category: "Pizza",
  lat: 0,
  lng: 0,
)
helloP.photo.attach(io: URI.open("https://dine-discovery-seeds.s3.us-west-1.amazonaws.com/p2.jpg"), filename: "p2.jpg")

freshPizza = Business.create!(
  user_id: 5,
  name: "Fresh Pizza",
  city: "SF",
  state: "CA",
  zip_code: "95121",
  phone_number: "1234567890",
  price_range: 10,
  category: "Pizza",
  lat: 0,
  lng: 0,
)
freshPizza.photo.attach(io: URI.open("https://dine-discovery-seeds.s3.us-west-1.amazonaws.com/pizza.jpg"), filename: "p4.jpg")

modPizza = Business.create!(
  user_id: 6,
  name: "Mod pizza",
  city: "SF",
  state: "CA",
  zip_code: "95121",
  phone_number: "1234567890",
  price_range: 10,
  category: "Pizza",
  lat: 0,
  lng: 0,
)
modPizza.photo.attach(io: URI.open("https://dine-discovery-seeds.s3.us-west-1.amazonaws.com/MOD_Pizza_logo.svg.png"), filename: "p5.jpg")

italianPizza = Business.create!(
  user_id: 2,
  name: "Italian Pizza",
  city: "SF",
  state: "CA",
  zip_code: "95121",
  phone_number: "1234567890",
  price_range: 10,
  category: "Pizza",
  lat: 0,
  lng: 0,
)
italianPizza.photo.attach(io: URI.open("https://dine-discovery-seeds.s3.us-west-1.amazonaws.com/p2.jpg"), filename: "p2.jpg")

dylanPizza = Business.create!(
  user_id: 3,
  name: "Dylan's Pizza",
  city: "SF",
  state: "CA",
  zip_code: "95121",
  phone_number: "1234567890",
  price_range: 25,
  category: "Pizza",
  lat: 0,
  lng: 0,
)
dylanPizza.photo.attach(io: URI.open("https://dine-discovery-seeds.s3.us-west-1.amazonaws.com/download-1.jpg"), filename: "p6.jpg")

myPizza = Business.create!(
  user_id: 4,
  name: "My Pizza",
  city: "SF",
  state: "CA",
  zip_code: "95121",
  phone_number: "1234567890",
  price_range: 20,
  category: "Pizza",
  lat: 0,
  lng: 0,
)
myPizza.photo.attach(io: URI.open("https://dine-discovery-seeds.s3.us-west-1.amazonaws.com/Filaga-Gallery-2500px-1.jpg"), filename: "p8.jpg")

thinkCoffee = Business.create!(
  user_id: 6,
  name: "Thinking about Coffee",
  city: "SF",
  state: "CA",
  zip_code: "95121",
  phone_number: "1234567890",
  price_range: 20,
  category: "Drinks",
  lat: 0,
  lng: 0,
)
thinkCoffee.photo.attach(io: URI.open("https://dine-discovery-seeds.s3.us-west-1.amazonaws.com/drink4.jpg"), filename: "drink4.jpg")

starbucks = Business.create!(
  user_id: 7,
  name: "Star Buck Me",
  city: "SF",
  state: "CA",
  zip_code: "95121",
  phone_number: "1234567890",
  price_range: 20,
  category: "Drink",
  lat: 0,
  lng: 0,
)
starbucks.photo.attach(io: URI.open("https://dine-discovery-seeds.s3.us-west-1.amazonaws.com/drink6.jpg"), filename: "drink6.jpg")

blankStreetCoffee = Business.create!(
  user_id: 8,
  name: "Street Coffee",
  city: "SF",
  state: "CA",
  zip_code: "95121",
  phone_number: "1234567890",
  price_range: 20,
  category: "Coffee",
  lat: 0,
  lng: 0,
)
blankStreetCoffee.photo.attach(io: URI.open("https://dine-discovery-seeds.s3.us-west-1.amazonaws.com/drink5.jpg"), filename: "drink5.jpg")

boba = Business.create!(
  user_id: 1,
  name: "Boba Lovers",
  city: "SF",
  state: "CA",
  zip_code: "95121",
  phone_number: "1234567890",
  price_range: 20,
  category: "Drinks",
  lat: 0,
  lng: 0,
)
boba.photo.attach(io: URI.open("https://dine-discovery-seeds.s3.us-west-1.amazonaws.com/drink1.jpg"), filename: "drink1.jpeg")

coffeeee = Business.create!(
  user_id: 4,
  name: "Coffeeee",
  city: "SF",
  state: "CA",
  zip_code: "95121",
  phone_number: "1234567890",
  price_range: 20,
  category: "Drinks",
  lat: 0,
  lng: 0,
)
coffeeee.photo.attach(io: URI.open("https://dine-discovery-seeds.s3.us-west-1.amazonaws.com/drink7.webp"), filename: "drink7.webp")

bobaHouse = Business.create!(
  user_id: 4,
  name: "Boba House",
  city: "SF",
  state: "CA",
  zip_code: "95121",
  phone_number: "1234567890",
  price_range: 20,
  category: "Drinks",
  lat: 0,
  lng: 0,
)
bobaHouse.photo.attach(io: URI.open("https://dine-discovery-seeds.s3.us-west-1.amazonaws.com/drink2.webp"), filename: "drink2.jpeg")

yumCoffee = Business.create!(
  user_id: 5,
  name: "Yum Latte",
  city: "SF",
  state: "CA",
  zip_code: "95121",
  phone_number: "1234567890",
  price_range: 100,
  category: "Drinks",
  lat: 0,
  lng: 0,
)
yumCoffee.photo.attach(io: URI.open("https://dine-discovery-seeds.s3.us-west-1.amazonaws.com/drink3.jpg"), filename: "drink3.jpeg")

yummyburger = Business.create!(
  user_id: 8,
  name: "Yum Burgs",
  city: "SF",
  state: "CA",
  zip_code: "95121",
  phone_number: "1234567890",
  price_range: 20,
  category: "Burger",
  lat: 0,
  lng: 0,
)
yummyburger.photo.attach(io: URI.open("https://dine-discovery-seeds.s3.us-west-1.amazonaws.com/burger5.jpg"), filename: "burger5.jpg")

burgerBurger = Business.create!(
  user_id: 5,
  name: "Burger Burger",
  city: "SF",
  state: "CA",
  zip_code: "95121",
  phone_number: "1234567890",
  price_range: 20,
  category: "Burger",
  lat: 0,
  lng: 0,
)
burgerBurger.photo.attach(io: URI.open("https://dine-discovery-seeds.s3.us-west-1.amazonaws.com/burger1.jpg"), filename: "burger1.jpg")

bunsHouse = Business.create!(
  user_id: 7,
  name: "BunsHouse",
  city: "SF",
  state: "CA",
  zip_code: "95121",
  phone_number: "1234567890",
  price_range: 20,
  category: "Burger",
  lat: 0,
  lng: 0,
)
bunsHouse.photo.attach(io: URI.open("https://dine-discovery-seeds.s3.us-west-1.amazonaws.com/burger2.jpg"), filename: "burger2.jpg")

burgerKing = Business.create!(
  user_id: 8,
  name: "BurgerKings",
  city: "SF",
  state: "CA",
  zip_code: "95121",
  phone_number: "1234567890",
  price_range: 20,
  category: "Burger",
  lat: 0,
  lng: 0,
)
burgerKing.photo.attach(io: URI.open("https://dine-discovery-seeds.s3.us-west-1.amazonaws.com/burger3.jpg"), filename: "burger3.jpg")

mcdonalds = Business.create!(
  user_id: 8,
  name: "McBurger",
  city: "SF",
  state: "CA",
  zip_code: "95121",
  phone_number: "1234567890",
  price_range: 5,
  category: "Burger",
  lat: 0,
  lng: 0,
)
mcdonalds.photo.attach(io: URI.open("https://dine-discovery-seeds.s3.us-west-1.amazonaws.com/mcdonalds.png"), filename: "mcdonalds.png")

wendys = Business.create!(
  user_id: 8,
  name: "Wendy's",
  city: "SF",
  state: "CA",
  zip_code: "95121",
  phone_number: "1234567890",
  price_range: 20,
  category: "Burger",
  lat: 0,
  lng: 0,
)
wendys.photo.attach(io: URI.open("https://dine-discovery-seeds.s3.us-west-1.amazonaws.com/wendys.webp"), filename: "wendys.webp")

burgerplace = Business.create!(
  user_id: 8,
  name: "Burger Palace",
  city: "SF",
  state: "CA",
  zip_code: "95121",
  phone_number: "1234567890",
  price_range: 20,
  category: "Burger",
  lat: 0,
  lng: 0,
)
burgerplace.photo.attach(io: URI.open("https://dine-discovery-seeds.s3.us-west-1.amazonaws.com/burger4.webp"), filename: "burger4.webp")

iceCold = Business.create!(
  user_id: 6,
  name: "Ice Cream",
  city: "SF",
  state: "CA",
  zip_code: "95121",
  phone_number: "1234567890",
  price_range: 20,
  category: "Dessert",
  lat: 0,
  lng: 0,
)
iceCold.photo.attach(io: URI.open("https://dine-discovery-seeds.s3.us-west-1.amazonaws.com/icecream.jpg"), filename: "icecream.jpg")

puts "Creating reviews"

r1 = Review.create!(
  rating: 5,
  business_id: 1,
  user_id: 2,
  body: "Very cheesy, I love it!",
  images: [
    { io: URI.open("https://dine-discovery-seeds.s3.us-west-1.amazonaws.com/freshly-italian-pizza-with-mozzarella-cheese-slice-generative-ai_188544-12347.avif"), filename: "pp.jpg" }
  ],
)
Business.find(r1.business_id).update_average_rating

r2 = Review.create!(
  rating: 2,
  business_id: 10,
  user_id: 3,
  body: "Too sweet for my liking",
  images: [
  ],
)
Business.find(r2.business_id).update_average_rating

r3 = Review.create!(
  rating: 4,
  business_id: 17,
  user_id: 4,
  body: "Amazing burgers and fries #tasty",
  images: [
    { io: URI.open("https://dine-discovery-seeds.s3.us-west-1.amazonaws.com/burg.jpg"), filename: "burg.jpg" }
  ],
)
Business.find(r3.business_id).update_average_rating

r4 = Review.create!(
  rating: 5,
  business_id: 10,
  user_id: 5,
  body: "Very refresing!",
  images: [
    { io: URI.open("https://dine-discovery-seeds.s3.us-west-1.amazonaws.com/coff.jpg"), filename: "coff.jpg" }
  ],
)
Business.find(r4.business_id).update_average_rating

r5 = Review.create!(
  rating: 2,
  business_id: 2,
  user_id: 6,
  body: "About what youd expect, not great service",
  images: [
  ],
)
Business.find(r5.business_id).update_average_rating

r6 = Review.create!(
  rating: 5,
  business_id: 13,
  user_id: 7,
  body: "Tasty!!",
  images: [
  ],
)
Business.find(r6.business_id).update_average_rating

r7 = Review.create!(
  rating: 5,
  business_id: 18,
  user_id: 8,
  body: "A great variety of foods!",
  images: [
    { io: URI.open("https://dine-discovery-seeds.s3.us-west-1.amazonaws.com/burg2.jpg"), filename: "burg2.jpg" }
  ]
)
Business.find(r7.business_id).update_average_rating

r8 = Review.create!(
  rating: 1,
  business_id: 3,
  user_id: 9,
  body: "Why are they cooking from a cart???",
  images: [
    { io: URI.open("https://dine-discovery-seeds.s3.us-west-1.amazonaws.com/badp.jpg"), filename: "badp.jpg" }

  ],
)
Business.find(r8.business_id).update_average_rating

