function extractParams(url){
    const urlObj = new URL(url);
    const params = new URLSearchParams(urlObj.search)
    const paramsObject = {};
    params.forEach((value, key) => {
        paramsObject[key] = value;
    });
    return paramsObject
}

const params = extractParams(window.location.href)

const yourName = document.querySelector('#name')
const type = document.querySelector('#type')
const tel = document.querySelector('#tel')
const email = document.querySelector('#email')
const website = document.querySelector('#website')
const color = document.querySelector('#color')
const photo = document.querySelector('#photo')
const wallpapers = document.querySelectorAll('.wallpaper')



yourName.innerText = params.name
type.innerText = params.type
tel.innerText = `+${params.tel}`
email.innerText = params.email
color.classList.add(`bg-${params.color}-700`)
photo.src = params.photo


if(params.website === undefined){
    const itemEmail = document.querySelector('#item-website')
    itemEmail.remove()
} else {
    website.innerText = params.website
    document.querySelector('#website-link').href = `http://${params.website}`
}

if(params.linkedin === undefined){
    const linkedin = document.querySelector('#linkedin')
    linkedin.remove()
} else {
    linkedin.href = params.linkedin
}

if(params.facebook === undefined){
    const facebook = document.querySelector('#facebook')
    facebook.remove()
} else {
    facebook.href = params.facebook
}

if(params.github === undefined){
    const github = document.querySelector('#github')
    github.remove()
} else {
    github.href = params.github
}

wallpapers.forEach((el) => {
    el.style.backgroundImage = `url('${params.bg}')`;
    el.style.backgroundSize = 'cover';
    el.style.backgroundRepeat = 'no-repeat';
});

history.replaceState(null, '', `${params.name}`);
document.title = `${params.name}`

// http://127.0.0.1:5500/build/?name=test&color=lime&type=test&tel=39%20348%2012%2006%20604&email=h4shell@gmail.com&photo=https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.pn1WcM8XtGEqWC26R6uOOQHaHa%26pid%3DApi&f=1&ipt=b621860fa04adef3cd8288221193ef015e95cfd38be0e1e49cb037bd9f48d0c5&ipo=images&bg=https://images.unsplash.com/photo-1484557052118-f32bd25b45b5?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D