const Login = async (email, password) => {
    try {
        const loginResult = await new Promise((resolve, reject) => {
            if(email == 'curvelothomas08@gmail.com' && password == 'password123!') resolve("inicio de sesíon correcto");
            else resolve(false);
        })
        return loginResult;
    } catch (error) {
        console.error(error);
    }
};

const SendEmail = async (email) => {
    try {
        const result = await new Promise((resolve) => {
            if(email == 'curvelothomas08@gmail.com') resolve('Se envió el correo correctamente');
            else resolve(false);
        })
        return result;
    } catch (error) {
        console.error(error);
    }
}


export { Login, SendEmail };