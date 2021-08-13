const items = document.querySelectorAll('.item-post');

for (let item of items) {
    item.addEventListener("click", function() {
        const postID = item.getAttribute("id");
        window.location.href = `/recipes?id=${postID}`;
    });
}