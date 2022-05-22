/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizduojama <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';




const fetchShowUsers = async (login, avatar_url) => {
    const response = await fetch(ENDPOINT)
    const usersList = await response.json();

    addUsersList(usersList);
}


function addUsersList(usersList) {
const userListContainer = document.getElementById('output');

usersList.forEach((user) => {
    const userId = document.createElement('div');
    userId.innerText = user.login;
    
    const userAvatar = document.createElement('img');
    userAvatar.src = user.avatar_url;
    userAvatar.style.width = '8rem'
    userAvatar.style.height = 'auto'
    userAvatar.style.margin = '1rem'


    const userCard = document.createElement('div');
    userCard.append(userAvatar, userId);
    userListContainer.append(userCard)
})

}

document.getElementById('btn').addEventListener('click', () => {
 
    document.getElementById('message').innerText= '';
    fetchShowUsers();
})
