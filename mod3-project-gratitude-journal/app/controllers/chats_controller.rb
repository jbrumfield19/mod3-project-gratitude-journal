class ChatsController < ApplicationController
    def index
        render json: Chat.all
    end

    def show
        render json: Chat.find(params[:id])
    end

    def create
        chat = Chat.create(chat_params)
        render json: chat
    end
    def chat_params
        params.require(:chat).permit(:message)
    end
end
