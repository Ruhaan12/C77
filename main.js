name_of_student_array = []

function submit(){
    var nm1 = document.getElementById("name1").value;
    var nm2 = document.getElementById("name2").value;
    var nm3 = document.getElementById("name3").value;
    var nm4 = document.getElementById("name4").value;


    name_of_student_array.push(nm1);
    name_of_student_array.push(nm2);
    name_of_student_array.push(nm3);
    name_of_student_array.push(nm4);

    console.log(name_of_student_array);

    document.getElementById("div2").innerHTML = name_of_student_array;
    document.getElementById("submit").style.display = "none";
    document.getElementById("sorting").style.display = "inline-block";
}

function sort(){
    name_of_student_array.sort();
    console.log(name_of_student_array);
    document.getElementById("div2").innerHTML = name_of_student_array;
}