class Api::PostsController < ActionController::API
  wrap_parameters include: Post.attribute_names + [:images]
end
