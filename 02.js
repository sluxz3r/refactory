const axios = require('axios')
const url = 'https://jsonplaceholder.typicode.com'

const post = async () => {
    await axios.get(`${url}/posts`)
        .then((res) => {
            console.log(res)
            return res
        })
        .catch((err) => {
            console.log(err);
            return err
        })
}

// console.log(post());

const users = async () => {
    await axios.get(`${url}/users`)
        .then((res) => {
            console.log(res)
            return res
        })
        .catch((err) => {
            console.log(err);
            return err
        })
}
// console.log(users());

const allData =  () => {
    let dataPost = post()
    let dataUser = users()
    let allData =[]
    
    dataPost.map((item) => {
        data = item
        let user = dataUser.find((items) => {
            return item.id = items.id
        })
        data.user = user
        allData.push(data)
    })
}



