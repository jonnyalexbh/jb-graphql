const { allAlbums, albumById, photosByAlbumId } = require('../../services/album'),
  { createPurchase } = require('../../services/purchase'),
  { changeUserIdByArtist } = require('../../helpers');

exports.getAlbum = async (_, params) => {
  const album = await albumById(params.id);
  return changeUserIdByArtist(album);
};

exports.getAlbums = async (_, params) => {
  const tempAlbums = await allAlbums(params);
  return tempAlbums.map(album => changeUserIdByArtist(album));
};

exports.buyAlbum = async (_, params, context) => {
  const { user } = context;
  // if (!user) {
  //   throw error.unauthorizedError('unauthorized token');
  // }
  const album = await albumById(params.albumId);
  await createPurchase({ albumId: album.id, userId: user.id });
  return album;
};

exports.getPhotos = root => {
  const { id } = root;
  return photosByAlbumId(id);
};

exports.typeResolvers = {
  photos: exports.getPhotos
};
