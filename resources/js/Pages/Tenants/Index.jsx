import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import RootLayout from "@/Layouts/RootLayout/RootLayout";
import styles from "@/styles";
import { Head, Link } from "@inertiajs/react";
import React from "react";

const Index = ({ auth, tenants }) => {
    return (
        <RootLayout
            user={auth.user}
            header={
                <div className="flex justify-between items-center gap-2">
                    <h1 className={styles.pageTitle}>My Tenants</h1>
                    <Link href={route("tenant.create")}>
                        <SecondaryButton>Register New</SecondaryButton>
                    </Link>
                </div>
            }
        >
            <Head title="My tenants" />
            <div className={styles.card}>
                {/* <pre>{JSON.stringify(tenants, undefined, 2)}</pre> */}

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
                                    Plan
                                </th>

                                <th
                                    scope="col"
                                    className="border px-6 py-4 text-left text-sm font-semibold text-gray-900"
                                >
                                    Address
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
                            {tenants.map((tenant, index) => (
                                <tr key={index} className="bg-white">
                                    <td className="border px-6 py-4 text-sm font-normal text-gray-900">
                                        {index + 1}
                                    </td>
                                    <td className="border px-6 py-4 text-sm font-medium text-gray-900">
                                        {tenant.name}
                                    </td>
                                    <td className="border px-6 py-4 text-sm font-normal text-gray-900">
                                        {tenant.plan}
                                    </td>

                                    <td className="border px-6 py-4 text-sm font-normal text-gray-900">
                                        <a
                                            href={tenant.domain}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600"
                                        >
                                            {tenant.domain}
                                        </a>
                                    </td>
                                    <td className="border px-6 py-4 text-sm font-normal text-gray-900">
                                        {tenant.created_at}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </RootLayout>
    );
};

export default Index;
