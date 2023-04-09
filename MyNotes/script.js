const addBtn=document.querySelector(".add")
const title=document.querySelector(".title")
const notes=document.querySelector(".notes")
const container = document.querySelector('.container');
const saveBtn=document.querySelector(".save")
let reqTitle;
let reqNotes;

addBtn.addEventListener('click', function(){
    if(title.value.trim()!=0)
    {
        if(notes.value.trim()!=0)
        {
            let newItem = document.createElement('div');
            newItem.classList.add('new');
            newItem.innerHTML=`
            <div class="new-item">
                <h3 class="new-title">${title.value}</h3>
                <div class="new-notes">${notes.value}</div>
            </div>
            <div class="new-btn">
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>
            </div>

            `
            container.appendChild(newItem);
            title.value="";
            notes.value="";
        }
        else
        {
            alert("Enter the notes..!");
        }
    }
    else
    {
        alert("Enter a title.!");
    }
})

container.addEventListener('click',function(e){
    if(e.target.classList.contains("edit")){
        
        reqTitle= e.target.parentElement.parentElement.firstElementChild.firstElementChild;
       
        reqNotes= e.target.parentElement.parentElement.firstElementChild.children[1];
        
        title.value = reqTitle.textContent;

        notes.value = reqNotes.textContent;

        addBtn.classList.add("hide");
        saveBtn.classList.remove("hide");
        saveBtn.classList.add("visible");
        title.addEventListener('change', function(){
            reqTitle.innerText=title.value;
        })

        notes.addEventListener('change', function(){
            reqNotes.textContent=notes.value
        })
        saveBtn.addEventListener('click', function(){
            title.value = "";
            notes.value = "";
            addBtn.classList.add("visible");
            addBtn.classList.remove("hide");
            saveBtn.classList.add("hide");
            saveBtn.classList.remove("visible");

        })

    }

    if(e.target.classList.contains("delete")){
        e.target.parentElement.parentElement.remove();
    }
})

function changeBackground() {
    var imageArray = ["imgs/bk1.webp", "imgs/bk2.webp", "imgs/bk3.webp","imgs/bk4.webp","imgs/bk5.webp","imgs/bk6.webp"]; // an array of image URLs
    var randomIndex = Math.floor(Math.random() * imageArray.length); // get a random index
    var selectedImage = imageArray[randomIndex]; // get the selected image URL
  
    document.getElementById("bg-image").style.backgroundImage = "url('" + selectedImage + "')"; // change the background image
}
  