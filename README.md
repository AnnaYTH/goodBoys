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

# Technology <a name='tech'></a>
* React 
* Rails
* Redux
* Javascript
* Ruby

# Code Snippits <a name='snip'></a>
```
let allReviews = Object.values(this.props.reviews); 
        let filtered = allReviews.filter(review => review.relationship_id === parseInt(this.props.shipId))
```
I cannot believe how long it took me to figure out that I was trying to compare a '2' and a 2 and that of course js won't ever think strings and numbers are the same. Took me back to day one of looking at code. 

# Style <a name='style'></a>
This is my footer. Please read and abide. 
![altText](https://github.com/AnnaYTH/goodBoys/blob/main/app/assets/images/footer.png)
