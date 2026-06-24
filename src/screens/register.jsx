import axios from "axios"

const Register = () => {
    const NewUser = async () => {
        const form = new FormData();
        form.append('name', name);
        form.append('email', email);
        form.append('password', password);
        form.append('avatar', avatar);
        const data = await axios({
            method: 'post',
            url:'http://api.com/api/client',
            data: form,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
    return (
        <div>
            <h1>Register</h1>
            <input type="file" onChange={(e) => setAvatar(e.target.files[0])} />
        </div>
    )
}