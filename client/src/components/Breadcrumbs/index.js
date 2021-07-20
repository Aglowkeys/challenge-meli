import './styles.scss';

const Breadcrumbs = ({ breadcrumbs }) => {
    return (
        <ul className='breadcrumbs'>
            {breadcrumbs.map((category) => (
                <li key={category}>
                    <a href='#0'>{category}</a>
                </li>
            ))}
        </ul>
    );
};

export default Breadcrumbs;
