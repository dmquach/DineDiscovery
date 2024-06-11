class Api::PostsController < ActionController::API
  wrap_parameters include: Post.attribute_names + [:images]

  def index
    @posts = Post.all.sort { |a, b| b.created_at <=> a.created_at }
  end
end
