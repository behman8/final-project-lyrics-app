class SessionsController < ApplicationController

    def create
        user = User.find_by(username: params[:username])
        if user && user.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :ok
        else
            render json: { errors: "User info does not match." }, status: :not_found
        end
    end

    def destroy
        session.clear
    end

end
