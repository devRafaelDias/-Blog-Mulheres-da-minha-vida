document.addEventListener("DOMContentLoaded", function () {


    var backGrayElements = document.querySelectorAll(".backGray");
    backGrayElements.forEach(function (element) {
        element.addEventListener("click", function () {
            var popup = document.getElementById('popup');
            popup.style.display = "grid"
            document.body.style.overflow = 'hidden';
        });
    });
});

function closePopup() {
    var popup = document.getElementById('popup')
    document.body.style.overflow = 'auto';
    popup.style.display = 'none'
}