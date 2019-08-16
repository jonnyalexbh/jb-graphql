const { query } = require('../server.spec');
const { getAlbum } = require('./graphql');
const albumsFactory = require('../factories/album');
const albumMocks = require('../mocks/albums');

describe('albums', () => {
  describe('queries', () => {
    it('should get an album axios', () => {
      const id = 1;
      albumMocks.getAlbum();
      return query(getAlbum(id)).then(response => {
        expect(response.data).toHaveProperty('album', expect.any(Object));
        const { album } = response.data;
        expect(album.id).toEqual(albumsFactory.oneAlbum.id.toString());
        expect(album.title).toEqual(albumsFactory.oneAlbum.title);
        expect(album.artist).toEqual(albumsFactory.oneAlbum.userId);
        expect(album).toHaveProperty('photos', expect.any(Array));
      });
    });
  });
});
