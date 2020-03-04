const nextTick = (() => {
    const noop = () => {};  // literally
    const nextTickPromise = () => Promise.resolve().then(noop);
    const rfab = Reflect.apply.bind;  // (thisArg, fn, thisArg, [...args])
    const nextTick = (fn, ...args) => (
        fn !== undefined
        ? Promise.resolve(args).then(rfab(null, fn, null))
        : nextTickPromise(),
        undefined
    );
    nestTick.ntp = nextTickPromise;
    return nextTick;
})();