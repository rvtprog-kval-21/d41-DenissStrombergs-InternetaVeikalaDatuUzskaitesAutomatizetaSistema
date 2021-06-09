import jwt from 'jsonwebtoken'

export const generateToken = ({ username = '', email, firstName, lastName }) => {
    return jwt.sign(
        {
            username,
            email,
            firstName,
            lastName
        },
        'test',
        {
            algorithm: 'HS512'
        }
    )
}
