import './styles.scss';

const Button = ({ text, ...rest }) => {
    return (
        <button {...rest} className='button'>
            {text}
        </button>
    );
};

export default Button;
