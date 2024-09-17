import React, { useContext, useEffect, useState } from 'react';
import styles from './Table.module.scss';
import data from '../../data/appraisals.json';
import SearchContext from '../../context/Search/Context';

const Table = () => {

    const [ curData, setCurData ] = useState(data);
    const [ isAscending, setIsAscending ] = useState([0, 0, 0, 0]);
    const { searchText } = useContext(SearchContext);

    useEffect(() => {
        if(searchText === "")
        {
            setCurData(prev => data);
            return;
        }
        setCurData(prev => prev.filter((val) => val.facultyName.toLowerCase().includes(searchText.toLowerCase())));
    }, [ searchText ]);

    const sort = (i, comparator) => {
        if(isAscending[i] === 1)
            setCurData(curData.toSorted(comparator));
        else
            setCurData(curData.toSorted((a, b) => comparator(b, a)));
        const temp = [...isAscending];
        temp[i] ^= true;
        setIsAscending(temp);
    }

    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th onClick={() => sort(0, (a, b) => a.facultyName.localeCompare(b.facultyName))}>Faculty Name</th>
                    <th onClick={() => sort(0, (a, b) => a.submissionDate.localeCompare(b.submissionDate))}>Submission Date</th>
                    <th onClick={() => sort(0, (a, b) => a.status.localeCompare(b.status))}>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    curData.map((x) => {
                        return (
                            <tr key={x.lastUpdated}>
                                <td>{x.facultyName}</td>
                                <td>{new Date(x.submissionDate).toDateString()}</td>
                                <td>{x.status}</td>
                                <td>...</td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
    )
}

export default Table;
