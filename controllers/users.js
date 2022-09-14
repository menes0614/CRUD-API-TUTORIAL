import { v4 as uuidv4 } from 'uuid';

let users = [];

export const getUser = (req,res)=> {
    res.send(users);
}

export const createUser = (req,res)=>{
    const user = req.body;

    users.push({ ...user, id: uuidv4()});


    res.send(`${user.firstName} isimli kullanıcı veritabanına eklendi!`)
}

export const findUser = (req,res)=>{
    const { id } = req.params;

    const foundUser = users.find((user)=> user.id == id);

    res.send(foundUser);
}

export const deleteUser = (req,res)=>{

    const { id } = req.params;

    // user.id ile girilen id eşit değilse elemanları users dizisine atayacak yani eşit olanı almıcak silmiş olacak
    users = users.filter((user) => user.id !== id);

    res.send(`${id}'li kullanıcı veritabanından silindi.`)

}

export const updateUser = (req,res)=>{

    const { id } = req.params;
    const { firstName, lastName, age } = req.body;

    const user = users.find((user) => user.id == id);

    if(firstName) user.firstName = firstName;
    if(lastName) user.lastName = lastName;
    if(age) user.age = age;

    res.send(`${id}'li kullanıcı veritabanında güncellendi.`)

}
