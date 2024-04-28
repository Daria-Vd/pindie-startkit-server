const createRating = (obj, weight) => {
    return (
        obj.gameplay * weight.gameplay +
        obj.design * weight.design +
        obj.idea * weight.idea
    );
};

const updateRating = (array, id, rating) => {
    const gameIndex = array.findIndex((game) => game.id === id);
    array[gameIndex].rating += rating;
    return array;
};

module.exports = { createRating, updateRating };
