Breakdown of Work:

Installation instructions:

We have many but a few important dependencies are "passport", "ejs", "express". We used the run npm install command in the terminal to install the dependencies found within package.json. We have connect-redis that provides Redis session storage for Express, our sessions should now be saved to our Redis database. After Redis is installed next is ioredis, a robust, full-featured Redis client. Connect-flash has an extension called Flash with the ability to define a flash message and render it without redirecting the request.


Features that are working:
Adam is working on the POSTS and Hongsoon is working on the registration. Both are still currently in progress.

Features that are missing:



Contact Information:
BCIT emails -
Kya: cbam1@my.bcit.ca
Hongsoon: hkim415@my.bcit.ca
Adam: asiyala@my.bcit.ca

Explain what the project does:

The devHouse project is a fake-twitter type application that allows for other developers share and post.
We stored our data in a fake, in-memory database.

A number of features needed for this project to be fully functioning:
`/posts` page show a feed containing a mixture of posts from different users whom you follow, as well as showing your own posts, able to `Delete` a post
able to `Create` a post
 able to `View` a `single` post. When doing so, be sure to load up any comments associated with that post.
able to `comment` on a post.
- [ ]  You should be able to `repost` a post. This means that when you click the "repost" button, it shows your name with the word repost, and then underneath it, the post you wanted to repost. **(I recommend implementing this task later)**
- [ ]  You should be able to `search` for content within a post, or a user
- [ ]  Clicking on the `Follow` button will allow me to **Follow** that user
- [ ]  Clicking on the `Following` button will allow me to **Unfollow** that user
- [ ]  Clicking on the `arrow` next to the search results for the posts will take me to that specific post and its comments.

