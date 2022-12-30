interface Course {
  name: String;
  duration: number;
  educator: String;
}

class CreateCourseService {
  Execute({ name, duration = 8, educator }: Course) {
    console.log(duration, educator, name);
  }
}

export default new CreateCourseService();
