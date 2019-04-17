class EntriesController < ApplicationController
    def index
        render json: Entry.all
    end

    def show
        render json: Entry.find(params[:id])
    end

    def create
        entry = Entry.create(entry_params)
        render json: entry
    end

    def update
        entry = Entry.find(params[:id])
        entry.update(entry_params)
        entry.save
        render json: entry
    end

    def destroy
        entry = Entry.find(params[:id])
        unless entry.nil?
            entry.destroy
            render json: entry
        else
            render json: { error: "No journal entry found!" }, status: 404
        end
    end

    private
    def entry_params
        params.require(:entry).permit(:input1, :input2, :input3)
    end
end
