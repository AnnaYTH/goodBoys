[Live Link!](https://good-boys.herokuapp.com/#/)

# Table of Contents
1. [Background](#background)
2. [Functionality](#func)
3. [Technology](#tech)
4. [Code Snippits](#snip)
5. [Styles](#style)


# Background: <a name='background'></a>

This website was based off the reading tracker website GoodReads. The original concept is based on the idea that being able to track your previous books and how much you liked them will enable you to not only reflect on them, but also to find new books and authors that appeal to your tastes. 

Now I wanted to apply this to past relationships people have formed. It may be friends, coworkers, or romantically inclined relationships. I wanted people to have a platform to reflect on what characteristics and events they have had with other people. From this I hope they might be able to notice trends and idiosyncracies that they work well with.  

# Functionality and MVPs: <a name='func'></a>

* Relationships are akin to Books and readers can browse them and rate at will!
* Reviews can be written by each user with a name of the subject, a star rating, and a body text
* Users can come back to previously written reviews and edit or delete them with full CRUD functionality
* Users can search for relationships and other users
* Users can choose to follow other users

# Technology <a name='tech'></a>
* React 
* Rails
* Redux
* Javascript
* Ruby

# Code Snippits <a name='snip'></a>
```
toggleFollow(e) {
        e.preventDefault(); 
        let humanNumber = parseInt(this.props.match.params.id)
        let follow = {'follow_id': humanNumber, 'user_id': this.props.currentUser.id}

        this.props.followBuddy(follow); 
    }


export const addBuddy = (follow) => {
    return $.ajax({
        method: 'POST', 
        url: 'api/follows', 
        data: { follow }
    })
};
```
This is the first time I can remember passing back more than one argument to the backend, it took me so long to figure out I was not desconstructing the data I was passing back on my util file correctly.
Users have a profile show page where the current User can follow them, then they will have a quick link on their profile to their friend and they can easily see if they've posted any reviews recently

# Style <a name='style'></a>
"Having fun isn't hard,
When you've got a library card." 
-Arthur's Almost Live Not Real Music Festival

![LibraryCard](https://github.com/AnnaYTH/goodBoys/blob/main/app/assets/images/library_card.jpg)

Each relationship can have multiple reviews from any user! Users can view a relationship page to see what others have written, from here they can find users that they may want to follow. 

![Manager](https://github.com/AnnaYTH/goodBoys/blob/main/app/assets/images/manager_ss.jpg)