import express, { Request, Response, NextFunction, Router } from "express";
import IController from "../../../interfaces/controller.interface";
import IPostService from "../services/IPostService";
import Icomment from "../../../interfaces/comment.interface";
import Ipost from "../../../interfaces/post.interface";
import { post, posts } from "../../../model/fakeDB";
import { runInNewContext } from "vm";

class PostController implements IController {
  public path = "/posts";
  public router = Router();
  postService: any;

  constructor(postService: IPostService) {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(this.path, this.getAllPosts);
    this.router.get(`${this.path}/:id`, this.getPostById);
    this.router.get(`${this.path}/:id/delete`, this.deletePost);
    this.router.post(`${this.path}/:id/comment`, this.createComment);
    this.router.post(`${this.path}`, this.createPost);
  }

  // 🚀 This method should use your postService and pull from your actual fakeDB, not the temporary posts object
  private getAllPosts = (req: express.Request, res: express.Response) => {
    const username = req.user;
    res.render("post/views/posts", { posts: this.postService.getAllPosts(username), user: req.user });
  };

  // 🚀 This method should use your postService and pull from your actual fakeDB, not the temporary post object
  private getPostById = async (request: Request, res: Response, next: NextFunction) => {
    const posts = this.postService.findById(request.params.id);
    res.render("post/views/post", { post, user:request.user });
  };

  // 🚀 These post methods needs to be implemented by you
  private createComment = async (req: Request, res: Response, next: NextFunction) => {
    const comments: Icomment = {
      id:`${Math.random() * 1000000}`, 
      message:req.body.comments,
      userId: req.body.id,
      createdAt: new Date
    }
    this.postService.addCommentToPost(comments, req.body.post);
  };
  private createPost = async (req: Request, res: Response, next: NextFunction) => {
    console.log("Hold on. A post is being created.");
    const user = req.user;
    const posts: Ipost = {
      id:`${Math.random() * 1000000}`, 
      message:req.body.comments,
      commentList: [],
      userId: req.body.id, 
      createdAt: new Date,
      likes:0,
      comments:0,
      reposts:0
    }
  };
  private deletePost = async (req: Request, res: Response, next: NextFunction) => {
    const deletePosts = req.body.postToDelete;
    const posts = this.postService.getAllPosts(req.user)
    await this.postService.deletePosts(deletePosts, posts);
  };
}

export default PostController;
