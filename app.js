//Elemenleri Seçme
const githubForm=document.getElementById("github-form");
const nameInput=document.getElementById("githubname");
const clearLastUsers=document.getElementById("clear-last-users");
const lastUsers=document.getElementById("last-users");
const github = new Github();
const ui= new UI();

eventListeners();

function eventListeners(){
    githubForm.addEventListener("submit",getData);
    clearLastUsers.addEventListener("click",clearAllSearched);
    document.addEventListener("DOMContentLoaded",getAllSearch);
}

function getData(e){

    let username=nameInput.value.trim();
    if(username === ""){
        alert("Lütfen geçerli bir url giriniz..");
    }
    else{
        github.getGithubData(username)
        .then(response=>{
            if(response.user.message==="Not Found"){
                ui.showError("Kullanıcı bulunamadı...");

            }
            else{
                ui.showUserInfo(response.user);
                ui.showRepoInfo(response.repo);
            }
        
        })

        .catch(err=>ui.showUserInfo(err));
    }

    ui.clearInput();
    e.preventDefault();
}
function  clearAllSearched(){
    // Tüm alanları temizleme
}
function getAllSearch(){
    //Arananları storageden alıp UI a ekleme
}
