
//Get reference to the list element
// var list = $('ul#userList');

// //Make a GET request for the items to render
// $.get('http://jsonplaceholder.typicode.com/users', function(users){
// 	//Iterate over the response, adding elements to DOM
// 	users.forEach(function(user){
// 		var li = $('<li></li>');
// 		li.text(user.name);
// 		list.append(li);
// 	})
// })








// GOOD DOWN


// Get all posts


$(".btn1").click(function(){
    $.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts', function(argument){
        for(var i = 0; i < argument.length; i++){
       
        console.log(argument[i]);

        }
    })
});


// Get post with id of 10


$('.btn2').click(function(){
    $.get("https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts", function(content){
        for(var i=0;i<content.length;i++){
            if(content[i].id === 10){
                console.log(content[i]);
            }
        }
    })
});




// Get the comments from post with id of 12 



$('.btn3').click(function(){
    $.get("https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/comments", function(content){
        for(var i=0;i<content.length;i++){
            if(content[i].id === 12){
                console.log(content[i]);
            }
        }
    })
});


// Get all the posts from user with id of 2 



$('.btn4').click(function(){
    $.get("https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts", function(content){
        for(var i=0;i<content.length;i++){
            if(content[i].id === 2){
                console.log(content[i]);
            }
        }
    })
});


// Create a new post and log the id generated for it by the server / COME BACK 


$('.btn5').click(function(){
    $.post("https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts",{
	userId: 1,
	title: "My New Post",
	body: "This is the body"
}, function(data){
	console.log(data.id)
}) 


});

// Replace the post with id of 12 and render the responseJSON




$('.btn6').click(function(){
    $.ajax({
        method: 'PUT',
        url: 'http://jsonplaceholder.typicode.com/posts/12',
        data: {
            userId: 1,
            title: "New Post",
            body: "New post added"
        },
        complete: function(response){
            console.log(response.responseJSON);
        }
    })

});





// Update the title of post with id of 12 and render responseJSON





$('.btn7').click(function(){
    $.ajax({
        method: 'PATCH',
        url: 'http://jsonplaceholder.typicode.com/posts/12',
        data: {
    title: "patched it"
    },
        complete: function(response){
            console.log(response.responseJSON);
        }
    })

});





// Delete the post with id of 12 and render a success message




$('.btn8').click(function(){
    $.ajax({
        method: 'DELETE',
        url: 'http://jsonplaceholder.typicode.com/posts/12',
        complete: function(response){
            console.log(response.statusText + " Success");
        }
    })

});






// Display a list of posts.





// When the user clicks on a post, display all the comments from that post





// Display a link back to all posts





// GOOD UP





// function getcomment12(){
//     $.get(commentlink id=12), function (list) {
//         console.log(list);
//         let output = $("#output")
//         output.text(JSON.stringify(list))
//     }
// }



// $("#create-post").click() => {
//     let postTitle = "hello";
//     let postBody = "world"
//     $.post("posts urls")
//     title: postTitle, body: postBody).done
// })