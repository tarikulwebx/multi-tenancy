import AppRootLayout from "@/Layouts/AppLayouts/AppRootLayout";
import styles from "@/styles";
import { Head } from "@inertiajs/react";
import React from "react";
import InviteForm from "./partials/InviteForm";

const Index = ({ auth, users, invitations }) => {
    return (
        <AppRootLayout
            user={auth.user}
            header={<h1 className={styles.pageTitle}>Users</h1>}
        >
            {/* <pre>{JSON.stringify(invitations, undefined, 2)}</pre> */}
            <Head title="Users" />

            <InviteForm invitations={invitations} />

            <div className={styles.card}>
                <div className="overflow-auto">
                    <table className="min-w-full border">
                        <thead className="border-b bg-white">
                            <tr>
                                <th
                                    scope="col"
                                    className="border px-6 py-4 text-left text-sm font-semibold text-gray-900"
                                >
                                    #
                                </th>
                                <th
                                    scope="col"
                                    className="border px-6 py-4 text-left text-sm font-semibold text-gray-900"
                                >
                                    Name
                                </th>
                                <th
                                    scope="col"
                                    className="border px-6 py-4 text-left text-sm font-semibold text-gray-900"
                                >
                                    Email
                                </th>

                                <th
                                    scope="col"
                                    className="border px-6 py-4 text-left text-sm font-semibold text-gray-900"
                                >
                                    Created at
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={index} className="bg-white">
                                    <td className="border px-6 py-4 text-sm font-normal text-gray-900">
                                        {index + 1}
                                    </td>
                                    <td className="border px-6 py-4 text-sm font-medium text-gray-900">
                                        {user.name}
                                    </td>
                                    <td className="border px-6 py-4 text-sm font-normal text-gray-900">
                                        {user.email}
                                    </td>
                                    <td className="border px-6 py-4 text-sm font-normal text-gray-900">
                                        {user.created_at}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </AppRootLayout>
    );
};

export default Index;
