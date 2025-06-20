const {
  numPointsScored,
  shoeSize,
  teamColors,
  teamNames,
  playerNumbers,
  playerStats,
  bigShoeRebounds,
  mostPointsScored,
  winningTeam,
  playerWithLongestName,
  doesLongNameStealATon
} = require('../src/index');

const { expect } = require('chai');

describe('Basketball Stats Functions', () => {
  it('returns correct points for Ben Gordon', () => {
    expect(numPointsScored("Ben Gordon")).to.equal(33);
  });

  it('returns correct shoe size for Mason Plumlee', () => {
    expect(shoeSize("Mason Plumlee")).to.equal(19);
  });

  it('returns correct team colors for Brooklyn Nets', () => {
    expect(teamColors("Brooklyn Nets")).to.deep.equal(["Black", "White"]);
  });

  it('returns both team names', () => {
    expect(teamNames()).to.deep.equal(["Brooklyn Nets", "Charlotte Hornets"]);
  });

  it('returns correct player numbers for Charlotte Hornets', () => {
    expect(playerNumbers("Charlotte Hornets")).to.deep.equal([4, 0, 2, 8, 33]);
  });

  it('returns correct stats for Alan Anderson', () => {
    expect(playerStats("Alan Anderson")).to.deep.equal({
      number: 0,
      shoe: 16,
      points: 22,
      rebounds: 12,
      assists: 12,
      steals: 3,
      blocks: 1,
      slamDunks: 1
    });
  });

  it('returns correct rebounds for player with biggest shoe', () => {
    expect(bigShoeRebounds()).to.equal(12);
  });

  it('returns player with most points', () => {
    expect(mostPointsScored()).to.equal("Ben Gordon");
  });

  it('returns the winning team', () => {
    expect(winningTeam()).to.equal("Brooklyn Nets");
  });

  it('returns player with longest name', () => {
    expect(playerWithLongestName()).to.equal("Brendan Haywood");
  });

  it('returns true if longest name has most steals', () => {
    expect(doesLongNameStealATon()).to.equal(true);
  });
});