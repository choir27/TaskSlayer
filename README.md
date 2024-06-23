# EchoStream

Taking the foundations started by the Illya Site and the improvements made by Kpop Wired, EchoStream strives to take everything I have learned so far and apply my current knowledge to implement the functionalities and components of the application.

<a href = "https://echostream.netlify.app/">
 
 ![echostream](https://github.com/choir27/EchoStream/assets/66279068/c98a1dd1-e1e8-4470-a1f3-84744de91da2)
 
</a>

<div align = "center"><a href = "https://echostream.netlify.app/">Check out the website!</a></div>

<h1>Visual Representation of this projects lifecycle and all its different improvements</h1>

<h2>First Iteration of this project</h2>
Illya Site Home Screen UI

![179312530-3e9afd3f-d7d9-48b5-9fff-494b9ec75feb](https://github.com/choir27/EchoStream/assets/66279068/6f14c8f3-8b34-47cd-8cf7-37a3d70d1a3d)

<h2>First Improvement of this project</h2>
Illya Site Home Screen UI:

![illya](https://github.com/choir27/EchoStream/assets/66279068/a62001f2-c47e-471e-959a-f67ecd93fcf7)

<h2>Second Improvement of this project</h2>
Kpop Wired Home Screen UI:

<img width="941" alt="kpopwired" src="https://github.com/choir27/EchoStream/assets/66279068/12a746b3-a3a2-458b-8684-ae230e454d4c">

<h2>Current Improvement of this project</h2>
EchoStream Home Screen UI:

![echostream](https://github.com/choir27/EchoStream/assets/66279068/c98a1dd1-e1e8-4470-a1f3-84744de91da2)

## How It's Made: Tech used: Next, TypeScript, React, Appwrite, Cloudinary

I retrieved all audio and playlist posts from a separate backend API that I created (https://github.com/choir27/echoverse-backend) and used Zustand state to dynamically render the fetched data so that the JSX elements could load the updated data. To register/sign in users, I sent the user data using the AppWrite function methods. Additionally, I implemented a feature that enables logged-in users not only to edit the music tracks, but also to add songs from any user to their created playlists. I also implemented a feature that ensures that when a user removes a song from a playlist, the song is not deleted but simply removed from the playlist. Additionally, I made it so that when the user posts an audio file, there is a loading text before the POST request finishes.

## Optimizations

When implementing the shuffle playlist feature for the EchoStream application, I initially had to use nested loops in order to achieve the logic I desired; however, I did not want the playlist shuffle logic to run at O(n squared), so I took another look at the how the search logic was running, and found a way to make the logic run at O(n) instead. Eventually I want to make the delete account functionality for this application work as intended. I also want to change the code so that whenever the user deletes a song, it removes said music track from every playlist.

## Lessons Learned:

I discovered the importance of constantly improving, and looking back at how I used to be in order to see how I far I have gotten as a Software Engineer. After having come back to this project that I had thought was already an improved product from my Illya Site, I realized that there is always room to grow, and in the future, I will surely have more knowledge and experience as an Engineer to be able to improve on this project further.

## Examples:

Take a look at these couple examples that I have in my own portfolio: Priconnect https://priconnect.netlify.app/ Auto Aligners https://autoaligners.netlify.app/
