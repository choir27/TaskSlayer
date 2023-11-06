# EchoVerse

Taking the foundations created by this repository, https://github.com/choir27/Illya-Site, this project strives to take the Illya website and not only improve the UI, but also apply React elements to various aspects of the web application and change the web application intentions and content to better suit the music theme.

<a href = "https://kpopwired.netlify.app/">
<img width="946" alt="Screenshot 202<img width="941" alt="Screenshot 2023-04-13 154133" src="https://user-images.githubusercontent.com/66279068/231866114-5a8c6cf0-ac63-4ee6-8413-b4bab52aeb74.png">
</a>

<div align = "center"><a href = "https://kpopwired.netlify.app/">Check out the website!</a></div>

## How It's Made: Tech used: React, jsx, Node

I retrieved all audio and playlist posts from a separate backend API and used state to dynamically render the fetched data so that the JSX elements could load the updated data. To register/sign in users, I sent the user data using fetch and headers, utilizing the same database. With the help of React Outlet, I created private routes to authenticate those users. Additionally, I implemented a feature that enables logged-in users not only to listen to music tracks but also to add songs from any user to their created playlists.  I also implemented a feature that ensures that when a user removes a song from a playlist, the song is not deleted but simply removed from the playlist.  Additionally, I made it so that when the user posts an audio file, there is a loading text before the POST request finishes.

 ## Optimizations 
 
Using useCallback and useMemo, I memoized many of the functions I needed to utilize to prevent unnecessary re-rendering, thus increasing the render speed of the overall application.  I also changed most of the logic to either O(n) or O(1) by using different data types, reducing the memory required to render the code and significantly increasing how fast the application loads.  Also, instead of placing the video files directly into the code, I used a link to redirect the user to the video link on YouTube to reduce the memory required to host multiple large video files.  I am thinking of adding a search function so that users and guests can look up song titles/playlist titles/users for easier access and a way for users to delete their accounts.  I also want to eventually change the code so that whenever the user deletes a song, it removes said music track from every playlist.

## Lessons Learned: 

I discovered the importance of rendering speed when building web applications. Although I couldn't optimize every aspect of my code to run at O(1), I'm grateful for the experience and the opportunity to learn new skills that I can apply to future projects. During this project, I gained knowledge about various elements of React, such as useEffect, useContext, useMemo, useNavigate, useHistory, and many others. I'm thrilled to continue experimenting with these features in upcoming projects.

## Examples: 
Take a look at these couple examples that I have in my own portfolio: The Real Estate Beast https://therealestatebeast.netlify.app/ For Everything Priconne: https://odd-blue-cuttlefish-coat.cyclic.app/





