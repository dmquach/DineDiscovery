# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).

puts "Destroying tables..."
# Unnecessary if using `rails db:seed:replant`
User.destroy_all

puts "Resetting primary keys..."
# For easy testing, so that after seeding, the first `User` has `id` of 1
ApplicationRecord.connection.reset_pk_sequence!('users')

puts "Creating users..."
# Create one user with an easy to remember username, email, and password:

mike = User.create!(
    email: 'mike@gmail.com',
    first_name: 'Mike',
    last_name: 'Man',
    zip_code: '95121',
    birthday: Date.new(1990, 10, 15),
    password: 'password',
)

paulo = User.create!(
  email: 'paulo@example.com',
  first_name: 'Paulo',
  last_name: 'LastName',
  zip_code: '12345',
  password: 'password'
)

chris = User.create!(
  email: 'chris@example.com',
  first_name: 'Chris',
  last_name: 'Lastname',
  zip_code: '54321',
  password: 'password'
)

abbey = User.create!(
  email: 'abbey@example.com',
  first_name: 'Abbey',
  last_name: 'Lastname',
  zip_code: '67890',
  birthday: Date.new(1985, 6, 25),
  password: 'password'
)

darren = User.create!(
  email: 'darren@example.com',
  first_name: 'Darren',
  last_name: 'Lastname',
  zip_code: '13579',
  birthday: Date.new(1979, 2, 10),
  password: 'password'
)
diego = User.create!(
  email: 'diego@example.com',
  first_name: 'Diego',
  last_name: 'Lastname',
  zip_code: '24680',
  birthday: Date.new(1993, 7, 12),
  password: 'password'
)

taylor = User.create!(
  email: 'taylor@example.com',
  first_name: 'Taylor',
  last_name: 'Lastname',
  zip_code: '13579',
  birthday: Date.new(1998, 9, 5),
  password: 'password'
)

disnee = User.create!(
  email: 'disnee@example.com',
  first_name: 'Disnee',
  last_name: 'Lastname',
  zip_code: '98765',
  birthday: Date.new(1980, 3, 18),
  password: 'password'
)

puts "Done!"
