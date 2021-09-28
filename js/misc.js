var essays = document.getElementsByClassName('myessay');

$(document).ready(function () {
    $('.tiny.modal')
    .modal('hide');
    $(".activating.element").popup({
        trigger: "hover",
        html: true,
        animation: false
    });
    $('.ui.dropdown').dropdown({
        maxSelections: 2,
        onChange: function() {
            if ($('#labelPicker').val() == null) {
                displayAllEssays();
                return false;
            }
            var labels = $('#labelPicker').val();
            // loop through essays
            for (var i = 0; i < essays.length; i++) {
                var essayLabels = essays[i].getElementsByClassName('label');
                var array = [];
                // loop through essay labels
                for (var j = 0; j < essayLabels.length; j++) {
                    array.push(essayLabels[j].textContent);
                    var isMatched = false;
                    // loop through picked labels
                    for (var k = 0; k < labels.length; k++) {
                        if (array.includes(labels[k]) == true) {
                            isMatched = true;
                        }
                        else {
                            isMatched = false;
                            break;
                        }
                    }
                }
                if (isMatched == true) {
                    essays[i].classList.remove('hide');
                }
                else {
                    essays[i].classList.add('hide');
                }
            }
        }
    });
});

function displayAllEssays() {
    for (var i = 0; i < essays.length; i++) { 
        essays[i].classList.remove('hide');
    }
}

function test() {
    if (document.images) {
        alert('kapp');
    }
}

function showModalWithImage(container) {
    document.getElementById('imgPlaceholder').src = container.children[0].src;
    $('.tiny.modal')
    .modal('show');
}

function copyToClipboard() {
  var copyText = document.getElementById('hexStringPlaceholder').textContent.trim();
  var tempInput = document.createElement('input');
  tempInput.value = copyText;
  document.body.appendChild(tempInput);
  tempInput.select();
  tempInput.setSelectionRange(0, 99999); /*For mobile devices*/
  document.execCommand("copy");
  document.body.removeChild(tempInput);
}

function redirectBlank(url) {
    window.open(
        url,
        '_blank'
      );
}

function redirect(url) {
    window.location = url;
}