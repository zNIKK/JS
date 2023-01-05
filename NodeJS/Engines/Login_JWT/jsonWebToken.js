const jwt = require('jsonwebtoken');

const user = {
    id : "20",
    name : "joão",
    username: "joao@gmail.com",
    password : "1234567"
}

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIwIiwidXNlcm5hbWUiOiJqb2FvQGdtYWlsLmNvbSIsImlhdCI6MTY2NTM2NTM5OSwiZXhwIjoxNjY1Mzc1Mzk5fQ.AxSEovZZz-ADf9MaTxpl-G8300pCaWYq6YZ5qrCyZwE"

const secret = "lkjwfnwqljkkgjmq1klgwqngvpidsnvewrk,hgw4mhgpw" // = usado para verificação do token

function createToken(user) {

    const token = jwt.sign({id: user.id, username: user.username}, secret, {expiresIn: 60}) // = gerar um token que expira em 60 segundos
    
    console.log(token);
}


function testToken(token) {

    try {
        const validData = jwt.verify(token, secret) // = verificar token
        console.log(validData);
    } catch (error) {
        console.log(error);
    }    
    
}


// createToken(user);
testToken(token);