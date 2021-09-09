var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg", "https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://i.postimg.cc/bw5W5zSK/mother.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg",  "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://thumbs.dreamstime.com/b/isolated-colorful-happy-standing-labrador-retriever-white-background-color-flat-cartoon-breed-dog-198491775.jpg"];
var names = ["Family Book","Shishir Misra", "Srabani Mahapatra", "Sanaya Mishra", "Shayan Mishra", "Blaze"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = [images[i]] ; 
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = [names[i]] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
