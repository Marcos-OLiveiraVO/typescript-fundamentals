interface Course {
  name: String;
  duration: number;
  educator: String;
}

class CreateCourseService {
  Execute(data: Course) {
    console.log(data.duration, data.educator, data.name);
  }
}

export default new CreateCourseService();
