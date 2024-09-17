import { Document, Font, Page, StyleSheet, Text, View } from '@react-pdf/renderer';
import React from 'react';

const styles = StyleSheet.create({
    page: {
        padding: "15px",
        paddingLeft: "45px",
        fontFamily: "Ubuntu",
        fontSize: "14px"
    },
    row: {
        display: "flex",
        flexDirection: "row",   
        alignItems: "center",
        justifyContent: "flex-start"
    },
    col: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
});

Font.register({
    family: 'Ubuntu',
    fonts: [
        {
            src: 'https://fonts.gstatic.com/s/questrial/v13/QdVUSTchPBm7nuUeVf7EuStkm20oJA.ttf',
        },
        {
            src: 'https://fonts.gstatic.com/s/questrial/v13/QdVUSTchPBm7nuUeVf7EuStkm20oJA.ttf',
            fontWeight: 'bold',
        },
        {
            src: 'https://fonts.gstatic.com/s/questrial/v13/QdVUSTchPBm7nuUeVf7EuStkm20oJA.ttf',
            fontWeight: 'normal',
            fontStyle: 'italic',
        },
    ],
});

const TablePDF = ({ data, keys }) => {
    // Let's split the array into chunks so that we can divide the PDF into pages

    data = split(data);
    const numberOfColumns = keys.length;

    return (
        <Document>
            {
                data.map((page, ind0) => {
                    return (
                        <Page size="A4" style={styles.page} key={ind0}>
                            { 
                                page.map((val, ind1) => {
                                    return (
                                        <View key={ind1} style={styles.row}>
                                            {
                                                keys.map((key, ind2) => {
                                                    return <Text key={ind2} style={{...styles.col, width: `calc(100% / ${numberOfColumns})` }}>{val[key]}</Text>
                                                })
                                            }
                                        </View>
                                    );
                                })
                            }
                        </Page>
                    );
                })
            }
        </Document>
    );
}

const split = (arr, chunkSize = 100) => {
    const ans = [];
    const n = arr.length;
    for(let i = 0; i < n; i += chunkSize)
    {
        const start = i;
        const end = Math.min(i + chunkSize, n);
        ans.push(arr.slice(start, end));
    }
    return ans;
};

export default TablePDF;
