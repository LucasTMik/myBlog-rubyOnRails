class PagesController < ApplicationController
    def home
        @posts = Post.all
    end

    def diary
        @posts = Post.where("category='diario'").order("created_at DESC")
    end

    def code
        @posts = Post.where("category='programacao'").order("created_at DESC")
    end

    def fotos
        @posts = Post.all
    end

    def post 
        @post = Post.find(get_post_params)
        puts(@post)
    end
    
    private
        def get_post_params 
            @param = params.require(:id)
        end
end