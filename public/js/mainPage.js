$(document).ready(function() {
  // Gets an optional query string from our url (i.e. ?post_id=23)
  var url = window.location.search;
  var postId;
  // Sets a flag for whether or not we're updating a post to be false initially
  var updating = false;

  // If we have this section in our url, we pull out the post id from the url
  // In localhost:8080/mainPage?post_id=1, postId is 1
  if (url.indexOf("?post_id=") !== -1) {
    postId = url.split("=")[1];
    getPostData(postId);
  }

  // Getting jQuery references to the post name, address, email-address, zip-code and mainPageform
  // var bodyInput = $("#body");
  var nameInput = $("#name");
  var addressInput = $("#address");
  var emailInput = $("#email-address");
  var zipInput = $("#zip-code");
  var mainPageForm = $("#mainPage");
  // var postCategorySelect = $("#category");
  // // Giving the postCategorySelect a default value
  // postCategorySelect.val("Personal");
  // // Adding an event listener for when the form is submitted
  $(mainPageForm).on("submit", function handleFormSubmit(event) {
    event.preventDefault();
    // Wont submit the post if we are missing a body or a name
    if (!nameInput.val().trim() || !addressInput.val().trim() || !emailInput.val().trim() || !zipInput.val().trim()) {
      return;
    }
    // Constructing a newPost object to hand to the database
    var newPost = {
      name: nameInput.val().trim(),
      address: addressInput.val().trim(),
      email: emailInput.val().trim(),
      zip: zipInput.val().trim()
      // body: bodyInput.val().trim()
      // category: postCategorySelect.val()
    };

    console.log(newPost)

    // If we're updating a post run updatePost to update a post
    // Otherwise run submitPost to create a whole new post
    if (updating) {
      newPost.id = postId;
      updatePost(newPost);
    }
    else {
      submitPost(newPost);
    }
  });

  // Submits a new post and brings user to searchPage (neighborhood) page upon completion
  function submitPost(Post) {
    $.post("/api/posts/", Post, function() {
    	window.location.href = "/searchPage";
      // window.location.href = "/neighborhood";
    });
  }

  // Gets post data for a post if we're editing
  function getPostData(id) {
    $.get("/api/posts/" + id, function(data) {
      if (data) {
        // If this post exists, prefill our mainPage forms with its data
        nameInput.val(data.name);
        addressInput.val(data.address);
        emailInput.val(data.email);
        zipInput.val(data.zip);
        // bodyInput.val(data.body);
        // postCategorySelect.val(data.category);
        
        // If we have a post with this id, set a flag for us to know to update the post
        // when we hit submit
        updating = true;
      }
    });
  }

  // Update a given post, bring user to the neighborhood page when done
  function updatePost(post) {
    $.ajax({
      method: "PUT",
      url: "/api/posts",
      data: post
    })
    .done(function() {
    	window.location.href = "/searchPage";
      // window.location.href = "/neighborhood";
    });
  }
});