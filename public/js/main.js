const output = document.querySelector("#output");
const button = document.querySelector("#get-posts-btn");
const form = document.querySelector("#add-post-form");

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

// Submit new post
async function addPost(e) {
  e.preventDefault();
  const formData = new FormData(this);
  const title = formData.get("title");

  try {
    const res = await fetch("http://localhost:5000/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    });

    if (!res.ok) {
      throw new Error("Failed to add post");
    }

    const newPost = await res.json();

    const postElement = document.createElement("div");
    postElement.textContent = newPost.title;
    output.appendChild(postElement);
    showPosts();
  } catch (error) {
    console.error("Error adding post");
  }
}

// Event listeners
button.addEventListener("click", showPosts);
form.addEventListener("submit", addPost);
