# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Follow.destroy_all
Relationship.destroy_all
Review.destroy_all

User.create(name: 'Anna TroHer', email: 'demo@demo.com', password: 'password');
User.create(name: 'Buddy Demogod', email: 'buddy@gmail.com', password: 'hunter12');
User.create(name: 'Tashi Sangpo', email: 'tashi@gmail.com', password: 'password'); 
User.create(name: 'Marco Countryman', email: 'marco@gmail.com', password: 'password'); 
User.create(name: 'Christian Lee', email: 'clee@gmail.com', password: 'password'); 
User.create(name: 'Andrew Vitovich', email: 'avito@gmail.com', password: 'password'); 
User.create(name: 'Jay Gatsby', email: 'gatsby@gmail.com', password: 'password'); 
User.create(name: 'Holden Caulfield', email: 'caulfield@gmail.com', password: 'password'); 
User.create(name: 'Sherlock Holmes', email: 'holmes@demo.com', password: 'password');
User.create(name: 'Atticus Finch', email: 'finch@demo.com', password: 'password');
User.create(name: 'The Invisible Man', email: 'invisible@demo.com', password: 'password');
User.create(name: 'Yossarian', email: 'yoss@demo.com', password: 'password');
User.create(name: 'Scout Finch', email: 'sfinch@demo.com', password: 'password');
User.create(name: 'James Bond', email: 'bond@demo.com', password: 'password');
User.create(name: 'Mary Katherine Blackwood', email: 'blackwood@demo.com', password: 'password');

Follow.create(user_id: 2, follow_id: 1); 

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
Relationship.create(
    relationship_name: 'Caretaker',
    pronounciation: 'care·tak·er', 
    relationship_definition: 'a person employed to look after people or animals.', 
    photo_url: 'https://goodboys.s3.amazonaws.com/caretaker.jpeg'
)
Relationship.create(
    relationship_name: 'Doctor',
    pronounciation: 'doc·tor', 
    relationship_definition: 'a qualified practitioner of medicine; a physician.', 
    photo_url: 'https://goodboys.s3.amazonaws.com/doctor.jpg'
)
Relationship.create(
    relationship_name: 'Housekeeper',
    pronounciation: 'house·keep·er', 
    relationship_definition: 'a person employed to manage a household.', 
    photo_url: 'https://goodboys.s3.amazonaws.com/housekeeper.jpg'
)
Relationship.create(
    relationship_name: 'Butler',
    pronounciation: 'but·ler', 
    relationship_definition: 'the chief manservant of a house.', 
    photo_url: 'https://goodboys.s3.amazonaws.com/butler.jpg'
)
Relationship.create(
    relationship_name: 'Nanny',
    pronounciation: 'nan·ny', 
    relationship_definition: 'a person, typically a woman, employed to care for a child in its own home.', 
    photo_url: 'https://goodboys.s3.amazonaws.com/nanny.jpg'
)
Relationship.create(
    relationship_name: 'Grandmother',
    pronounciation: 'grand·moth·er', 
    relationship_definition: 'the mother of one\'s father or mother.', 
    photo_url: 'https://goodboys.s3.amazonaws.com/grandmother.jpg'
)
Relationship.create(
    relationship_name: 'Grandfather',
    pronounciation: 'grand·fa·ther', 
    relationship_definition: 'the father of one\'s father or mother.', 
    photo_url: 'https://goodboys.s3.amazonaws.com/grandfather.jpg'
)
Relationship.create(
    relationship_name: 'Aunt',
    pronounciation: 'aunt', 
    relationship_definition: 'the sister of one\'s father or mother or the wife of one\'s uncle.', 
    photo_url: 'https://goodboys.s3.amazonaws.com/aunt.jpg'
)
Relationship.create(
    relationship_name: 'Uncle',
    pronounciation: 'un·cle', 
    relationship_definition: 'the brother of one\'s father or mother or the husband of one\'s aunt.', 
    photo_url: 'https://goodboys.s3.amazonaws.com/uncle.jpg'
)
Relationship.create(
    relationship_name: 'Cousin',
    pronounciation: 'cous·in', 
    relationship_definition: 'a child of one\'s uncle or aunt.', 
    photo_url: 'https://goodboys.s3.amazonaws.com/cousin.jpg'
)
Relationship.create(
    relationship_name: 'Step Mother',
    pronounciation: 'step·moth·er', 
    relationship_definition: 'a woman who is the wife or partner of one\'s father after the divorce or separation of one\'s parents or the death of one\'s mother.', 
    photo_url: 'https://goodboys.s3.amazonaws.com/mother.jpg'
)
Relationship.create(
    relationship_name: 'Step Father',
    pronounciation: 'step·fa·ther', 
    relationship_definition: 'a man who is the husband or partner of one\'s mother after the divorce or separation of one\'s parents or the death of one\'s father.', 
    photo_url: 'https://goodboys.s3.amazonaws.com/father.jpg'
)
Relationship.create(
    relationship_name: 'Sibling',
    pronounciation: 'sib·ling', 
    relationship_definition: 'each of two or more children or offspring having one or both parents in common; a brother or sister.', 
    photo_url: 'https://goodboys.s3.amazonaws.com/cousin.jpg'
)
Relationship.create(
    relationship_name: 'Child',
    pronounciation: 'child', 
    relationship_definition: 'a son or daughter of any age.', 
    photo_url: 'https://goodboys.s3.amazonaws.com/child.jpg'
)
Relationship.create(
    relationship_name: 'Daughter',
    pronounciation: 'daugh·ter', 
    relationship_definition: 'a girl or woman in relation to either or both of her parents.', 
    photo_url: 'https://goodboys.s3.amazonaws.com/daughter.jpg'
)
Relationship.create(
    relationship_name: 'Son',
    pronounciation: 'son', 
    relationship_definition: 'a boy or man in relation to either or both of his parents.', 
    photo_url: 'https://goodboys.s3.amazonaws.com/son.jpg'
)
Relationship.create(
    relationship_name: 'Niece',
    pronounciation: 'niece', 
    relationship_definition: 'a daughter of one\'s brother or sister, or of one\'s brother-in-law or sister-in-law.', 
    photo_url: 'https://goodboys.s3.amazonaws.com/neice.jpg'
)
Relationship.create(
    relationship_name: 'Nephew',
    pronounciation: 'neph·ew', 
    relationship_definition: 'a son of one\'s brother or sister, or of one\'s brother-in-law or sister-in-law.', 
    photo_url: 'https://goodboys.s3.amazonaws.com/nephew.jpg'
)
Relationship.create(
    relationship_name: 'Landlord',
    pronounciation: 'land·lord', 
    relationship_definition: 'a person, especially a man, who rents land, a building, or an apartment to a tenant.', 
    photo_url: 'https://goodboys.s3.amazonaws.com/landlord.jpg'
)
Relationship.create(
    relationship_name: 'Tenant',
    pronounciation: 'ten·ant', 
    relationship_definition: 'a person who occupies land or property rented from a landlord.', 
    photo_url: 'https://goodboys.s3.amazonaws.com/tenant.jpg'
)

Review.create(
    user_id: 1, 
    relationship_id: 1, 
    name: 'Harry Potter', 
    rating: 5, 
    body: 'He\'s a wizard'
)
Review.create(
    user_id: 2, 
    relationship_id: 1, 
    name: 'Harry Potty', 
    rating: 5, 
    body: 'He\'s a turlet'
)
Review.create(
    user_id: 3, 
    relationship_id: 2, 
    name: 'Judith Boss', 
    rating: 5, 
    body: 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way—in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only'
)
Review.create(
    user_id: 4, 
    relationship_id: 3, 
    name: 'Darkness', 
    rating: 5, 
    body: 'There were a king with a large jaw and a queen with a plain face, on the throne of England; there were a king with a large jaw and a queen with a fair face, on the throne of France. In both countries it was clearer than crystal to the lords of the State preserves of loaves and fishes, that things in general were settled for ever.'
)
Review.create(
    user_id: 5, 
    relationship_id: 4, 
    name: 'Mrs. Southcott', 
    rating: 5, 
    body: 'It was the year of Our Lord one thousand seven hundred and seventy-five. Spiritual revelations were conceded to England at that favoured period, as at this. Mrs. Southcott had recently attained her five-and-twentieth blessed birthday, of whom a prophetic private in the Life Guards had heralded the sublime appearance by announcing that arrangements were made for the swallowing up of London and Westminster. Even the Cock-lane ghost had been laid only a round dozen of years, after rapping out its messages, as the spirits of this very year last past (supernaturally deficient in originality) rapped out theirs. Mere messages in the earthly order of events had lately come to the English Crown and People, from a congress of British subjects in America: which, strange to relate, have proved more important to the human race than any communications yet received through any of the chickens of the Cock-lane brood.'
)
Review.create(
    user_id: 6, 
    relationship_id: 4, 
    name: 'Woodman', 
    rating: 5, 
    body: 'France, less favoured on the whole as to matters spiritual than her sister of the shield and trident, rolled with exceeding smoothness down hill, making paper money and spending it. Under the guidance of her Christian pastors, she entertained herself, besides, with such humane achievements as sentencing a youth to have his hands cut off, his tongue torn out with pincers, and his body burned alive, because he had not kneeled down in the rain to do honour to a dirty procession of monks which passed within his view, at a distance of some fifty or sixty yards. It is likely enough that, rooted in the woods of France and Norway, there were growing trees, when that sufferer was put to death, already marked by the Woodman, Fate, to come down and be sawn into boards, to make a certain movable framework with a sack and a knife in it, terrible in history. It is likely enough that in the rough outhouses of some tillers of the heavy lands adjacent to Paris, there were sheltered from the weather that very day, rude carts, bespattered with rustic mire, snuffed about by pigs, and roosted in by poultry, which the Farmer, Death, had already set apart to be his tumbrils of the Revolution. But that Woodman and that Farmer, though they work unceasingly, work silently, and no one heard them as they went about with muffled tread: the rather, forasmuch as to entertain any suspicion that they were awake, was to be atheistical and traitorous.'
)
Review.create(
    user_id: 7, 
    relationship_id: 5, 
    name: ' Turnham Green', 
    rating: 5, 
    body: 'In England, there was scarcely an amount of order and protection to justify much national boasting. Daring burglaries by armed men, and highway robberies, took place in the capital itself every night; families were publicly cautioned not to go out of town without removing their furniture to upholsterers warehouses for security; the highwayman in the dark was a City tradesman in the light, and, being recognised and challenged by his fellow-tradesman whom he stopped in his character of “the Captain,” gallantly shot him through the head and rode away; the mail was waylaid by seven robbers, and the guard shot three dead, and then got shot dead himself by the other four, “in consequence of the failure of his ammunition:” after which the mail was robbed in peace; that magnificent potentate, the Lord Mayor of London, was made to stand and deliver on Turnham Green, by one highwayman, who despoiled the illustrious creature in sight of all his retinue; prisoners in London gaols fought battles with their turnkeys, and the majesty of the law fired blunderbusses in among them, loaded with rounds of shot and ball; thieves snipped off diamond crosses from the necks of noble lords at Court drawing-rooms; musketeers went into St. Giles, to search for contraband goods, and the mob fired on the musketeers, and the musketeers fired on the mob, and nobody thought any of these occurrences much out of the common way.'
)
Review.create(
    user_id: 8, 
    relationship_id: 6, 
    name: 'Turnham Green', 
    rating: 5, 
    body: 'All these things, and a thousand like them, came to pass in and close upon the dear old year one thousand seven hundred and seventy-five. Environed by them, while the Woodman and the Farmer worked unheeded, those two of the large jaws, and those other two of the plain and the fair faces, trod with stir enough, and carried their divine rights with a high hand. Thus did the year one thousand seven hundred and seventy-five conduct their Greatnesses, and myriads of small creatures—the creatures of this chronicle among the rest—along the roads that lay before them.'
)
Review.create(
    user_id: 9, 
    relationship_id: 7, 
    name: 'Westminster', 
    rating: 5, 
    body: 'With drooping heads and tremulous tails, they mashed their way through the thick mud, floundering and stumbling between whiles, as if they were falling to pieces at the larger joints. As often as the driver rested them and brought them to a stand, with a wary “Wo-ho! so-ho-then!” the near leader violently shook his head and everything upon it—like an unusually emphatic horse, denying that the coach could be got up the hill. Whenever the leader made this rattle, the passenger started, as a nervous passenger might, and was disturbed in mind.'
)
Review.create(
    user_id: 10, 
    relationship_id: 8, 
    name: 'Dover', 
    rating: 5, 
    body: 'There was a steaming mist in all the hollows, and it had roamed in its forlornness up the hill, like an evil spirit, seeking rest and finding none. A clammy and intensely cold mist, it made its slow way through the air in ripples that visibly followed and overspread one another, as the waves of an unwholesome sea might do. It was dense enough to shut out everything from the light of the coach-lamps but these its own workings, and a few yards of road; and the reek of the labouring horses steamed into it, as if they had made it all.'
)
Review.create(
    user_id: 11, 
    relationship_id: 9, 
    name: 'Captain', 
    rating: 5, 
    body: 'Two other passengers, besides the one, were plodding up the hill by the side of the mail. All three were wrapped to the cheekbones and over the ears, and wore jack-boots. Not one of the three could have said, from anything he saw, what either of the other two was like; and each was hidden under almost as many wrappers from the eyes of the mind, as from the eyes of the body, of his two companions. In those days, travellers were very shy of being confidential on a short notice, for anybody on the road might be a robber or in league with robbers. As to the latter, when every posting-house and ale-house could produce somebody in the Captais pay, ranging from the landlord to the lowest stable non-descript, it was the likeliest thing upon the cards. So the guard of the Dover mail thought to himself, that Friday night in November, one thousand seven hundred and seventy-five, lumbering up Shootes Hill, as he stood on his own particular perch behind the mail, beating his feet, and keeping an eye and a hand on the arm-chest before him, where a loaded blunderbuss lay at the top of six or eight loaded horse-pistols, deposited on a substratum of cutlass.'
)
