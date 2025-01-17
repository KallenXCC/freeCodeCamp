import pytest
from source.school import TooManyStudents, Classroom, Teacher, Student


@pytest.fixture
def teacher_snape():
    return Teacher("Severus Snape")


@pytest.fixture
def student_list():
    return [Student(name) for name in ["Harry", "Hermione", "Ron", "Neville", "Luna", "Ginny"]]


@pytest.fixture
def potions_class(teacher_snape, student_list):
    return Classroom(teacher_snape, student_list, "Potions")


def test_classroom_initialization(potions_class, teacher_snape, student_list):
    assert potions_class.teacher.name == "Severus Snape"
    assert potions_class.course_title == "Potions"
    assert len(potions_class.students) == len(student_list)
    assert potions_class.students[0].name == "Harry"


def test_add_student_success(potions_class):
    draco = Student("Draco Malfoy")
    potions_class.add_student(draco)
    assert len(potions_class.students) == 7
    assert potions_class.students[-1].name == "Draco Malfoy"


def test_add_student_failure(potions_class):
    # Add 5 more students to reach the limit of 10
    extra_students = [Student(f"Student{i}") for i in range(4)]
    for student in extra_students:
        potions_class.add_student(student)

    with pytest.raises(TooManyStudents):
        potions_class.add_student(Student("Overlimit Student"))


def test_remove_student_success(potions_class):
    potions_class.remove_student("Hermione")
    assert len(potions_class.students) == 5
    assert all(student.name != "Hermione" for student in potions_class.students)


def test_remove_student_not_found(potions_class):
    initial_count = len(potions_class.students)
    potions_class.remove_student("Draco Malfoy")  # Not in the class
    assert len(potions_class.students) == initial_count


@pytest.mark.parametrize(
    "new_teacher_name",
    ["Albus Dumbledore", "Minerva McGonagall", "Gilderoy Lockhart"],
)
def test_change_teacher(potions_class, new_teacher_name):
    new_teacher = Teacher(new_teacher_name)
    potions_class.change_teacher(new_teacher)
    assert potions_class.teacher.name == new_teacher_name
