# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


#User.create(
#{name: 'Nick', hometown: 'Aurora', email:'nick.lisauskas@gmail.com', password: '1022Madison', password_confirmation: '1022Madison', admin: true}
#)

Course.create(
[{name: 'Naples Grande - Yellow', city: 'Naples', state: 'FL', slope: 113, rating: 71},
  {name: 'Pebble Beach', city: 'San Francisco', state: 'CA', slope: 113, rating: 71},
  {name: 'TPC Sawgrass', city: 'Jacksonville', state: 'FL', slope: 113, rating: 71},
]
)
Round.create(
[{score: 74, putts: 30, user_id: 1 , course_id: 1},
  {score: 74, putts: 30, user_id: 2 , course_id: 2},
  {score: 74, putts: 30, user_id: 3 , course_id: 3},
  {score: 74, putts: 30, user_id: 4 , course_id: 1},
  {score: 74, putts: 30, user_id: 5 , course_id: 2}
]
)
