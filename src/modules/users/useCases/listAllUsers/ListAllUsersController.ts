import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const user_id = request.headers.user_id as string;

    try {
      const users = this.listAllUsersUseCase.execute({ user_id });

      if (users.length <= 0) {
        return response.status(404).json({
          error: "No users found",
        });
      }
      return response.status(200).json(users);
    } catch (err) {
      return response.status(400).json({
        error: err.message,
      });
    }
  }
}

export { ListAllUsersController };
