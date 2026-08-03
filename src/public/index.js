function OpenComments(postElement) {
  const comments = postElement.nextElementSibling;
  if (comments) {
    comments.classList.toggle("active");
  }
}
