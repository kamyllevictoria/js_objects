//requisição de api que faz login de um usuario
const loginUser = (email, password, onSuccess, onError) => {
    setTimeout(() => {
        const error = false;
        if (error){
            return Error(new Error('error in login'))
        }

        console.log('user logged!')

        onSuccess({email});
    },1500)
}

const getUserVideos = (email, callback) => {
    setTimeout(() => {
        callback(['video1', 'video2', 'video3'])
    },2000)
}


const getVideosDetails = (video, callback) => {
    setTimeout(() => {
        callback({tittle: 'cat videos'})
    },2000)
}

const user = loginUser(
    'kamylle@gmail.com', '123456', 
    (user) => {
        console.log({user})
        getUserVideos(user.email, (videos) => {
            console.log({videos})
            getVideosDetails(videos[0], (videoDetails)=>{
                console.log({videoDetails})
            })
        })
        //console.log({user}) 
    },
    (error) => {
        console.log({error})
    }
) 
