import axios from 'axios';

const fetchImages = async(keyWord, page) => {
    const result = await axios(`https://pixabay.com/api//?q=${keyWord}&page=${page}&key=31851558-820ac2f97dae79a9951146e00&image_type=photo&orientation=horizontal&per_page=12`)
    return result.data;
}

export default fetchImages;