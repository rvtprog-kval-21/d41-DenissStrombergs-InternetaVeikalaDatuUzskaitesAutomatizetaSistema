import jwt from 'jsonwebtoken'

export const generateToken = ({ username = '', email, password, firstName, lastName }, role = '') => {
    return role + '_' + jwt.sign(
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
