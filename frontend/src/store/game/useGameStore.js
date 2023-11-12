import { useCardsStore, useHistoryStore, usePlayersStore } from '@store';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useGameStore = defineStore('game', () => {
    const historyStore = useHistoryStore();
    const playersStore = usePlayersStore();
    const cardsStore = useCardsStore();

    const game = ref(/** @type {import('@/main').Game} */ (null));

    const selectedDifficulty = ref(/** @type {import('@/main').Difficulty} */ ('easy'));

    /**
     * @param {string[]} playerNameList
     * @param {import('@/main').Difficulty} difficulty
     * @param {import('@/main').Quantity} quantity
     *  */
    function initGame(playerNameList, difficulty, quantity) {
        for (const playerName of playerNameList) {
            playersStore.createPlayer(playerName);
        }

        selectedDifficulty.value = difficulty;

        cardsStore.cardsQuantity = quantity;
    }

    function createGame() {
        game.value = {
            difficulty: selectedDifficulty.value,
            history: historyStore.history,
            players: playersStore.players
        };
    }

    return { game, initGame, createGame };
});