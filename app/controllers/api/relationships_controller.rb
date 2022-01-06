class Api::Relationships < ApplicationController 

    def show 
        @relationship = Relationship.find_by(id: params[:id])
        render :show
    end

    def index 
        @relationships = Relationship.all 
        render :index
    end

    private
  
    def relationship_params
      params.require(:relationship).permit(:relationship_name, :pronounciation, :relationship_definition)
    end
end