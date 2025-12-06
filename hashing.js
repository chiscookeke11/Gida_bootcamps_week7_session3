import bcrypt from "bcrypt"

const password = "chinedu123"
const hashedPassword = await bcrypt.hash(password, 10);

console.log("Hashed:", hashedPassword)


const isMatch = await bcrypt.compare(password, hashedPassword);
if (isMatch) {
    console.log("Login Successful!")
}
else {
    console.log("Invalid password!")
}