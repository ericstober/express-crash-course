const output = document.querySelector("#output");
const button = document.querySelector("#get-posts-btn");

// Get and show posts
async function showPosts() {
  const res = await fetch("http://localhost:5000/api/posts");

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  try {
    const posts = await res.json();
    output.innerHTML = "";

    posts.forEach((post) => {
      const postElement = document.createElement("div");
      postElement.textContent = post.title;
      output.appendChild(postElement);
    });
  } catch (error) {
    console.log("Error fetching posts: ", error);
  }
}

// Event listeners
button.addEventListener("click", showPosts);
