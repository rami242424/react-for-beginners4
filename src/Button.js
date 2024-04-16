import PropTypes from "prop-types";
import styles from "./Button.module.css";

// 동일한 className을 사용하더라도 html에는 랜덤한 class이름으로 적용된다.

function Button({text}){
    return (
        <button className={styles.btn}>{text}</button>
    );
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Button;