import style from './Container.module.css';
import PropTypes from 'prop-types';

export const Container = ({ children }) => (
  <div className={style.container}>{children}</div>
);

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};
