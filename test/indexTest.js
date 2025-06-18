// ...existing gameObject function...

function numPointsScored(playerName) {
  const game = gameObject();
  for (let teamKey in game) {
    const players = game[teamKey].players;
    if (players[playerName]) {
      return players[playerName].points;
    }
  }
  return null;
}

function shoeSize(playerName) {
  const game = gameObject();
  for (let teamKey in game) {
    const players = game[teamKey].players;
    if (players[playerName]) {
      return players[playerName].shoe;
    }
  }
  return null;
}

function teamColors(teamName) {
  const game = gameObject();
  for (let teamKey in game) {
    if (game[teamKey].teamName === teamName) {
      return game[teamKey].colors;
    }
  }
  return null;
}

function teamNames() {
  const game = gameObject();
  return [game.home.teamName, game.away.teamName];
}

function playerNumbers(teamName) {
  const game = gameObject();
  for (let teamKey in game) {
    if (game[teamKey].teamName === teamName) {
      return Object.values(game[teamKey].players).map(player => player.number);
    }
  }
  return [];
}

function playerStats(playerName) {
  const game = gameObject();
  for (let teamKey in game) {
    const players = game[teamKey].players;
    if (players[playerName]) {
      return players[playerName];
    }
  }
  return null;
}

function bigShoeRebounds() {
  const game = gameObject();
  let maxShoe = 0;
  let rebounds = 0;
  for (let teamKey in game) {
    const players = game[teamKey].players;
    for (let player in players) {
      if (players[player].shoe > maxShoe) {
        maxShoe = players[player].shoe;
        rebounds = players[player].rebounds;
      }
    }
  }
  return rebounds;
}

// Bonus functions

function mostPointsScored() {
  const game = gameObject();
  let maxPoints = 0;
  let topPlayer = "";
  for (let teamKey in game) {
    const players = game[teamKey].players;
    for (let player in players) {
      if (players[player].points > maxPoints) {
        maxPoints = players[player].points;
        topPlayer = player;
      }
    }
  }
  return topPlayer;
}

function winningTeam() {
  const game = gameObject();
  let homePoints = 0;
  let awayPoints = 0;
  for (let player in game.home.players) {
    homePoints += game.home.players[player].points;
  }
  for (let player in game.away.players) {
    awayPoints += game.away.players[player].points;
  }
  return homePoints > awayPoints ? game.home.teamName : game.away.teamName;
}

function playerWithLongestName() {
  const game = gameObject();
  let longest = "";
  for (let teamKey in game) {
    const players = game[teamKey].players;
    for (let player in players) {
      if (player.length > longest.length) {
        longest = player;
      }
    }
  }
  return longest;
}

function doesLongNameStealATon() {
  const game = gameObject();
  const longestName = playerWithLongestName();
  let maxSteals = 0;
  let longNameSteals = 0;
  for (let teamKey in game) {
    const players = game[teamKey].players;
    for (let player in players) {
      if (players[player].steals > maxSteals) {
        maxSteals = players[player].steals;
      }
      if (player === longestName) {
        longNameSteals = players[player].steals;
      }
    }
  }
  return longNameSteals === maxSteals;
}

// Example usage:
console.log(numPointsScored("Ben Gordon")); // 33
console.log(shoeSize("Mason Plumlee")); // 19
console.log(teamColors("Brooklyn Nets")); // ["Black", "White"]
console.log(teamNames()); // ["Brooklyn Nets", "Charlotte Hornets"]
console.log(playerNumbers("Charlotte Hornets")); // [4, 0, 2, 8, 33]
console.log(playerStats("Alan Anderson"));
console.log(bigShoeRebounds());
console.log(mostPointsScored());
console.log(winningTeam());
console.log(playerWithLongestName());
console.log(doesLongNameStealATon());