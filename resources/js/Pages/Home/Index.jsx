import RootLayout from "@/Layouts/RootLayout/RootLayout";
import styles from "@/styles";
import { Head } from "@inertiajs/react";
import React from "react";

const Index = ({ auth }) => {
    return (
        <RootLayout
            user={auth.user}
            header={<h1 className={styles.pageTitle}>Hello</h1>}
        >
            <Head title="Home" /> Index
        </RootLayout>
    );
};

export default Index;
