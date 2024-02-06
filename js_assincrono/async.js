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




const displayUser = async() => {
    try{
        const user = await loginUser('kamylle@gmail.com', '123456')

    const details = await getVideosDetails(user.email)
    const videos = await getUserVideos(user.email)
    console.log({details})
    console.log([videos])
    } catch(error){
        console.log({error});
    }
} 

//o await literalmente espera o loginuser captar os dados para poder exibi-os, ou seja, ele espera a promise para depois continuar as proximas linhas de codigo


//e como pegamos o erro de uma promise? colocamos o codigo em um try e depois um catch, assim como nas promises e, em seguida informamos um error para ser exibido, caso esteja habilidado como true


displayUser()
