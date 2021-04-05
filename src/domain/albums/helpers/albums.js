export const factoryAlbum = ({ title = '', url = '', image = '', thumbnailUrl = '' } = {}) => {
  return {
    title,
    url,
    image: thumbnailUrl,
    thumbnailUrl
  }
}
