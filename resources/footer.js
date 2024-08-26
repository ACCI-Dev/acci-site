fetch("./footer.html")
    .then(response => response.text())
    .then(function (html) {
        document.body.innerHTML += html
    })