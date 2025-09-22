const infoFunc = () => {
    let information = document.getElementsByTagName("p")(0).innerText;
    console.log('information',information); 
}

const generator = async () => {
    const API = 'https://official-joke-api.appspot.com/random_joke';

    const jokeDiv = document.querySelectorAll("#joke");  //remaining!!! need to complete at home

    try {
        let res = await fetch(API);
        let data = await res.json();
        console.log('data',data);
        
        let id = document.createElement("h3");
        let setup = document.createElement("h5");
        let punchline = document.createElement("h4");
        let type = document.createElement("p");

        id.innerText = data.id;
        setup.innerText = data.setup;
        punchline.innerText = data.punchline;
        type.innerText = data.type;

        jokeDiv.append(id,setup,punchline,type);

    } 
    catch (error) {
        console.log('error',error);
    }


}


















