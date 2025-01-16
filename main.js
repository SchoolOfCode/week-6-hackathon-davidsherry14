export function whoIsBanished(votes) {
    //Your answer here
    let maxVotes = 0;
    let banishedPlayer = null;

    for (const player of votes) {
        if (player.votes > maxVotes) {
            maxVotes = player.votes;
            banishedPlayer = player.name;
        }
    }

    return banishedPlayer;
}

