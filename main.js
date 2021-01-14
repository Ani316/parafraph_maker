name_of_the_student_array = [];

function getParagraph1()
{
  var name_1 = document.getElementById("para1_input_boxx_1").value;
  var name_2 = document.getElementById("para2_input_boxx_2").value;
  var name_3 = document.getElementById("para3_input_boxx_3").value;
  var name_4 = document.getElementById("para4_input_boxx_4").value;
  var name_4 = document.getElementById("para4_input_boxx_4").value;
  var name_5 = document.getElementById("para5_input_boxx_5").value;
  var name_6 = document.getElementById("para6_input_boxx_6").value;
  
  name_of_the_student_array.push(name_1);
  name_of_the_student_array.push(name_2);
  name_of_the_student_array.push(name_3);
  name_of_the_student_array.push(name_4);
  name_of_the_student_array.push(name_5);
  name_of_the_student_array.push(name_6);
  
  console.log(name_of_the_student_array);
  
  document.getElementById("showParagraph").innerHTML = name_of_the_student_array;
}