let getId =x=> document.getElementById(x);
getId("search").addEventListener('click',gettingData);
function gettingData(){
    getId("movieContainer").innerHTML = "";
    let movie = getId("movieName").value;
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `http://www.omdbapi.com/?s=${movie}&apikey=29bf3d`, true);
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                let arr = JSON.parse(xhr.response).Search;
                for(let i=0; i<arr.length; i++){
                    let movieImg = arr[i].Poster;
                    let movieName = arr[i].Title;
                    let movieType = arr[i].Type;
                    let movieYear = arr[i].Year;
                    let movieCard = document.createElement('div');
                    movieCard.innerHTML = `<img src="${movieImg}"><h3>${movieName}</h3><p>${movieType}</p>
                    <p>${movieYear}</p><a href="#">more details</a>`;
                    let parent = getId("movieContainer");
                     parent.appendChild(movieCard);

                }
            }
        }
    }
    xhr.send();
}

