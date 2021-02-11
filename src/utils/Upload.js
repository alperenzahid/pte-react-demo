

async function Upload(blob) {
    const formData = new FormData();
    // let user_id = -1;
    // if("user_id" in localStorage){
    //     user_id = parseInt(localStorage.getItem("user_id"));
    // }else{
    //     user_id = Math.floor(Math.random() * 1000).toString();
    //     localStorage.setItem("user_id",user_id);
    // }
    formData.append("name",  localStorage.getItem("user_id")+ "-" + localStorage.getItem("current"));
    formData.append("file", blob);
    try {
        const response = await fetch('/upload.php', {
            method: 'POST',
            body: formData
        });
        return response.json();
    } catch (e) {
        console.error('Upload Error:', e.message);
        return Promise.reject('upload error');
    }
}

export default Upload
