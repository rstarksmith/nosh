# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all 

james = User.create(username: "James", password: "1234", password_confirmation: "1234", tagline: "Good food. Good mood.")
james.avatar.attach(
    io: File.open('./public/avatars/avatar1.png'),
    filename: 'avatar1.png',
    content_type: 'application/png'
)
jacobmunch = User.create(username: "jacobmunch", password: "1234", password_confirmation: "1234", tagline: "Get in my belly")
jacobmunch.avatar.attach(
    io: File.open('./public/avatars/avatar2.png'),
    filename: 'avatar2.png',
    content_type: 'application/png'
)
burgerman = User.create(username: "burgerman", password: "1234", password_confirmation: "1234", tagline: "Meet you at the truck")
burgerman.avatar.attach(
    io: File.open('./public/avatars/avatar3.png'),
    filename: 'avatar3.png',
    content_type: 'application/png'
)
foodie = User.create(username: "foodie", password: "1234", password_confirmation: "1234", tagline: "Wake up. Eat. Repeat.")
foodie.avatar.attach(
    io: File.open('./public/avatars/avatar4.png'),
    filename: 'avatar4.png',
    content_type: 'application/png'
)
jess = User.create(username: "jess", password: "1234", password_confirmation: "1234", tagline: "Foodie | Photographer")
jess.avatar.attach(
    io: File.open('./public/avatars/avatar5.png'),
    filename: 'avatar5.png',
    content_type: 'application/png'
)
raya = User.create(username: "raya", password: "1234", password_confirmation: "1234", tagline: "Everyday is taco tuesday")
raya.avatar.attach(
    io: File.open('./public/avatars/avatar6.png'),
    filename: 'avatar6.png',
    content_type: 'application/png'
)

# a = Visit.create(rating: 2, caption: "yum", private: false,
# a.avatar.attach(
#     io: File.open('./public/avatars/visit1.png'),
#     filename: 'visit1.png',
#     content_type: 'application/png'
# )

# Truck.create(name: "taco monster", cuisine: "tacos", city: "Austin", state: "Texas", yel
# p: "thisisalink.com")


puts "Done Seeding"
