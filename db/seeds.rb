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
Review.create(
    user_id: 12, 
    relationship_id: 10, 
    name: 'Charles Dickens', 
    rating: 5, 
    body: 'Charles John Huffham Dickens, the master story-teller, was born in Landport, England, February 7, 1812. His father was a clerk in one of the offices of the Navy, and he was one of eight children.'
)
Review.create(
    user_id: 13, 
    relationship_id: 11, 
    name: 'Hallie Erminie Rives', 
    rating: 5, 
    body: 'When he was four years old, his father moved to the town of Chatham, near the old city of Rochester. Round about are chalk hills, green lanes, forests and marshes, and amid such scenes the little Charles\'s genius first began to show itself.'
)
Review.create(
    user_id: 14, 
    relationship_id: 12, 
    name: 'Reginald B. Birch', 
    rating: 5, 
    body: 'He did not like the rougher sports of his school-fellows and preferred to amuse himself in his own way, or to wander about with his older sister, Fanny, whom he especially loved. They loved to watch the stars together, and there was one particular star which they used to pretend was their own. People called him a "very queer small boy" because he was always thinking or reading instead of playing. The children of the neighborhood would gather around him to listen while he told them stories or sang comic songs to them, and when he was only eight years old he taught them to act in plays which he invented. He was fond of[Pg 2] reading books of travel, and most of all he loved The Arabian Nights and Robinson Crusoe.'
)
Review.create(
    user_id: 15, 
    relationship_id: 13, 
    name: 'Juliet Sutherland', 
    rating: 5, 
    body: 'He had a great affection for Chatham and Rochester, and after he began to write stories that were printed, he often used to put these places into them. It was at Chatham that poor little David in the story, David Copperfield, lay down to sleep when he was running away from London to find his aunt, Miss Betsy Trotwood. It was to Rochester that Mr. Pickwick in Pickwick Papers, rode with Jingle. Rochester was really the "Cloisterham" where the wicked choir master, John Jasper, killed his nephew, in The Mystery of Edwin Drood. And it was in those very marshes near by, that Magwitch, the escaped convict in Great Expectations, so frightened little Pip. It is easy to see that the young Charles Dickens noted carefully and remembered everything he saw, and this habit was of great use to him all his life.'
)
Review.create(
    user_id: 1, 
    relationship_id: 14, 
    name: 'Asad Razzaki', 
    rating: 5, 
    body: 'These happy years were not to last long. When he was nine years old, his father became poor and the family was obliged to move to London, where it lived in a shabby house in a poor suburb. Before another year had passed, his father was put into prison for debt—the same prison in which Little Dorrit, in the story of that name, grew up. A very bitter period followed for the solitary ten-year-old boy'
)
Review.create(
    user_id: 2, 
    relationship_id: 15, 
    name: 'Bobbs-Merrill', 
    rating: 5, 
    body: 'All of this wretched experience he has written in David Copperfield, and the sad scenes of the debtors\' prison he has put into Pickwick Papers and into Little Dorrit. Even Mrs. Pipchin, of whom he told in Dombey and Son, and Mr. Micawber in David Copperfield, were real people whom he knew in these years of poverty and despair.'
)
Review.create(
    user_id: 3, 
    relationship_id: 16, 
    name: 'GEORGE BAKER ROBBINS, Jr.', 
    rating: 5, 
    body: 'Better days, however, came at last. He was able to begin school again, and though the head-master was ignorant and brutal (just such a one as Mr. Creakle in David Copperfield) yet Dickens profited by such teaching as he received.'
)
Review.create(
    user_id: 4, 
    relationship_id: 17, 
    name: 'David Copperfield', 
    rating: 5, 
    body: 'He was left to the city streets, or to earn a hard and scanty living in a dirty warehouse, by pasting labels on pots of blacking. All of this wretched experience he has written in David Copperfield, and the sad scenes of the debtors\' prison he has put into Pickwick Papers and into Little Dorrit. Even Mrs. Pipchin, of whom he told in Dombey and Son, and Mr. Micawber in David Copperfield, were real people whom he knew in these years of poverty and despair. Dickens\'s life at this time was so miserable that always afterward he dreaded to speak of it, and never could bear even to walk in the street where the blacking warehouse of his boyhood had stood.'
)
Review.create(
    user_id: 5, 
    relationship_id: 18, 
    name: 'Mrs. Pipchin', 
    rating: 5, 
    body: 'Better days, however, came at last. He was able to begin school again, and though the head-master was ignorant and brutal (just such a one as Mr. Creakle in David Copperfield) yet Dickens profited by such teaching as he received.'
)
Review.create(
    user_id: 6, 
    relationship_id: 19, 
    name: 'Dombey', 
    rating: 5, 
    body: 'After two or three years of school, he found employment as clerk in a lawyer\'s office. This did not content him and he made up his mind to learn to write shorthand so as to become a reporter, in the Houses of Parliament, for a newspaper. This was by no means an easy task. But Dickens had great strength of will and a determination to do well[Pg 4] whatever he did at all, and he succeeded, just as David Copperfield did in the story.'
)
Review.create(
    user_id: 7, 
    relationship_id: 20, 
    name: 'Mr. Micawber', 
    rating: 5, 
    body: 'And like the latter, too, about this time Dickens fell in love. He did not marry on this occasion, as did David, but how much he was in love one may see by the story of David\'s Dora.'
)
Review.create(
    user_id: 8, 
    relationship_id: 21, 
    name: 'Little Dorrit', 
    rating: 5, 
    body: 'The theater had always a great attraction for Dickens. Throughout his life he loved to act in plays got up and often written, too, by himself and his friends. Some of his early experiences of this kind he has told in the adventures of Nicholas Nickleby at Mr. Crummles\'s theater. But his acting was for his own amusement, and it is doubtful if he ever thought seriously of adopting the stage as a profession. If he did, his success as a reporter soon determined him otherwise.'
)
Review.create(
    user_id: 9, 
    relationship_id: 22, 
    name: 'John Jasper', 
    rating: 5, 
    body: 'When he was twenty-one he saw his first printed sketch in a monthly magazine. He had dropped it into a letter-box with mingled hope and fear, and read it now through tears of joy and pride. He followed this with others as successful, signed "Boz"—the child nickname of one of his younger brothers. This was his beginning. He was soon on the road to a comfortable fortune, and when at length Pickwick Papers appeared, Dickens\'s fame was assured. This was his first long story. It became, almost at once, the most popular book of its day, perhaps, indeed, the most popular book ever published in England. Soon after the appearance of its first chapters, Dickens married Miss[Pg 5] Catherine Hogarth, daughter of the editor of one of the London newspapers, who had helped him in his career.'
)
Review.create(
    user_id: 10, 
    relationship_id: 23, 
    name: 'Betsy Trotwood', 
    rating: 5, 
    body: 'Many have tried to explain the marvelous popularity of Pickwick Papers. Certainly its honest fun, its merriment, its quaintness, good humor and charity appealed to every reader. More than all, it made people acquainted with a new company of characters, none of whom had ever existed, or could ever exist, and yet whose manners and appearance were pictured so really that they seemed to be actual persons whom one might meet and laugh with anywhere.'
)
Review.create(
    user_id: 11, 
    relationship_id: 24, 
    name: 'Rochester', 
    rating: 5, 
    body: 'With such a success, and the money it brought him, Dickens had leisure to begin the wonderful series of stories which endeared him to the whole English-speaking world, and made him the most famous author of his day. Oliver Twist came first, and it was followed by Nicholas Nickleby and The Old Curiosity Shop.'
)
Review.create(
    user_id: 12, 
    relationship_id: 25, 
    name: 'Chatham', 
    rating: 5, 
    body: 'In the first two of these stories one may see most clearly the principle that underlay almost all of Dickens\'s work. He was never content merely to tell an interesting story. He wrote with a purpose. In Oliver Twist that purpose was, first, to better the poorhouse system, and second, to show that even in the lowest and wickedest paths of life (the life wherein lived Fagin with his pupils in crime and Bill Sikes the brutal burglar) there could yet be found, as in the case of poor Nancy,[Pg 6] real kindness and sacrifice. In Nicholas Nickleby the purpose was to show what terrible wrongs were done to children in country schools, numbers of which at that time were managed by men almost as cruel and inhuman as was Squeers in the story. It is good to learn that, as a result of this novel, an end was made of many such boys\' schools.'
)
Review.create(
    user_id: 13, 
    relationship_id: 26, 
    name: 'Cloisterham', 
    rating: 5, 
    body: 'True artist as he was, Dickens seldom wrote without having in his mind the thought of showing some defect in the law, or some wrong condition of affairs which might be righted. No one could read Pickwick Papers or Little Dorrit without realizing how much wrong and misery was caused by the law which made it possible to throw a man into prison for debt. Nor can one read Bleak House without seeing that the legal system which robbed quaint Miss Flite of her mind and kept poor Richard Carstone from his fortune till the fortune itself had disappeared, was a very wrong legal system indeed. Often, too, Dickens\'s stories are, in a sense, sermons against very human sins. In The Old Curiosity Shop it is the sin of gambling which brings about the death of Little Nell. In Great Expectations it is the sin of pride which Pip has to fight. In Martin Chuzzlewit the evil and folly of selfishness is what Dickens had in mind.'
)
Review.create(
    user_id: 14, 
    relationship_id: 27, 
    name: 'Robinson Crusoe', 
    rating: 5, 
    body: 'With his increasing wealth, Dickens had, of course, changed his manner of life. He lived part of the time in the country near London, in Brighton,[Pg 7] in Dover, and in France and Italy. He liked best, however, a little English watering place called Broadstairs—a tiny fishing village, built on a cliff, with the sea rolling and dashing beneath it. In such a place he felt that he could write best, but he greatly missed his London friends. He used to say that being without them was "like losing his arms and legs."'
)
Review.create(
    user_id: 15, 
    relationship_id: 28, 
    name: 'Dora', 
    rating: 5, 
    body: 'The first great grief of his life came to him at this time, in the death of his wife\'s sister, Mary Hogarth, a gentle, lovable girl of seventeen. No sorrow ever touched him as this did.'
)
Review.create(
    user_id: 1, 
    relationship_id: 29, 
    name: 'Nancy', 
    rating: 5, 
    body: 'In a narrow side street in London there once stood a shabby building called The Old Curiosity Shop, because all sorts of curious things were kept for sale there—such as rusty swords, china figures, quaint carvings and old-fashioned furniture.'
)
Review.create(
    user_id: 2, 
    relationship_id: 30, 
    name: 'Oliver Twist', 
    rating: 5, 
    body: 'A little old man named Trent owned the shop, and he looked as old as anything in it. He was thin and bent, with long gray hair and bright blue eyes, and his face was wrinkled and full of care. He had an orphan grandchild who lived with him—a pretty little golden-haired girl whom every one called Little Nell, who kept the shop clean and neat and cooked the meals just as a grown woman would have done. She slept in a back room in a bed so small it might almost have been a fairy\'s. She lived a very lonely life, but she kept a cheerful face and did not complain.'
)
Review.create(
    user_id: 3, 
    relationship_id: 31, 
    name: 'Bill Sikes', 
    rating: 5, 
    body: 'She had only one protector besides her grandfather, and that was a big, awkward boy named Christopher Nubbles, called Kit for short. He had a very large mouth and a turned-up nose, and[Pg 20] when he spoke he had a habit of standing sidewise and twisting his head back over his shoulder. Everything he did seemed funny, and little Nell laughed at him all the while, though she loved him almost as much as she did her grandfather. He ran errands for them, and in the long winter evenings she used to teach him to read and write.'
)
Review.create(
    user_id: 4, 
    relationship_id: 32, 
    name: 'Mary Hogarth', 
    rating: 5, 
    body: 'Kit liked to be taught and even liked to be laughed at, and always ended by laughing himself, with his mouth wide open and his eyes shut. He was the best-natured lad in the world, and would have given his life to make little Nell happy.'
)
Review.create(
    user_id: 5, 
    relationship_id: 33, 
    name: 'Martin Chuzzlewit', 
    rating: 5, 
    body: 'She was not as happy as she seemed to her grandfather\'s eyes. There was some mystery about the old man that she could not understand. Almost every night he left her to go to bed all alone in the shop, and went away and did not come back till sunrise, when the door-bell woke her and she let him in.'
)
Review.create(
    user_id: 6, 
    relationship_id: 34, 
    name: 'Queen Victoria', 
    rating: 5, 
    body: 'And, too, he always talked of the great fortune she was to have sometime—if only some mysterious plan he was working on turned out right—the carriages and fine frocks and jewels. But the plan seemed always to go wrong, and the poor old man grew sadder and sadder as he grew more feeble.'
)
Review.create(
    user_id: 7, 
    relationship_id: 35, 
    name: 'David Copperfield', 
    rating: 5, 
    body: 'Often at night little Nell sat at the upper window, watching for him, crying, and fearing that he might die or lose his mind; she never knew that Kit used to stand in the shadow of an archway opposite and watch to see that no harm came to her, till she vanished and he knew she had gone to bed.'
)
Review.create(
    user_id: 8, 
    relationship_id: 36, 
    name: 'Edwin Drood', 
    rating: 5, 
    body: 'What troubled little Nell most of all was a strange visitor her grandfather used to have. This was a hideous man named Quilp, with the body of a dwarf and the head of a giant. His black eyes were sharp and cunning, his face was always covered with a stubby beard and he had a cruel smile that made him look like a panting dog. He had grizzled, tangled hair, crooked finger nails, and wore a dirty handkerchief tied around his neck, instead of a collar. He used to bring money to her grandfather, and little Nell more than once saw him look at her and at the contents of the shop in a gloating way that made her shiver.'
)
Review.create(
    user_id: 9, 
    relationship_id: 37, 
    name: 'Prince of Wales', 
    rating: 5, 
    body: 'Indeed, everybody who ever met Quilp was afraid of him, and most afraid of all was his wife. He had a habit of drinking scalding tea and of eating boiled eggs, shell and all, that quite terrified her. Besides, he treated the poor woman cruelly. Sometimes, for instance, when she displeased him, he made her sit bolt upright in a chair all night, without moving or going to bed, while he sat smoking and making faces at her.'
)
Review.create(
    user_id: 10, 
    relationship_id: 1, 
    name: 'King of the Belgians', 
    rating: 5, 
    body: 'Little Nell often had to carry messages from her grandfather to the dwarf, and came to know that he had somehow fallen into Quilp\'s power.'
)
Review.create(
    user_id: 11, 
    relationship_id: 2, 
    name: 'Mr. Trent', 
    rating: 5, 
    body: 'The fact was that the old man had been borrowing money from the dwarf for a long time, and had spent it on the great plan, which he had[Pg 22] thought sure to succeed, and he now owed the other much more than all the shop and everything in it was worth.'
)
Review.create(
    user_id: 12, 
    relationship_id: 3, 
    name: 'Christopher Nubbles', 
    rating: 5, 
    body: 'Quilp had loaned the money because he thought when the wonderful plan succeeded he would make the grandfather give him back very much more than he had loaned him. But when the old man continually wanted to borrow more money and yet paid none back, the dwarf grew suspicious and tried hard to find out what the great plan was. To do this he used to question little Nell and try to persuade her to tell how her grandfather passed the time.'
)
Review.create(
    user_id: 13, 
    relationship_id: 4, 
    name: 'Quilp', 
    rating: 5, 
    body: 'She would never tell him anything, but one day, when she had brought a message to his house, the dwarf hid in a closet and listened while the child told his wife how her grandfather, every night after Quilp had brought him money, went out and did not come home till daybreak, and always sadly then. You see, little Nell was in such trouble that she had to tell somebody about it and ask advice, and the dwarf\'s wife had always been very kind to her.'
)
Review.create(
    user_id: 14, 
    relationship_id: 5, 
    name: 'Mrs. Quilp', 
    rating: 5, 
    body: 'When Quilp heard the story he guessed the secret—that her grandfather, hoping to win more for little Nell, had gambled away all the money. He was full of rage and sent word that he would loan no more.'
)
Review.create(
    user_id: 15, 
    relationship_id: 6, 
    name: 'Mrs. Jarley', 
    rating: 5, 
    body: 'The old man was in great grief at this. His mind had not been strong for a long time, or this[Pg 23] foolish and wrong plan would never have misled him, and now, at the thought that he would have no more chance to win the fortune for his grandchild, he fell ill. The child did her best to comfort him, but he told her that if Quilp deserted them they would be no better than beggars.'
)
Review.create(
    user_id: 1, 
    relationship_id: 7, 
    name: 'Brass', 
    rating: 5, 
    body: 'Neither had heard the dwarf, who had stolen into the shop behind them. Little Nell shrieked when she saw him, and her grandfather sent her into her own room.'
)
Review.create(
    user_id: 2, 
    relationship_id: 8, 
    name: 'Sally Brass', 
    rating: 5, 
    body: 'The old man cried out at this, trembling, that he had done it all for little Nell; that he had never staked a single penny for himself, or without praying that it might win for her good. He told how he had begun gambling months before, knowing he must soon die, hoping thus to leave her enough to live on; how, after losing all his own savings, he had borrowed and lost all that, too. And he[Pg 24] begged the dwarf to loan him a little more so that he might tempt luck again.'
)
Review.create(
    user_id: 3, 
    relationship_id: 9, 
    name: 'Dick Swiveller', 
    rating: 5, 
    body: 'Any one but Quilp would have pitied the poor old man, but not he. He refused, and thinking of a lie which would make the other yet more miserable, he told him as he left that it was Kit who had told him where the money was going.'
)
Review.create(
    user_id: 2, 
    relationship_id: 10, 
    name: 'Kit', 
    rating: 5, 
    body: 'The first Kit knew of this was that night when little Nell came to tell him her grandfather was very ill, and that he raved continually against Kit so that he must never come to the shop again. Kit was stupefied at this, but there was no help for it, so little Nell went sorrowfully back alone.'
)
Review.create(
    user_id: 3, 
    relationship_id: 11, 
    name: 'Liam', 
    rating: 5, 
    body: 'The old man would certainly have died if little Nell had not nursed him so faithfully, all alone, till he grew better and at length was able to sit up.'
)
Review.create(
    user_id: 3, 
    relationship_id: 12, 
    name: 'Noah', 
    rating: 5, 
    body: 'But it was a bitter thing to live as they did, and one day little Nell begged her grandfather to come away with her—to wander anywhere in the world, only so it was under God\'s sky and away from every one that pursued them—and he agreed.'
)
Review.create(
    user_id: 3, 
    relationship_id: 13, 
    name: 'Oliver', 
    rating: 5, 
    body: 'So that night they dressed and stole down stairs very quietly in order not to waken the dwarf who was snoring frightfully in the back room, and went through the shop to the front door. The bolts were rusty and creaked loudly, and, worst of all, they found the key was not in the lock. Little Nell had to take off her shoes and creep into the back room to get it out of the dwarf\'s pocket.'
)
Review.create(
    user_id: 3, 
    relationship_id: 14, 
    name: 'Elijah', 
    rating: 5, 
    body: 'She was terribly frightened at the sight of Quilp, for he was having a bad dream, and was hanging so far out of bed that he was almost standing on his head; his ugly mouth was wide open, and his breath came in a sort of growl. But she found the key at last, and they unlocked the door and came safely into the dark street.'
)
Review.create(
    user_id: 3, 
    relationship_id: 15, 
    name: 'William', 
    rating: 5, 
    body: 'The old man did not know where to go, but little Nell took his hand and led him gently away.'
)
Review.create(
    user_id: 3, 
    relationship_id: 16, 
    name: 'James', 
    rating: 5, 
    body: 'It was a bright June morning. They walked through many city streets, then through more scattered suburbs, and at last came to the open country. That night they slept at a cottage where the people were kind to them, and all the next day they walked on and on.'
)
Review.create(
    user_id: 3, 
    relationship_id: 17, 
    name: 'Benjamin', 
    rating: 5, 
    body: 'At sunset they stopped to rest in a churchyard, where two men were sitting patching a Punch-and-Judy show booth, while the figures of Punch, the doctor, the executioner and the devil were lying on the grass waiting to be mended.'
)




##Review.create(
##    user_id: 3, 
##    relationship_id: 16, 
##    name: '', 
##    rating: 5, 
##    body: ''
##)

