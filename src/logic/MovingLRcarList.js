function MovingLRcarList(side, carShow, setCarShow) {
  if (side === `L` && carShow === 0) return setCarShow(3);
  if (side === `L` && carShow > 0) return setCarShow(carShow - 1);
  if (side === `R` && carShow === 3) return setCarShow(0);
  if (side === `R` && carShow < 3) return setCarShow(carShow + 1);
}

export default MovingLRcarList;
