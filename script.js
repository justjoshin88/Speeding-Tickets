document.addEventListener("DOMContentLoaded", function() {
    fetch("cit5students.json")
        .then(response => response.json())
        .then(data => {
            window.students = data;
        });
});

function filterMajors(major) {
    const filteredStudents = window.students.filter(student => student.major === major);
    const templateSource = document.getElementById("student-template").innerHTML;
    const template = Handlebars.compile(templateSource);
    const studentList = template({ students: filteredStudents });
    document.getElementById("student-list").innerHTML = studentList;
}
