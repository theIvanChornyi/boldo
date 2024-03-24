import { IUserFeedback } from '../feedback.types';
import * as css from '../feedback.styles';
interface IProps extends IUserFeedback {}

interface IProps extends IUserFeedback {}

const Slide: React.FC<IProps> = ({ avatar, fullName, role, text, company }) => {
  return (
    <article className={css.slide}>
      <p className={css.slideText}>{text}</p>
      <footer className={css.slideFooter}>
        <div className={css.slideThumb}>
          <img
            className={css.slideAvatar}
            src={avatar}
            alt={`${fullName} avatar`}
          />
        </div>
        <p className={css.slideUserInfo}>
          <span className={css.slideUserName}>{fullName}</span>
          <span>{`${role} @ ${company}`}</span>
        </p>
      </footer>
    </article>
  );
};

export default Slide;
