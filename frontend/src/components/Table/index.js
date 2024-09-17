import React, { useContext, useEffect, useState } from 'react';
import styles from './Table.module.scss';
import SearchContext from '../../context/Search/Context';

const Table = ({ tableData }) => {

    const [ curData, setCurData ] = useState(tableData);
    const [ isAscending, setIsAscending ] = useState([]);
    const { searchText } = useContext(SearchContext);

    useEffect(() => {
        if(searchText === "")
        {
            setCurData(prev => tableData);
            return;
        }
        // Filter the dataset based on the search text
        setCurData(prev => {
            const newData = { ...tableData };
            newData.data = newData.data.filter((val) => val[prev.keys[0]].toLowerCase().includes(searchText.toLowerCase()));
            setCurData(newData);
        });
        // eslint-disable-next-line
    }, [ searchText ]);

    const sort = (i, comparator) => {
        const newData = {...curData};
        if(isAscending[i] === 1)
            newData.data = newData.data.toSorted(comparator);
        else
            newData.data = newData.data.toSorted((a, b) => comparator(b, a));
        const temp = [...isAscending];
        temp[i] ^= true;
        setIsAscending(temp);
        setCurData(newData);
    }

    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    {
                        // curData can be null if search based filtering happens since useEffect and useState will in rendered in different order, to avoid having undefined    issues, use the null check
                        curData && curData.headers.map((x, ind) => <th key={ind} onClick={() => x.sort ? sort(ind, x.comparator) : () => {}}>{x.text}</th>)
                    }
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    curData && curData.data.map((x, ind) => {
                        return (
                            <tr key={ind}>
                                { curData.isSelectable && <td></td> }
                                <td>{x[curData.keys[0]]}</td>
                                <td>{x[curData.keys[1]]}</td>
                                <td>{x[curData.keys[2]]}</td>
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
