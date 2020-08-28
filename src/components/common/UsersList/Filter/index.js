import React, { useEffect, useState } from 'react';

const Filter = ({ filters, onFilterChange }) => {
    const [values, setValues] = useState({});

    useEffect(() => {
        onFilterChange(values);
    }, [values]);

    const handleChange = field => event => {
        setValues({
            ...values,
            [field]: event.target.value
        });
    };

    return (
        <div className="d-flex">
            {filters.map(filter => {
                return (
                    <div className="form-group" key={filter.field}>
                        <label>{filter.label}</label>
                        <input className="m-2" onChange={handleChange(filter.field)}/>
                    </div>
                );
            })}
        </div>
    );
};

export default Filter;
