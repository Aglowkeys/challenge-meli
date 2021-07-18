const Breadcrumbs = ({ breadcrumbs }) => {
    return (
        <ul>
            {breadcrumbs.map((category) => (
                <li>{category}</li>
            ))}
        </ul>
    );
};

export default Breadcrumbs;
