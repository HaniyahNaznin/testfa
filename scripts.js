$(document).ready(function () {
    $("#buttonsubmit").click(function () {
        var name = $("#name").val();
        var noic = $("#noic").val();
        var nomatric = $("#nomatric").val();

        if (!name) {
            alert("PLEASE FILL IN THE NAME");
        }

        else if (noic.length !== 12) {
            alert(" PLEASE ENTER IC NUMBER 12 DIGITS");
        }

        else if (nomatric.length !== 12) {
            alert("PLEASE ENTER MATRIC NO 12 DIGITS");
        }
        else {
            alert("DO YOU WHAT TO CONTINUE")
        }

    });
});