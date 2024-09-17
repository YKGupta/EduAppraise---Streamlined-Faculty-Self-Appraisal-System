import { Document, Font, Page, Text, View } from '@react-pdf/renderer';
import React from 'react';

const styles = StyleSheet.create({
    page: {
        padding: "20px",
        fontFamily: "Ubuntu"
    },
    note: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    },
    text: {
        fontSize: "16px"
    },
    footer: {
        fontSize: "12px",
        marginTop: "10px",
        color: "#808080"
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

const TablePDF = ({ data }) => {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                { data.map((val, ind) => {
                    return <View key={ind}>
                        { val.map((val, ind) => {
                            return <Text key={ind}>{val}</Text>
                        }) }
                    </View>
                }) }
            </Page>
        </Document>
    );
}

export default TablePDF;
