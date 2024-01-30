import { createEvent, createEffect, createStore, sample } from 'effector';

const API_BASE_URL = 'https://myfailemtions.npkn.net/b944ff/';

export const positionClicked = createEvent<string>();
export const positionsUpdated = createEvent<string[]>();

export const fetchPositionsFx = createEffect(async () => {
  const response = await fetch(`${API_BASE_URL}`);
 return await response.json();
});

export const updatePositionsFx = createEffect(async (activePositions: string[]) => {
  const response = await fetch(API_BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(activePositions),
  });
  return await response.json();
});

export const $positions = createStore<string[]>([])
  .on(fetchPositionsFx.doneData, (_, result) => result)
  .on(updatePositionsFx.doneData, (_, result) => result)
  .on(positionClicked, (state, position) => {
    const newState = state.includes(position) ? state.filter((p) => p !== position) : [...state, position];
    return newState;
  });

sample({
  source: $positions, 
  clock: positionClicked,
  target: updatePositionsFx,
});

$positions.on(updatePositionsFx.doneData, (_, newPositions) => newPositions);

updatePositionsFx.doneData.watch((positions) => {
  positionsUpdated(positions);
});