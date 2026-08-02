function OpenComments(postElement) {
  const comments = postElement.nextElementSibling;
  if (comments) {
    comments.classList.toggle("active");
  }

  const subject = postElement.querySelector(".post-subject") || postElement.children[1];
  if (subject && subject.classList.contains("post-subject")) {
    subject.classList.toggle("expanded");
    truncatePostSubjects();
  }
}

function truncatePostSubjects(limit = 200) {
  document.querySelectorAll(".post-subject").forEach((el) => {
    if (!el.dataset.fullText) {
      el.dataset.fullText = el.textContent ? el.textContent.trim() : "";
    }

    const fullText = el.dataset.fullText;

    if (el.classList.contains("expanded")) {
      el.textContent = fullText;
    } else if (fullText.length > limit) {
      el.textContent = fullText.slice(0, limit) + "...";
    }
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => truncatePostSubjects());
} else {
  truncatePostSubjects();
}

