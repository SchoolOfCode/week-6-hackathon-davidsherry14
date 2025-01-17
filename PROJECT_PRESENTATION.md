Put your plan, story, and any supporting material here, you could use the help of a readme markdown generator such as [readme.so](https://readme.so/)

You are tasked with writing a function whoIsBanished(votes) where:

'votes' is an array of objects. Each object represents a player and their vote count:
{ name: 'Alice', votes: 3 }
The function determines the player with the most votes. This player is then banished! So your function should then return the player name, and how many votes they have.

If there is a tie (two or more players with the highest vote count), the first player (in order of appearance) among the tied players is banished.
The function should return the name of the banished player, if there are no players with any votes then the function should return null.