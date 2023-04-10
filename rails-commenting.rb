# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) The controller is created in the Terminal, rails generate controller BlogPost would be the command. The controller allows for each of the CRUD routes to have a method. The 7 CRUD routes consist of Index, Show, Create, Edit, Update and Destroy. A model is passed through the controller, routes and views to establish an MVP which stands for minimum viable product.
class BlogPostsController < ApplicationController
  def index
    # ---2) Index is a get request.This allows the user to see each instance of the Blogs that were created in the database. @post is passed in the erb file to output each blog. An example would be "@posts.each" with a do block to pass each post "do |blog|." By creating an index.html.erb file for this ruby method, the user can see each blog post in a list.
    @posts = BlogPost.all
  end

  # ---3) Show is a get request. This allows the user to show one instance of the BlogPost, the :id is established to show that one particular item. BlogPost.find searches for the one instance in which the id that was passed in the param. Calling on params allows the id to be passed in the URL to show which one was called. An example would be blog_post/1 to show the first id.
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) New is a get request. New allows the user to add data to the application for that database. A form is displayed to the user, form_with allows the user to implement text to create the form. The action of actually creating the request will not be added until strong params is established to provide control over the data that is passed. These restrictions allow the protection over each data that is passed.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) Create is a post request. A user is allowed to submit new data to the database, however because of private, any data will have be the same arguments as listed in the params. In the parenthesis is the strong params method that is being called upon which is "blog_post_params". In this case only a title and the content of the title are permitted to create new data. Create does not have a view file, therefore if the title and content is valid the user will be redirected to a new page once the creation is completed.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6) Edit is a get request. Edit allows the user to modify the item in the databse. The BlogPost.find(params[:id]) is allowing the user to find that blog by the id that is passed in the param. BlogPost.find allows the user to find the blog that is intended on modifying.
    @post = BlogPost.find(params[:id]) 
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) Update allows the user to modify the item in the database. Just like the edit action, the update requries the id of the item so that intended item is modified. If the update is valid the user will be redirected back to the page where the blogs are displayed.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy 
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8) The destroy method removes an instance from the database. BlogPost.find calls on the id of which column is being deleted.To destroy the first item the user would type blog_post/1. Once upon completion of the destroy method the user is redircted back to the index page where the item that was destroyed is no longer visible. 
      redirect_to blog_posts_path
    end
  end

  # ---9) Private is a keyword that restricts the scope of that method, this is why its located on the bottom of the page. The arguments that are passed through are protected to with the keyword "private" to ensure that is not called upon anywhere else.  
  private
  def blog_post_params
    # ---10) Strong params allow the user to have complete control over which data is passed. In this case the title and content are required to ensure each new instance that is created has both. A good example is for an email and password, the user could not submit the data if one if the two was missing. The require method allows for the attributes to be present along with the permit method that only allows certain data to be passed.
    params.require(:blog_post).permit(:title, :content)
  end
end
