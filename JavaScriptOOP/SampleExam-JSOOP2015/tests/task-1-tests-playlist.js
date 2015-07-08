// Generated by CoffeeScript 1.9.3
var expect, result;

expect = require('chai').expect;
result = require('../tasks/index')();

describe('Sample exam tests', function () {
    describe('PlayList', function () {
        describe('With valid input', function () {
            it('expect getPlaylist to exist, to be a function and to take a single parameter and to enable chaining', function () {
                expect(result.getPlaylist).to.exist;
                expect(result.getPlaylist).to.be.a('function');
                expect(result.getPlaylist).to.have.length(1);
            });
            it('expect getPlaylist to return a new playlist instance, with provided name and generated id', function () {
                var name, playlist;
                name = 'Rock and roll';
                playlist = result.getPlaylist(name);

                expect(playlist).to.exist;
                expect(playlist).to.be.an('object');
                expect(playlist.name).to.equal(name);
                expect(playlist.id).to.exist;
                expect(playlist.id > 0).to.equal(true);
            });
            it('expect getPlaylist to generate different ids', function () {
                var name = 'Rock and roll',
                    playlist1 = result.getPlaylist(name),
                    playlist2 = result.getPlaylist(name);

                expect(playlist1).to.exist;
                expect(playlist2).to.exist;
                expect(playlist1.id).not.to.equal(playlist2.id);
            });

            it('expect playlist.addPlayable() to exists, to be a function and to take a single parameter and to enable chaining', function () {
                var name = 'Rock and roll',
                    playlist = result.getPlaylist(name),
                    playable = {id: 1, name: 'Banana Rock', author: 'Wombles'};

                expect(playlist.addPlayable).to.exist;
                expect(playlist.addPlayable).to.be.a('function');
                expect(playlist.addPlayable).to.have.length(1);

                returnedPlaylist = playlist.addPlayable(playable);
                return expect(returnedPlaylist).to.equal(playlist);
            });
            it('expect playlist.getPlayableById() to exists, to be a function and to take a single parameter', function () {
                var name, playlist;
                name = 'Rock and roll';
                playlist = result.getPlaylist(name);

                expect(playlist.getPlayableById).to.exist;
                expect(playlist.getPlayableById).to.be.a('function');
                expect(playlist.getPlayableById).to.have.length(1);
            });
            it('expect playlist.addPlayable() to add the playable and playlist.getPlayableById() to retrieve the same playable', function () {
                var returnedPlayable,
                    name = 'Rock and roll',
                    playlist = result.getPlaylist(name),
                    playable = {id: 1, name: 'Banana Rock', author: 'Wombles'};

                returnedPlayable = playlist.addPlayable(playable).getPlayableById(1);
                expect(returnedPlayable.id).to.equal(playable.id);
                expect(returnedPlayable.name).to.equal(playable.name);
                expect(returnedPlayable.author).to.equal(playable.author);
            });

            it('expect playlist.removePlayable() to exists, to be a function and to take a single parameter', function () {
                var name = 'Rock and roll',
                    playlist = result.getPlaylist(name);

                expect(playlist.removePlayable).to.exist;
                expect(playlist.removePlayable).to.be.a('function');
                expect(playlist.removePlayable).to.have.length(1);
            });
            it('expect playlist.removePlayable() remove the playable with that id', function () {
                var gotten,
                    name = 'Rock and roll',
                    plName = 'Banana Rock',
                    plAuthor = 'Wombles',
                    playlist = result.getPlaylist(name),
                    playable = {id: 1, name: plName, author: plAuthor};

                playlist.addPlayable(playable);
                playlist.removePlayable(playable);
                gotten = playlist.getPlayableById(1);
                expect(gotten).to.be.null;

                playlist.addPlayable(playable);
                playlist.removePlayable(1);
                gotten = playlist.getPlayableById(1);

                expect(gotten).to.be.null;
                expect(function() { playlist.removePlayable(10); }).to.throw();
            });

            it('expect playlist.listPlayables() to exists, to be a function and to take 2 parameters', function () {
                var name, playlist;
                name = 'Rock and roll';
                playlist = result.getPlaylist(name);

                expect(playlist.listPlayables).to.exist;
                expect(playlist.listPlayables).to.be.a('function');
                expect(playlist.listPlayables).to.have.length(2);
            });
            it('expect playlist.listPlayables() to return correct number of playables and to throw errors when invalid data is passed', function () {
                var i, name, playlist;
                name = 'Hard Rock';
                playlist = result.getPlaylist(name);

                for (i = 0; i < 35; i += 1) {
                    playlist.addPlayable({id: (i + 1), name: 'Rock' + (9 - (i % 10))});
                }

                expect(playlist.listPlayables(2, 10).length).to.equal(10);
                expect(playlist.listPlayables(3, 10).length).to.equal(5);

                expect(function() { playlist.listPlayables(-1, 10) }).to.throw();
                expect(function() { playlist.listPlayables(5, 10) }).to.throw();
                expect(function() { playlist.listPlayables(1, -1) }).to.throw();
            });
        });
    });
});

//# sourceMappingURL=task-1-tests.js.map
