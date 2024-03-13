/**
 * Retrieves the sum of ids of a list of students.
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} students - The list of students.
 * @returns {Number}
 */
export default function getStudentIdsSum(students) {
  if (students instanceof Array) {
    return students
      .map((stud) => stud.id)
      .reduce((acc, current) => acc + current, 0);
  }
  return 0;
}
