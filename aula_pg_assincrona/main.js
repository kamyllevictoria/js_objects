const log = document.querySelector('.event-log');
const reload = document.querySelector('#reload');


xhr.addEventListener('click', () =>{
    log.textContent = '';
    const xhr = new XMLHttpRequest()

    xhr.addEventListener('loadend', () =>{
        log.textContent = `${log.textContent}Completed with status: ${xhr.status}`;
    })

    xhr.open(
        "GET",
        "https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json",
    )

    xhr.send()
    log.textContent = `${log.textContent}Initialized solicitation XHR\n`

})

reload.addEventListener('click', () => {
    log.textContent = ''
    document.location.reload()
})