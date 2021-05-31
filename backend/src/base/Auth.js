import jwt from 'jsonwebtoken'

export const generateToken = ({ username = '', email, password, firstName, lastName }) => {
    return jwt.sign(
        {
            username,
            email,
            password,
            firstName,
            lastName
        },
        'test',
        {
            algorithm: 'HS512'
        }
    )
}
