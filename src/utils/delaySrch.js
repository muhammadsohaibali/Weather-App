function dls(f, d) {
    let t;
    return (...args) => {
        clearTimeout(t);
        t = setTimeout(() => f(...args), d);
    };
}
export default dls;
