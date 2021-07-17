import './styles.scss';

const Container = ({ center, children }) => {
    return <div className={`container ${center && 'center'}`}>{children}</div>;
};

export default Container;
