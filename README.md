Breakdown of Work:

Installation instructions:

We have many but a few important dependencies are "passport", "ejs", "express". We used the run npm install command in the terminal to install the dependencies found within package.json. We have connect-redis that provides Redis session storage for Express, our sessions should now be saved to our Redis database. After Redis is installed next is ioredis, a robust, full-featured Redis client. Connect-flash has an extension called Flash with the ability to define a flash message and render it without redirecting the request.


Features that are working:

Adam is working on the POSTS and Hongsoon is working on the registration. Both are still currently in progress.

Contact Information:

BCIT emails -
Kya: cbam1@my.bcit.ca
Hongsoon: hkim415@my.bcit.ca
Adam: asiyala@my.bcit.ca

What the project does:

The devHouse project is a fake-twitter type application that allows for other developers share and post.
We stored our data in a fake, in-memory database.

A number of features needed for this project to be fully functioning:
- `/posts` page to show a feed containing different posts from different users, these followers are users who you follow. The posts page also shows a user thier own posts.
- Able to `Delete` a post, able to `Create` a post, able to `View` a post on its own with any comments associated with the post, and able to `comment` on a post.
- `repost` a post
- `search` for any content within a post, or a user
- `Follow` button will allow the user to **Follow** that user
- `Following` button will allow me to **Unfollow** that user
- `arrow` to the search results for the posts will take me to that specific post and its comments.

