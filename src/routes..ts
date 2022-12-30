import { Request, Response } from "express";
import CreateCourseService from "./CreateCourseService";

export function createCourse(request: Request, response: Response) {
  CreateCourseService.Execute({
    name: "Marcos",
    duration: 15,
    educator: "Dani",
  });

  return response.send();
}
