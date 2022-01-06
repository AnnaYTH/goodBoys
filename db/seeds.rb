# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(name: 'Anna', email: 'demo@demo.com', password: 'password');
User.create(name: 'Buddy', email: 'buddy@gmail.com', password: 'hunter12')


# definitions and pronounciations from Oxford Languages
Relationship.create(
    relationship_name: 'Mother',
    pronounciation: '/ˈməT͟Hər/', 
    relationship_definition: 'a woman in relation to her child or children.'
)
Relationship.create(
    relationship_name: 'Father',
    pronounciation: '/ˈfäT͟Hər/', 
    relationship_definition: 'a man in relation to his child or children.'
)