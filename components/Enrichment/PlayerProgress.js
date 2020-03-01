export default async function CalcProgress(players) {

    const promises = players.map(calcProgress);
    const resp = await Promise.all(promises).then(r => { return r });
    return resp;
}

async function calcProgress(player) {
    let promises = player.cards.map(processCard);
    let progress = await Promise.all(promises).then(r => { return r });

    const arrSum = array =>
    array.reduce(
        (sum, num) => sum + (Array.isArray(num) ? arrSum(num) : num * 1),
        0
    );
    let sumProgress = arrSum(progress);
    let lengthProgress = progress.length;
    player.progressLevel = (sumProgress / lengthProgress).toFixed(2);

    return player;
}

async function processCard(card) {
    let progress = [];
    let card_level;
    switch (card.maxLevel) {
        case 5:
            card_level = card.level + 8;
            break;
        case 8:
            card_level = card.level + 5;
            break;
        case 11:
            card_level = card.level + 2;
            break;
        case 13:
            card_level = card.level;
            break;
    }

    let card_index;
    if (card_level < 9) {
        card_index = 0;
    }
    else if (card_level == 9) {
        card_index = 0.25;
    }
    else if (card_level == 10) {
        card_index = 0.5;
    }
    else if (card_level == 11) {
        card_index = 0.75;
    }
    else if (card_level >= 12) {
        card_index = 1;
    }

    progress.push(card_index);

    return progress;
}