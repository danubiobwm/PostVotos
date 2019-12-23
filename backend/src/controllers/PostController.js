import Post from '../models/Post';

class PostController {
  async index(req, res) {
    const posts = await Post.find({}).sort('-createdAt');

    return res.json(posts);
  }

  async store(req, res) {
    const post = await Post.create(req.body);

    req.io.emit('post', post);

    return res.json(post);
  }
}

export default new PostController();
