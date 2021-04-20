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

devHouse is a fake, twitter-like social application for developers who want to make posts about coding-related things. 
we are storing our data in a fake, in-memory database, when you register and insert a user into this database, that user will get wiped out if you kill the server. This isn't really a big deal for development 


- [ ]  Your `/posts` page should show a feed containing a mixture of posts from different users whom you follow, as well as showing your own posts. For now, to keep things simple since you probably haven't implemented following a user, you can just show all your own posts. (You will need to circle back to this in the future to improve it however).
- [ ]  You should be able to `Delete` a post
- [ ]  You should be able to `Create` a post
- [ ]  You should be able to `View` a `single` post. When doing so, be sure to load up any comments associated with that post.
- [ ]  You should be able to `comment` on a post.
- [ ]  You should be able to `repost` a post. This means that when you click the "repost" button, it shows your name with the word repost, and then underneath it, the post you wanted to repost. **(I recommend implementing this task later)**
- [ ]  You should be able to `search` for content within a post, or a user
- [ ]  Clicking on the `Follow` button will allow me to **Follow** that user
- [ ]  Clicking on the `Following` button will allow me to **Unfollow** that user
- [ ]  Clicking on the `arrow` next to the search results for the posts will take me to that specific post and its comments.

1. The Browser makes a request for some page, such as **/posts**
2. A **Controller** will receive this request. A controller is a file that receives an incoming request, and which controller receives the request depends on its path variable. Every controller must have a path variable associated with it, because every controller implements the `IController` interface. In the case of the example above, we would have a post controller that contains a path variable called `/posts` . In this case, when the controller receives the request, it triggers a method within the file to handle that request.
3. Because the method in the posts controller needs to interact with a database to get the posts for the feed, it delegates this task to another file, known as a **service file**. A **Service** is a file that is responsible for interacting with the database. It will fetch from the database the posts. 
4. The database will respond back with the posts. 
5. The post service will receive these posts, and pass them back to the post controller.  
6. Now it is time for the post controller to call res.render to send the ejs page. The problem is, we need to put the posts we got from the database into the ejs page...but not necessarily ALL of it. Sometimes, the database gives you back more than you actually need. **We only want to send into our ejs page the EXACT data needed to render the page...no more, no less.** To solve this, we will create a **View Model**. What is a **View model**? A View Model is a file responsible for creating an object that contains the ***exact*** data needed by the ejs view. We hand it what the database gives us back, and we send that into the view model. 
7. We pass our view model object into the ejs page through the render method, and the browser displays the page. (I have included an example of a view model in the starter code)
