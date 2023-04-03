# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: I would generate a new migration file using ruby to add a column to the existing table. An example of this would be add_to_column that can let you add to a certain table so it adds a column to it. The foreign key would belong to the that model so in this case the foreign key would be students and it would belong to Cohort.
                 
       

Researched answer: An example of this for creating the association for Cohort and students:

                class Cohort < ApplicationRecord
                 has_many :students
                 end

                class Student < ApplicationRecord
                belongs_to :Cohort
                end

The foreign key would belong to students as the primary key is Cohort.

2. Which RESTful routes must always be passed params? Why?

Your answer: I'm drawing a blank on the restful routes but the reason the params must be passed is the requirements that are established for that particular table. Params offer control over what data is stored in the database. The attributes that are listed in the params will be added.
    private 
    def blog_params
    params.require(:blog).permit(:title, :content)
    end
In this example, the params require the title and content to allow the user to create new data.

Researched answer: The restful routes that must always pass params are show, create, destroy and edit. Parameters allow users to create new information by passing a value into the route. This allows the user to have a user friendly experience rather than having to type directly in to the URL. Adding the routes with params allows the page to be more dynamic. A value is needed to be passed to the param. 
        def create
        @blog = Blog.create(blog_params)
            if @blog.valid?
            redirect_to blogs_path
            end
         end

3. Name three rails generator commands. What is created by each?

Your answer: 1.rails g model will generate the model that is associated with the database.A model consist of tables and columns. An example would be rails g model Students. In the console different columns can be added to Students such as name and cohort.2. rails g resource will generate the routes that are required to perform the CRUD action for the model. I need to do some more research on the other rails generator commands.

Researched answer: 1. rails generate controller allows for the methods such as index, create, new, edit, update, show and the destroy methods. The controller is responsible for displaying the communication between the user, the views and model. 2. rails generate rspec:install is the testing driven development that allows the validations for the columns that are listed. Different options for validations are uniqueness or the length for the columns.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students :The index controller method displays the list of each instance that was created and the data of columns from the database.
  
  def index
    @blogs = Blog.all
  end


action: "POST" location: /students :The create controller method, this method is responsible for adding data to the table in the database if the data is valid.
   
   def create
        @blog = Blog.create(blog_params)
        if @blog.valid?
        redirect_to blogs_path
        end
    end

action: "GET" location: /students/new :The new controller method the action would be to create a new model instance, new is a restful route that displays a form to the user.

     def new
        @blog = Blog.new
    end

action: "GET" location: /students/2 The show controller method allows the user to display that particular column from the database, show is a restful route that looks for one item by the id.

    def show
        @blog = Blog.find(params[:id])
    end


action: "GET" location: /students/2/edit  :The edit controller method  the action is responsible for modifying the item in the database.

    def edit 
        @blog = Blog.find(params[:id])
    end


action: "PATCH" location: /students/2 The update controller method allows the user to update a column in the table and modify it.

     def update
       @blog = Blog.find(params[:id])
       blog.update(blog_params)
    end

action: "DELETE" location: /students/2 :The destroy controller method is repsonsible for deleting a certain column in the table.

    def destroy
        @blog = Blog.find(params[:id])
        if @blog.destroy
        redirect_to blogs_path
        end
    end

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

1. The story needs a "defintion of completion" for the to do list. The list must define what needs to be done so the user knows when the list is completed.

2. As a user I can add items to do into the a form so it can be added to the list, each item will be listed as how important it is to complete.

3. So on the list, the time for completion will also be listed for each item that is considered a reasonable time frame for that particlar task.

4. As a user, the items listed will only be added for the week of to prevent confusion or the feeling of too much to do.

5. As a user I want to manage the list accordingly so as a user I can update/edit any of my items in my todo's list just in case it's not comepleted.

6. As a user I can delete any of my items on my todo's list if anything changes and that event is canceled.

7. The list will be structured by the day's events but only for that week, an example is Monday: gym, oil change and laundry. Tuesday: class, padre game.

8. The oil change for Monday will be listed in red since its the most important as the gym and laundry can be followed by regular text.

9. Once the week is over, as a user I can leave comments on what was completed or if some items didn't get accomplished.

10. So that upon completion of thr task I can delete the entire todo's list all together for the "defintion of completion."