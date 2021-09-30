const flip = (item) => {
    item.completed = !(item.complted);
    return item;
}
export default flip;