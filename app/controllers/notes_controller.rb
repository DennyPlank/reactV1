# This controller is talking to router, model, view.

class NotesController < ApplicationController
  
  def index 
      notes = Note.all
      render component: "Notes", props: {notes: notes} 
  end
  
  def show
  #find car and show it (1 car by id)
  # render car
  #render component:
  end

#(C)reate
  def new
  # render new form
  #render component:
  end

  def create
  # create car(from from UI) to our db
  #render component:
  end

#(U)pdate
  def edit
  #we need to find car in DB to update
  # render update form
  #render component:
  end

  def update
   # find car to Update
  # update car(from from UI) to our db
  #render component:
  end

#(D)elete
  def destroy
    #render component:
  # find car to Delete
  # Delete
  end
end
