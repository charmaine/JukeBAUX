# Hack the North 2017- JukeBAUX

## Inspiration
As music streaming applications become increasingly popular, we can't help but wonder how we could contribute to pushing the boundaries of one of our favourite platforms. As avid users of Spotify, we wanted to extend the capabilities of the application and fill the gap between its current functions and the potential we see in it. This is perfect for road trips-- no more fighting over the Aux cord, or other group activities like hiking, campfires or even parties.

## What it does
JukeBAUX only requires one user within the collaborative playlist to have Spotify. This user will then act as the DJ, but the song choices are directly chosen and voted upon by their peers via SMS, forming a priority queue of the best )(collaboratively agreed upon) playlist ever. 

## How we built it
The application is a responsive cross-platform Progressive Web App (supports all of Android, iOS, Windows phones). We integrated Twilio's API in Python to receive text messages of song titles from users to one designated phone number, these song titles are lined up in our playlist according to popularity. We then store these requests in our database and search for matching song titles with the Spotify API, playing the playlist in a dynamic order on the user's native platform (works on phone & web).

## Challenges we ran into
- Understanding how to piece all the parts of the app together took a lot of planning, discussions and trial-and-error.
- We used a wide array of languages and frameworks to deliver the most polished app that we could possibly make with the time we were given.

## Accomplishments that we're proud of
- The work was distributed perfectly so everyone felt challenged while still finishing the project.
- Since our strengths differed so much, we were all able to take complete ownership of large chunks of the project.
- Integrated Twilio & Spotify's API seamlessly into the application.
- Everything works as it should!!

## What we learned
- Team work makes the dream work! 

## What's next for JukeBAUX
We'd love to see the function of being able to sync up different phones and play songs from a collaborative playlist at the exact same time-- almost acting as a loud portable speaker.
