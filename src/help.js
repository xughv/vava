export function combineTriads(...triads) {

  let state = {}, reducers = {}, effects = {};

  triads.forEach(triad => {
    state = {
      ...state,
      ...(triad.state || {}),
    }
    reducers = {
      ...reducers,
      ...(triad.reducers || {}),
    }
    effects = {
      ...effects,
      ...(effects.state || {}),
    }
  });

  return { state, reducers, effects };
}

export const awaitable = dispatcher => payload => {
  return new Promise((resolve, reject) => {
    dispatcher({
      data: payload,
      '@@done': { resolve, reject },
    });
  });
}
