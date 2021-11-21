var essays = document.getElementsByClassName("myessay");
var songs = document.getElementsByClassName("mysong");

$(document).ready(function () {
  $(".tiny.modal").modal("hide");

  // enable popup
  $(".activating.element").popup({
    trigger: "hover",
    html: true,
    animation: false,
  });

  // enable accordion
  $(".ui.accordion").accordion({
    on: null,
  });

  // enable videos
  $(".ui.embed").embed();

  // lazyload images in accordions
  $(".menu .item").tab({
    onLoad: function (tabPath, parameterArray, historyEvent) {
      echo.init({
        offset: 2500,
        throttle: 250,
        unload: false,
        callback: function (element, op) {
          // console.log(element, "has been", op + "ed");
        },
      });
    },
  });

  // enable dropdown (essays)
  $(".ui.dropdown").dropdown({
    maxSelections: 2,
    onChange: function () {
      if ($("#labelPicker").val() == null) {
        displayAllEssays();
        return false;
      }
      var labels = $("#labelPicker").val();

      // loop through essays
      for (var i = 0; i < essays.length; i++) {
        var essayLabels = essays[i].getElementsByClassName("label");
        var array = [];

        // loop through essay labels
        for (var j = 0; j < essayLabels.length; j++) {
          array.push(essayLabels[j].textContent);
          var isMatched = false;

          // loop through picked labels
          for (var k = 0; k < labels.length; k++) {
            if (array.includes(labels[k]) == true) {
              isMatched = true;
            } else {
              isMatched = false;
              break;
            }
          }
        }

        if (isMatched == true) {
          essays[i].classList.remove("hide");
        } else {
          essays[i].classList.add("hide");
        }
      }
    },
  });

  // enable dropdown (music)
  $(".ui.dropdown.music-dropdown").dropdown({
    onChange: function () {
      var data = $("#songFilter").val();

      if (data == "") {
        displayAllSongs();

        return false;
      }

      // prepare data
      const isGenrePickedFirst = data.split(",")[0].includes("genre");

      const pickedAuthors = data
        .split(",")
        .flatMap((item) =>
          item.includes("author") ? item.replace("author: ", "") : []
        );

      const pickedGenres = data
        .split(",")
        .flatMap((item) =>
          item.includes("genre") ? item.replace("genre: ", "") : []
        );

      for (var i = 0; i < songs.length; i++) {
        var isMatched = false;
        var authors = songs[i]
          .getAttribute("authors")
          .split(",")
          .map(function (item) {
            return item.trim();
          });

        var genre = songs[i].getAttribute("genre");

        if (isGenrePickedFirst) {
          if (pickedAuthors[0]) {
            for (var j = 0; j < authors.length; j++) {
              if (
                pickedAuthors.includes(authors[j]) &&
                pickedGenres.includes(genre)
              ) {
                isMatched = true;
                break;
              }
            }
          } else {
            isMatched = pickedGenres.includes(genre);
          }
        } else {
          if (pickedAuthors[0]) {
            for (var j = 0; j < authors.length; j++) {
              if (pickedAuthors.includes(authors[j])) {
                isMatched = true;
                break;
              }
            }
          }

          if (!isMatched && pickedGenres[0]) {
            isMatched = pickedGenres.includes(genre);
          }
        }

        if (!isMatched) {
          songs[i].classList.add("hide");
        } else {
          songs[i].classList.remove("hide");
        }
      }
    },
  });
});

function displayAllEssays() {
  for (var i = 0; i < essays.length; i++) {
    essays[i].classList.remove("hide");
  }
}

function displayAllSongs() {
  for (var i = 0; i < songs.length; i++) {
    songs[i].classList.remove("hide");
  }
}

function triggerAnim(id, animation, duration = 500) {
  $(`#${id}`).transition({
    animation,
    duration,
  });
}

function showModalWithImage(container) {
  document.getElementById("imgPlaceholder").src = container.children[0].src;
  $(".tiny.modal").modal("show");
}

function copyToClipboard() {
  var copyText = document
    .getElementById("hexStringPlaceholder")
    .textContent.trim();

  var tempInput = document.createElement("input");
  tempInput.value = copyText;

  document.body.appendChild(tempInput);
  tempInput.select();
  tempInput.setSelectionRange(0, 99999); /*For mobile devices*/

  document.execCommand("copy");
  document.body.removeChild(tempInput);
}

function redirectBlank(url) {
  window.open(url, "_blank");
}

function redirect(url) {
  window.location = url;
}
