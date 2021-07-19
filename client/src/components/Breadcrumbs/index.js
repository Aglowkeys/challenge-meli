import './styles.scss';

const Breadcrumbs = ({ breadcrumbs }) => {
    return (
        <ul className='breadcrumbs'>
            {breadcrumbs.map((category) => (
                <li key={category}>{category}</li>
            ))}
        </ul>
    );
};

export default Breadcrumbs;
