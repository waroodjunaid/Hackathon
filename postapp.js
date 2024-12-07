// Select DOM Elements
const postForm = document.getElementById('postForm');
const postTitle = document.getElementById('postTitle');
const postContent = document.getElementById('postContent');
const postsContainer = document.getElementById('postsContainer');

// Event Listener for Form Submission
postForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent page reload

    // Get Form Data
    const title = postTitle.value.trim();
    const content = postContent.value.trim();

    if (title === '' || content === '') {
        alert('Please fill in both fields!');
        return;
    }

    // Create a New Post
    createPost(title, content);

    // Clear Form Inputs
    postTitle.value = '';
    postContent.value = '';
});

// Function to Create a Post
function createPost(title, content) {
    const post = document.createElement('div');
    post.classList.add('post');

    // Post Content
    post.innerHTML = `
        <h3>${title}</h3>
        <p>${content}</p>
        <div class="post-buttons">
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        </div>
    `;

    // Add Event Listeners for Edit and Delete Buttons
    const editBtn = post.querySelector('.edit');
    const deleteBtn = post.querySelector('.delete');

    editBtn.addEventListener('click', () => editPost(post));
    deleteBtn.addEventListener('click', () => deletePost(post));

    // Add the Post to the Container
    postsContainer.prepend(post);
}

// Function to Edit a Post
function editPost(post) {
    const title = post.querySelector('h3').innerText;
    const content = post.querySelector('p').innerText;

    // Fill the Form with Existing Data
    postTitle.value = title;
    postContent.value = content;

    // Remove the Post Temporarily
    post.remove();
}

// Function to Delete a Post
function deletePost(post) {
    if (confirm('Are you sure you want to delete this post?')) {
        post.remove();
    }
}