// if() { 
//     window.alert("infoText")
// };

// function myFunction() {
//     var popup = document.getElementById("PopupInfo");
//     popup.classList.toggle("show");
//   }

//   window.onbeforeunload = function() {
//     return "...Here you get some infos...";
//   };
  
//   window.onkeydown = function(event) {
//     if (event.keyCode === 116) {
//       window.location.reload();
//     }
//   };

function myPopup(popup) {
    popupVisibility(popup)
  }

  function myPopup4Help(helpPopup) {
      popupVisibility(helpPopup)
  }
function myPopup4SQL(sqlPopup) {
    popupVisibility(sqlPopup)
}

function myPopup4Filename() {
    var element = document.getElementById("nameFilePopup");
    element.classList.toggle("isVisible");
    element.classList.toggle("isNotVisible")

    var element = document.getElementById("sqlPopup");
    element.classList.toggle("isVisible");
    element.classList.toggle("isNotVisible")
}

function popupVisibility(popupID) {
    var element = document.getElementById(popupID);
    element.classList.toggle("isVisible");
    element.classList.toggle("isNotVisible")
    var element = document.getElementById("containerBackgroundForPopup");
    element.classList.toggle("isVisible");
    element.classList.toggle("isNotVisible")
    var element = document.getElementById("diagramBody");
    element.classList.toggle("diagramIsVisible");
    element.classList.toggle("isNotVisible")
}