
var container = document.getElementById("container");
var ul = document.createElement("ul");
container.appendChild(ul);

var students = [
    { name: "Alice", marks: 85 },
    { name: "Bob", marks: 90 },
    { name: "Charlie", marks: 78 }
];
students.forEach(function(student) {
    var li = document.createElement("li");
    li.innerText = student.name + " – " + student.marks;
    li.style.backgroundColor = "lightblue";
    li.style.margin = "5px";
    li.style.padding = "8px";
    ul.appendChild(li);
});