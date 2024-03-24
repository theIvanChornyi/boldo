import * as css from '../header.styles';

interface IProps {
  toogleBurger: () => void;
  isOpen: boolean;
}

const BurgerButton: React.FC<IProps> = ({ toogleBurger, isOpen }) => {
  return (
    <button className={css.burgerButton(isOpen)} onClick={toogleBurger}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export default BurgerButton;
