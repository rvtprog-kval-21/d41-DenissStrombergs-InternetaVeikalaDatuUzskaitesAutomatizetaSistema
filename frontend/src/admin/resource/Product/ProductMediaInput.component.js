import { ImageField, ImageInput } from 'react-admin'

export function ProductMediaInput(props) {
    return (
        <ImageInput source="media" label="Related pictures" accept="image/*" placeholder={<p>Drop your file here</p>}>
            <ImageField source="src" title="title" />
        </ImageInput>
    )
}

export default ProductMediaInput
