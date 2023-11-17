# EchoStream

Taking the foundations started by the Illya Site and the improvements made by Kpop Wired, EchoStream strives to take everything I have learned so far and apply my current knowledge to implement the functionalities and components of the application.

<a href = "https://echostream.netlify.app/">
 
 ![echostream](https://github.com/choir27/EchoStream/assets/66279068/c98a1dd1-e1e8-4470-a1f3-84744de91da2)
 
</a>

<div align = "center"><a href = "https://echostream.netlify.app/">Check out the website!</a></div>

Kpop Wired Home Screen UI:

<img width="941" alt="kpopwired" src="https://github.com/choir27/EchoStream/assets/66279068/12a746b3-a3a2-458b-8684-ae230e454d4c">

Illya Site Home Screen UI:

![illya](https://github.com/choir27/EchoStream/assets/66279068/a62001f2-c47e-471e-959a-f67ecd93fcf7)

## How It's Made: Tech used: Next, TypeScript, Appwrite

I retrieved all audio and playlist posts from a separate backend API that I created (https://github.com/choir27/echoverse-backend) and used Zustand state to dynamically render the fetched data so that the JSX elements could load the updated data. To register/sign in users, I sent the user data using the AppWrite function methods.  Additionally, I implemented a feature that enables logged-in users not only to edit the music tracks, but also to add songs from any user to their created playlists.  I also implemented a feature that ensures that when a user removes a song from a playlist, the song is not deleted but simply removed from the playlist.  Additionally, I made it so that when the user posts an audio file, there is a loading text before the POST request finishes.

 ## Optimizations 
 
Using useCallback and useMemo, I memoized many of the functions I needed to utilize to prevent unnecessary re-rendering, thus increasing the render speed of the overall application.  I also changed most of the logic to either O(n) or O(1) by using different data types, reducing the memory required to render the code and significantly increasing how fast the application loads.  Also, instead of placing the video files directly into the code, I used a link to redirect the user to the video link on YouTube to reduce the memory required to host multiple large video files.  I am thinking of adding a search function so that users and guests can look up song titles/playlist titles/users for easier access and a way for users to delete their accounts.  I also want to eventually change the code so that whenever the user deletes a song, it removes said music track from every playlist.

## Lessons Learned: 

I discovered the importance of rendering speed when building web applications. Although I couldn't optimize every aspect of my code to run at O(1), I'm grateful for the experience and the opportunity to learn new skills that I can apply to future projects. During this project, I gained knowledge about various elements of React, such as useEffect, useContext, useMemo, useNavigate, useHistory, and many others. I'm thrilled to continue experimenting with these features in upcoming projects.

## Examples: 
Take a look at these couple examples that I have in my own portfolio: The Real Estate Beast https://therealestatebeast.netlify.app/ For Everything Priconne: https://odd-blue-cuttlefish-coat.cyclic.app/





