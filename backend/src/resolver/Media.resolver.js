import fs from 'fs'
import CONFIG from '../base/Config';

export const mediaResolver = {
    Mutation: {
        uploadMedia: async function(_, data, { models, rootDir }) {
            try {
                const base64Image = data.data.split(';base64,').pop()

                fs.writeFile(rootDir + '\\public\\images\\' + data.name, base64Image, { encoding: 'base64' }, function(error) {
                    console.error(error);
                });

                return `${ CONFIG.API }/images/${ data.name }`
            } catch (error) {
                console.error(error)

                return null
            }
        }
    }
}

export default mediaResolver
