class Api::PostsController < ActionController::API
  wrap_parameters include: Post.attribute_names + [:images]

  def index
    @posts = Post.all.sort { |a, b| b.created_at <=> a.created_at }
  end

  def create
    post = Post.new(post_params)
    if post.save
      render partial: "api/posts", locals: { post: post }
    else
      render json: post.errors, status: 422
    end
  end
end
