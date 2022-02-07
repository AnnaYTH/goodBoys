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
    pronounciation: 'moth·er', 
    relationship_definition: 'a woman in relation to her child or children.', 
    photo_url: 'https://goodboys.s3.amazonaws.com/mother.jpg'
)
Relationship.create(
    relationship_name: 'Father',
    pronounciation: 'fa·ther', 
    relationship_definition: 'a man in relation to his child or children.', 
    photo_url: 'https://goodboys.s3.amazonaws.com/father.jpg'
)
Relationship.create(
    relationship_name: 'Sister',
    pronounciation: 'sis·ter', 
    relationship_definition: 'a woman or girl in relation to other daughters and sons of her parents.', 
    photo_url: 'https://goodboys.s3.amazonaws.com/sister.jpg'
)
Relationship.create(
    relationship_name: 'Brother',
    pronounciation: 'broth·er', 
    relationship_definition: 'a man or boy in relation to other sons and daughters of his parents.' ,
    photo_url: 'https://goodboys.s3.amazonaws.com/brother.jpg'
)
Relationship.create(
    relationship_name: 'Partner',
    pronounciation: 'part·ner', 
    relationship_definition: 'either member of a married couple or of an established unmarried couple.', 
    photo_url: 'https://goodboys.s3.amazonaws.com/partner.jpg'
)
Relationship.create(
    relationship_name: 'Significant Other',
    pronounciation: 'sig·nif·i·cant oth·er', 
    relationship_definition: 'a person with whom someone has an established romantic or sexual relationship.', 
    photo_url: 'https://goodboys.s3.amazonaws.com/SigOth.jpg'
)
Relationship.create(
    relationship_name: 'Colleague',
    pronounciation: 'col·league', 
    relationship_definition: 'a person with whom one works in a profession or business.', 
    photo_url: 'https://goodboys.s3.amazonaws.com/colleague.jpg'
)
Relationship.create(
    relationship_name: 'Coworker',
    pronounciation: 'co-work·er', 
    relationship_definition: 'a person with whom one works, typically someone in a similar role or at a similar level within an organization.', 
    photo_url: 'https://goodboys.s3.amazonaws.com/coworker.jpg'
)
Relationship.create(
    relationship_name: 'Manager',
    pronounciation: 'man·ag·er', 
    relationship_definition: 'a person responsible for controlling or administering all or part of a company or similar organization.', 
    photo_url: 'https://goodboys.s3.amazonaws.com/manager.jpg'
)
Relationship.create(
    relationship_name: 'Mentor',
    pronounciation: 'men·tor', 
    relationship_definition: 'an experienced and trusted adviser.', 
    photo_url: 'https://goodboys.s3.amazonaws.com/mentor.jpg'
)
Relationship.create(
    relationship_name: 'Assistant',
    pronounciation: 'as·sis·tant', 
    relationship_definition: 'a person who ranks below a senior person.', 
    photo_url: 'https://goodboys.s3.amazonaws.com/assistant.jpg'
)
Relationship.create(
    relationship_name: 'Friend',
    pronounciation: 'friend', 
    relationship_definition: 'a person whom one knows and with whom one has a bond of mutual affection, typically exclusive of sexual or family relations.', 
    photo_url: 'https://goodboys.s3.amazonaws.com/friend.jfif'
)
Relationship.create(
    relationship_name: 'Teacher',
    pronounciation: 'teach·er', 
    relationship_definition: 'a person who teaches, especially in a school.', 
    photo_url: 'https://goodboys.s3.amazonaws.com/teacher.jfif'
)
Relationship.create(
    relationship_name: 'Student',
    pronounciation: 'stu·dent', 
    relationship_definition: 'a person who is studying at a school or college.', 
    photo_url: 'https://goodboys.s3.amazonaws.com/student.jpg'
)
Relationship.create(
    relationship_name: 'Neighbor',
    pronounciation: 'neigh·bor', 
    relationship_definition: 'a person living near or next door to the speaker or person referred to.', 
    photo_url: 'https://goodboys.s3.amazonaws.com/neighbor.jpg'
)
Relationship.create(
    relationship_name: 'Enemy',
    pronounciation: 'en·e·my', 
    relationship_definition: 'a person who is actively opposed or hostile to someone or something.', 
    photo_url: 'https://goodboys.s3.amazonaws.com/enemy.jpg'
)
Relationship.create(
    relationship_name: 'Rival',
    pronounciation: 'ri·val', 
    relationship_definition: 'a person or thing competing with another for the same objective or for superiority in the same field of activity.', 
    photo_url: 'https://goodboys.s3.amazonaws.com/rival.jpg'
)
##Relationship.create(
##    relationship_name: 'Caretaker',
##    pronounciation: 'care·tak·er', 
##    relationship_definition: 'a person employed to look after people or animals.'
##)
##Relationship.create(
##    relationship_name: 'Doctor',
##    pronounciation: 'doc·tor', 
##    relationship_definition: 'a qualified practitioner of medicine; a physician.'
##)
##Relationship.create(
##    relationship_name: 'Housekeeper',
##    pronounciation: 'house·keep·er', 
##    relationship_definition: 'a person employed to manage a household.'
##)
##Relationship.create(
##    relationship_name: 'Butler',
##    pronounciation: 'but·ler', 
##    relationship_definition: 'the chief manservant of a house.'
##)
##Relationship.create(
##    relationship_name: 'Nanny',
##    pronounciation: 'nan·ny', 
##    relationship_definition: 'a person, typically a woman, employed to care for a child in its own home.'
##)
##Relationship.create(
##    relationship_name: 'Grandmother',
##    pronounciation: 'grand·moth·er', 
##    relationship_definition: 'the mother of one\'s father or mother.'
##)
##Relationship.create(
##    relationship_name: 'Grandfather',
##    pronounciation: 'grand·fa·ther', 
##    relationship_definition: 'the father of one\'s father or mother.'
##)
##Relationship.create(
##    relationship_name: 'Grandfather',
##    pronounciation: 'grand·fa·ther', 
##    relationship_definition: 'the father of one\'s father or mother.'
##)
##Relationship.create(
##    relationship_name: 'Aunt',
##    pronounciation: 'aunt', 
##    relationship_definition: 'the sister of one\'s father or mother or the wife of one\'s uncle.'
##)
##Relationship.create(
##    relationship_name: 'Uncle',
##    pronounciation: 'un·cle', 
##    relationship_definition: 'the brother of one\'s father or mother or the husband of one\'s aunt.'
##)
##Relationship.create(
##    relationship_name: 'Cousin',
##    pronounciation: 'cous·in', 
##    relationship_definition: 'a child of one\'s uncle or aunt.'
##)
##Relationship.create(
##    relationship_name: 'Step Mother',
##    pronounciation: 'step·moth·er', 
##    relationship_definition: 'a woman who is the wife or partner of one\'s father after the divorce or separation of one\'s parents or the death of one\'s mother.'
##)
##Relationship.create(
##    relationship_name: 'Step Father',
##    pronounciation: 'step·fa·ther', 
##    relationship_definition: 'a man who is the husband or partner of one\'s mother after the divorce or separation of one\'s parents or the death of one\'s father.'
##)
##Relationship.create(
##    relationship_name: 'Sibling',
##    pronounciation: 'sib·ling', 
##    relationship_definition: 'each of two or more children or offspring having one or both parents in common; a brother or sister.'
##)
##Relationship.create(
##    relationship_name: 'Child',
##    pronounciation: 'child', 
##    relationship_definition: 'a son or daughter of any age.'
##)
##Relationship.create(
##    relationship_name: 'Daughter',
##    pronounciation: 'daugh·ter', 
##    relationship_definition: 'a girl or woman in relation to either or both of her parents.'
##)
##Relationship.create(
##    relationship_name: 'Son',
##    pronounciation: 'son', 
##    relationship_definition: 'a boy or man in relation to either or both of his parents.'
##)
##Relationship.create(
##    relationship_name: 'Niece',
##    pronounciation: 'niece', 
##    relationship_definition: 'a daughter of one\'s brother or sister, or of one\'s brother-in-law or sister-in-law.'
##)
##Relationship.create(
##    relationship_name: 'Nephew',
##    pronounciation: 'neph·ew', 
##    relationship_definition: 'a son of one\'s brother or sister, or of one\'s brother-in-law or sister-in-law.'
##)
##Relationship.create(
##    relationship_name: 'Landlord',
##    pronounciation: 'land·lord', 
##    relationship_definition: 'a person, especially a man, who rents land, a building, or an apartment to a tenant.'
##)
##Relationship.create(
##    relationship_name: 'Tenant',
##    pronounciation: 'ten·ant', 
##    relationship_definition: 'a person who occupies land or property rented from a landlord.'
##)
##
Review.create(
    user_id: 1, 
    relationship_id: 1, 
    name: 'Harry Potter', 
    rating: 5, 
    review: 'He\'s a wizard'
)

Review.create(
    user_id: 2, 
    relationship_id: 1, 
    name: 'Harry Potty', 
    rating: 5, 
    review: 'He\'s a turlet'
)
