import React from "react";
import Navbar from "./partials/Navbar";
import styles from "@/styles";

const AppRootLayout = ({ user, header, children }) => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <Navbar user={user} />
            {header && (
                <header className="bg-white shadow py-6 mb-10">
                    <div className={styles.container}>{header}</div>
                </header>
            )}
            <div className={`${styles.container} pb-10`}>{children}</div>
        </div>
    );
};

export default AppRootLayout;
