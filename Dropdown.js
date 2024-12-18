import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dropdown = () => {
    const [options, setOptions] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');

    // Fetch dropdown options from the backend
    useEffect(() => {
        const fetchOptions = async () => {
            try {
                const response = await axios.get('http://localhost:5000/dropdown-options');
                setOptions(response.data);
            } catch (error) {
                console.error('Error fetching dropdown options:', error);
            }
        };

        fetchOptions();
    }, []);

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`You selected: ${selectedOption}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="dropdown">Choose an option:</label>
            <select
                id="dropdown"
                value={selectedOption}
                onChange={handleChange}
                required
            >
                <option value="" disabled>Select an option</option>
                {options.map((option) => (
                    <option key={option.id} value={option.value}>
                        {option.value}
                    </option>
                ))}
            </select>
            <button type="submit">Submit</button>
        </form>
    );
};

export default Dropdown;
