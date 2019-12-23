import Post from '../models/Post';

class VotosController {
  async store(req, res) {
    const post = await Post.findById(req.params.id);
    post.set({ likes: post.likes + 1 });

    await post.save();

    req.io.emit('voto', post);

    return res.json(post);
  }
}

export default new VotosController();
