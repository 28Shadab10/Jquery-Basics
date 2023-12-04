// 1st task
$("#para").click(function () {
  alert("clicked me");
});

//2nd task
$("#submitBtn").click(function () {
  let hasBlankField = false;
  $(".uName").removeClass("error");
  $(".uName").each(function () {
    if (this.value === "") {
      hasBlankField = true;
      this.classList.add("error");
    }
  });
  if (hasBlankField) {
    alert("Please fill all details");
    $(".uName.error:first")[0].focus();
  } else {
    alert("Details submitted!");
  }
});

// 3rd task
$("#cPassword").keyup(function(){
    var pas = $("#password").val();
    var cPas = $("#cPassword").val();

    if(pas != cPas ){
        $("#errormsg").html("Incorrect password");
        $("#errormsg").css("color","red");
    }else{
        $("#errormsg").html("");
    }
});

// 4th task
$(document).ready(function () {
    $("#addRowBtn").click(function () {
        addDetails();
    });

    $("#deleteRowBtn").click(function () {
        deleteRow();
    });
});

function addDetails() {
    // Get input values
    const classVal = $("#class").val();
    const boardVal = $("#board").val();
    const marksVal = $("#marks").val();
    const divisionVal = $("#division").val();

    // Create a new row
    const newRow = $("<tr></tr>").append(
        $("<td></td>").text(classVal),
        $("<td></td>").text(boardVal),
        $("<td></td>").text(marksVal),
        $("<td></td>").text(divisionVal)
    );

    $(".data tbody").append(newRow);
}

function deleteRow() {
    // Check if there is at least one row to delete
    if ($(".data tbody tr").length > 0) {
        $(".data tbody tr:last").remove();
    }
}

// 5th task
$("#even").on("click",function(){
$(".col:even").css("background-color","lightgrey");
});

$("#odd").on("click",function(){
$(".col:odd").css("background-color","dodgerblue");
});
