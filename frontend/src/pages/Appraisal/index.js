import React, { useContext } from 'react';
import SearchContext from '../../context/Search/Context';
import appraisalData from '../../data/appraisals.json';
import { dummy, toDateString } from '../../utils/Converters';
import SearchBar from '../../components/Search Bar';
import Welcome from '../../components/shared/Welcome';
import Table from '../../components/Table';
import styles from './Appraisal.module.scss';
import UserContext from '../../context/User/Context';

const Appraisal = () => {

    const { searchText, setSearchText } = useContext(SearchContext);
    const { user, getUserAppraisals } = useContext(UserContext);

    const adminKeys = ["facultyName", "submissionDate", "status"];
    const nonAdminKeys = ["submissionDate", "status", "lastUpdated"];

    const tableData = {
        headers: [
            {
                text: "Faculty Name",
                sort: true,
                comparator: (a, b) => a.facultyName.localeCompare(b.facultyName)
            },
            {
                text: "Submission Date",
                sort: true,
                comparator: (a, b) => a.submissionDate.localeCompare(b.submissionDate)
            },
            {
                text: "Status",
                sort: true,
                comparator: (a, b) => a.status.localeCompare(b.status)
            },
            {
                text: "Last Updated",
                sort: true,
                comparator: (a, b) => a.lastUpdated.localeCompare(b.lastUpdated)
            }
        ],
        data: user.isAdmin ? appraisalData : getUserAppraisals(user.name),
        keys: user.isAdmin ? adminKeys : nonAdminKeys,
        specialFunctions: user.isAdmin ? [ dummy, toDateString, dummy ] : [ toDateString, dummy, toDateString ],
        isSelectable: false
    };

    if(user.isAdmin)
        delete tableData.headers[3];
    else
        delete tableData.headers[0];

    return (
        <section>
            <SearchBar state={searchText} setState={setSearchText} />
            <Welcome />
            <div className={styles.tableContainer}>
                <Table tableData={tableData} />
            </div>
        </section>
    );
}

export default Appraisal;
