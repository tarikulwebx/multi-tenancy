import AppRootLayout from "@/Layouts/AppLayouts/AppRootLayout";
import styles from "@/styles";
import { Head } from "@inertiajs/react";
import React from "react";

const Index = ({ auth, tenant }) => {
    return (
        <AppRootLayout
            user={auth.user}
            header={<h1 className={styles.pageTitle}>Home</h1>}
        >
            <Head title="Home" />
            {/* <pre>{JSON.stringify(tenant, undefined, 2)}</pre> */}
            <div className={styles.card}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <h4 className="font-medium mb-1 ">Name</h4>
                        <p>{tenant.name}</p>
                    </div>
                    <div>
                        <h4 className="font-medium mb-1">Plan</h4>
                        <p>{tenant.plan}</p>
                    </div>
                    <div>
                        <h4 className="font-medium mb-1">Created</h4>
                        <p>{tenant.created_at}</p>
                    </div>
                    <div>
                        <h4 className="font-medium mb-1">Address</h4>
                        <p>{tenant.domain}</p>
                    </div>
                </div>
            </div>
        </AppRootLayout>
    );
};

export default Index;
