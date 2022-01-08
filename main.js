var student_list = [];
var display_student_list= []
function submit() {

    
    for (var a = 1; a <= 4; a++)
    {
        var name_of_the_student = document.getElementById("name_of_the_student_"+a).value;
        console.log(name_of_the_student);
        student_list.push(name_of_the_student);
    }

    console.log(student_list);
    var  length = student_list.length;
    console.log(length);
    
    for (var b = 0; b < length; b++) {
        display_student_list.push("name-"+student_list[b]);
        console.log(display_student_list);
    }
    document.getElementById("display_name_with_commas").innerHTML = display_student_list
    var remove_commas = display_student_list.join(" ");
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;
    document.getElementById("submit_button").style.display = "None"
    document.getElementById("sort_button").style.display = "inline-block"
}
function sorting() {
    student_list.sort();
    var  length = student_list.length;
    display_student_list = []
    for (var b = 0; b < length; b++) {
        display_student_list.push("name-"+student_list[b]);
        console.log(display_student_list);
    }
    var remove_commas = display_student_list.join("")
    document.getElementById("display_name_without_commas").innerHTML = remove_commas
    
}