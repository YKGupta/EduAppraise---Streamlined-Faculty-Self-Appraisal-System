import React, { useContext, useEffect, useState } from 'react';
import styles from './Home.module.scss';
import { contains } from '../../utils/Local Storage';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../context/User/Context';
import SearchBar from '../../components/Search Bar';
import Card from '../../components/Card';
import Table from '../../components/Table';
import data from '../../data/appraisals.json';

const Home = () => {

    const navigate = useNavigate();
    const [ userData, setUserData ] = useState({});
    const [ searchText, setSearchText ] = useState("");
    const { userDetails } = useContext(UserContext);

    useEffect(() => {
        if(!contains("authToken"))
        {
            navigate("/login");
            return;
        }

        const func = async () => {
            setUserData(await userDetails());
        }
        func();

        // eslint-disable-next-line
    }, []);

    const count = () => {
        const ans = {
            pending: 0,
            approved: 0,
            rejected: 0
        };

        for(let i of data)
        {
            ans.pending += i.status === "Pending" ? 1 : 0;
            ans.approved += i.status === "Approved" ? 1 : 0;
            ans.rejected += i.status === "Rejected" ? 1 : 0;
        }

        return ans;
    };

    return (
        <>
            <SearchBar state={searchText} setState={setSearchText} />
            {
                userData ? 
                    <section>
                        <section className={styles.topBarCards}>
                                <Card title='Pending' count={count().pending} />
                                <Card title='Approved' count={count().approved} />
                                <Card title='Rejected' count={count().rejected} />
                        </section>
                        <section className={styles.tableContainer}>
                            <Table />
                        </section>
                    </section>
                :
                    <div>
                        Loading...
                    </div>
            }
        </>
    )
}

export default Home;
