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

#fort worth
t1 = Truck.create(name: "Leo's Churro Bar", image: "https://s3-media0.fl.yelpcdn.com/bphoto/_djD33Tt-SiBz3ejxmaVyg/o.jpg" cuisine: "dessert", city: "Fort Worth", state: "Texas", yelp: "https://www.yelp.com/biz/leo-s-churro-bar-fort-worth?osq=food+truck")
t2 = Truck.create(name: "The Beignet Bus", image: "https://s3-media0.fl.yelpcdn.com/bphoto/vS3gz3_RVjZ1K2usrO1nrg/o.jpg" cuisine: "dessert, donuts, coffee", city: "Fort Worth", state: "Texas", yelp: "https://www.yelp.com/biz/the-beignet-bus-fort-worth-2?osq=food+truck")
t3 = Truck.create(name: "Ober Here", image: "https://s3-media0.fl.yelpcdn.com/bphoto/1T1nu1JW5K4YWVQLrkn-Ew/o.jpg" cuisine: "Filipino", city: "Fort Worth", state: "Texas", yelp: "https://www.yelp.com/biz/leo-s-churro-bar-fort-worth?osq=food+truck")
t4 = Truck.create(name: "Wily Wieners", image: "https://wilywieners.com/wp-content/uploads/sb-instagram-feed-images/298373328_474747844027275_7348088822834417695_n.webpfull.jpg" cuisine: "Hot Dogs", city: "Fort Worth", state: "Texas", yelp: "https://www.yelp.com/biz/wily-wieners-fort-worth-3?osq=food+truck")
t5 = Truck.create(name: "Holy Frijole", image: "https://scontent-dfw5-2.xx.fbcdn.net/v/t39.30808-6/274872019_5338167839526850_5450996678873743038_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=lGskDUpr0coAX-tepfI&_nc_ht=scontent-dfw5-2.xx&oh=00_AfASsdnEiqank35Y3yvjeArFIHXu4DiXnBsj8236rNAJtA&oe=645D9B0A" cuisine: "Tex-Mex, Mexican", city: "Fort Worth", state: "Texas", yelp: "https://www.yelp.com/biz/holy-frijole-fort-worth?osq=food+truck")
t6 = Truck.create(name: "Kelly's Onion Burgers", image: "https://s3-media0.fl.yelpcdn.com/bphoto/WhH3eo05Jb31SvZ7chdUfw/o.jpg" cuisine: "Burgers", city: "Fort Worth", state: "Texas", yelp: "https://www.yelp.com/biz/kelly-s-onion-burgers-fort-worth?osq=food+truck")
t7 = Truck.create(name: "Brix Barbecue", image: "https://s3-media0.fl.yelpcdn.com/bphoto/wzTbpOUV30i7u4nib7J5gw/o.jpg" cuisine: "Barbecue", city: "Fort Worth", state: "Texas", yelp: "https://www.yelp.com/biz/brix-barbecue-fort-worth-2?osq=food+truck")
t8 = Truck.create(name: "Primo's Tacos", image: "https://s3-media0.fl.yelpcdn.com/bphoto/_djD33Tt-SiBz3ejxmaVyg/o.jpg" cuisine: "Tacos, Mexican", city: "Fort Worth", state: "Texas", yelp: "https://www.yelp.com/biz/primos-tacos-fort-worth?osq=food+truck")

#dallas
t9 = Truck.create(name: "Leo's Churro Bar", image: "https://s3-media0.fl.yelpcdn.com/bphoto/_djD33Tt-SiBz3ejxmaVyg/o.jpg" cuisine: "dessert", city: "Fort Worth", state: "Texas", yelp: "https://www.yelp.com/biz/leo-s-churro-bar-fort-worth?osq=food+truck")
t10 = Truck.create(name: "The Beignet Bus", image: "https://s3-media0.fl.yelpcdn.com/bphoto/vS3gz3_RVjZ1K2usrO1nrg/o.jpg" cuisine: "dessert, donuts, coffee", city: "Fort Worth", state: "Texas", yelp: "https://www.yelp.com/biz/the-beignet-bus-fort-worth-2?osq=food+truck")
t11 = Truck.create(name: "Ober Here", image: "https://s3-media0.fl.yelpcdn.com/bphoto/1T1nu1JW5K4YWVQLrkn-Ew/o.jpg" cuisine: "Filipino", city: "Fort Worth", state: "Texas", yelp: "https://www.yelp.com/biz/leo-s-churro-bar-fort-worth?osq=food+truck")
t12 = Truck.create(name: "Wily Wieners", image: "https://wilywieners.com/wp-content/uploads/sb-instagram-feed-images/298373328_474747844027275_7348088822834417695_n.webpfull.jpg" cuisine: "Hot Dogs", city: "Fort Worth", state: "Texas", yelp: "https://www.yelp.com/biz/wily-wieners-fort-worth-3?osq=food+truck")
t13 = Truck.create(name: "Holy Frijole", image: "https://scontent-dfw5-2.xx.fbcdn.net/v/t39.30808-6/274872019_5338167839526850_5450996678873743038_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=lGskDUpr0coAX-tepfI&_nc_ht=scontent-dfw5-2.xx&oh=00_AfASsdnEiqank35Y3yvjeArFIHXu4DiXnBsj8236rNAJtA&oe=645D9B0A" cuisine: "Tex-Mex, Mexican", city: "Fort Worth", state: "Texas", yelp: "https://www.yelp.com/biz/holy-frijole-fort-worth?osq=food+truck")
t14 = Truck.create(name: "Kelly's Onion Burgers", image: "https://s3-media0.fl.yelpcdn.com/bphoto/WhH3eo05Jb31SvZ7chdUfw/o.jpg" cuisine: "Burgers", city: "Fort Worth", state: "Texas", yelp: "https://www.yelp.com/biz/kelly-s-onion-burgers-fort-worth?osq=food+truck")
t15 = Truck.create(name: "Brix Barbecue", image: "https://s3-media0.fl.yelpcdn.com/bphoto/wzTbpOUV30i7u4nib7J5gw/o.jpg" cuisine: "Barbecue", city: "Fort Worth", state: "Texas", yelp: "https://www.yelp.com/biz/brix-barbecue-fort-worth-2?osq=food+truck")
t16 = Truck.create(name: "Primo's Tacos", image: "https://s3-media0.fl.yelpcdn.com/bphoto/_djD33Tt-SiBz3ejxmaVyg/o.jpg" cuisine: "Tacos, Mexican", city: "Fort Worth", state: "Texas", yelp: "https://www.yelp.com/biz/primos-tacos-fort-worth?osq=food+truck")

#austin
t17 = Truck.create(name: "Leo's Churro Bar", image: "https://s3-media0.fl.yelpcdn.com/bphoto/_djD33Tt-SiBz3ejxmaVyg/o.jpg" cuisine: "dessert", city: "Fort Worth", state: "Texas", yelp: "https://www.yelp.com/biz/leo-s-churro-bar-fort-worth?osq=food+truck")
t18 = Truck.create(name: "The Beignet Bus", image: "https://s3-media0.fl.yelpcdn.com/bphoto/vS3gz3_RVjZ1K2usrO1nrg/o.jpg" cuisine: "dessert, donuts, coffee", city: "Fort Worth", state: "Texas", yelp: "https://www.yelp.com/biz/the-beignet-bus-fort-worth-2?osq=food+truck")
t19 = Truck.create(name: "Ober Here", image: "https://s3-media0.fl.yelpcdn.com/bphoto/1T1nu1JW5K4YWVQLrkn-Ew/o.jpg" cuisine: "Filipino", city: "Fort Worth", state: "Texas", yelp: "https://www.yelp.com/biz/leo-s-churro-bar-fort-worth?osq=food+truck")
t20 = Truck.create(name: "Wily Wieners", image: "https://wilywieners.com/wp-content/uploads/sb-instagram-feed-images/298373328_474747844027275_7348088822834417695_n.webpfull.jpg" cuisine: "Hot Dogs", city: "Fort Worth", state: "Texas", yelp: "https://www.yelp.com/biz/wily-wieners-fort-worth-3?osq=food+truck")
t21 = Truck.create(name: "Holy Frijole", image: "https://scontent-dfw5-2.xx.fbcdn.net/v/t39.30808-6/274872019_5338167839526850_5450996678873743038_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=lGskDUpr0coAX-tepfI&_nc_ht=scontent-dfw5-2.xx&oh=00_AfASsdnEiqank35Y3yvjeArFIHXu4DiXnBsj8236rNAJtA&oe=645D9B0A" cuisine: "Tex-Mex, Mexican", city: "Fort Worth", state: "Texas", yelp: "https://www.yelp.com/biz/holy-frijole-fort-worth?osq=food+truck")
t22 = Truck.create(name: "Kelly's Onion Burgers", image: "https://s3-media0.fl.yelpcdn.com/bphoto/WhH3eo05Jb31SvZ7chdUfw/o.jpg" cuisine: "Burgers", city: "Fort Worth", state: "Texas", yelp: "https://www.yelp.com/biz/kelly-s-onion-burgers-fort-worth?osq=food+truck")
t23 = Truck.create(name: "Brix Barbecue", image: "https://s3-media0.fl.yelpcdn.com/bphoto/wzTbpOUV30i7u4nib7J5gw/o.jpg" cuisine: "Barbecue", city: "Fort Worth", state: "Texas", yelp: "https://www.yelp.com/biz/brix-barbecue-fort-worth-2?osq=food+truck")
t24 = Truck.create(name: "Primo's Tacos", image: "https://s3-media0.fl.yelpcdn.com/bphoto/_djD33Tt-SiBz3ejxmaVyg/o.jpg" cuisine: "Tacos, Mexican", city: "Fort Worth", state: "Texas", yelp: "https://www.yelp.com/biz/primos-tacos-fort-worth?osq=food+truck")


puts "Done Seeding"
