class JournalsController < ApplicationController
    def index
        render json: Journal.all
    end

    def show
        render json: Journal.find(params[:id])
    end

    # def create
    #     journal = Journal.create(journal_params)
    #     render json: journal
    # end

    # def update
    #     journal = Journal.find(params[:id])
    #     journal.update(journal_params)
    #     journal.save
    #     render json: journal
    # end

    # def destroy
    #     journal = Journal.find(params[:id])
    #     unless journal.nil?
    #         journal.destroy
    #         render json: journal
    #     else
    #         render json: { error: "No journal entry found!" }, status: 404
    #     end
    # end

    # private
    # def journal_params
    #     params.require(:journal).permit(:input1, :input2, :input3)
    # end

end
