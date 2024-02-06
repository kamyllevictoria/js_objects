
const loginUser = (email, password) =>{
    return new Promise((resolve,rejected) =>{
        const error = false
        if(error){
            rejected(new Error('error in login'))
        } else{
            console.log('user logged!')
            resolve({email})
        }
    })
}

const getUserVideos = (email) => {
    return new Promise((resolve, rejected) =>{
        setTimeout(() => {
            console.log('getUserVideos on')
            resolve(['video1', 'video2', 'video3'])
        },2000)
    })
    
}

const getVideosDetails = (videos) => {
    return new Promise((resolve, rejected) =>{
        setTimeout(() => {
            console.log('getVideosDetails on')
            resolve({tittle: 'cat videos'})
        },2000)
    })
}

//"faça o login do usuario e entao faça, depois"
loginUser('kamylle@gmail.com', '123456')
.then((user) =>{
    return getUserVideos(user.email) 
})
.then((videos) =>{
    getVideosDetails(videos[0])
})
.catch((error)=>{
    console.log({error})
})


const yt = new Promise(resolve =>{
    setTimeout(()=>{
        resolve('youtube videos')
    }, 2000)
})

const fb = new Promise(resolve =>{
    setTimeout(()=>{
        resolve('posts from facebook')
    },2500)
})


//execução de todas as promises ao mesmo tempo
Promise.all([yt,fb]).then(result => {
    console.log({result})
})