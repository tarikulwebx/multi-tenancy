import DangerButton from "@/Components/DangerButton";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import styles from "@/styles";
import { Link, useForm } from "@inertiajs/react";
import React from "react";

const InviteForm = ({ invitations }) => {
    const { data, setData, post, errors, processing, recentlySuccessful } =
        useForm({
            email: "",
        });

    const submit = (e) => {
        e.preventDefault();

        post(route("invitations.sent"));
    };

    return (
        <div className={`mb-6 ${styles.card}`}>
            <h4 className="font-medium text-lg">Invite User</h4>
            <p className="text-sm mt-1">Sent invitation email</p>

            <form onSubmit={submit} className="max-w-xs">
                <div className="mt-4 flex gap-2">
                    <TextInput
                        id="email"
                        name="email"
                        value={data.email}
                        type="email"
                        placeholder="Email"
                        onChange={(e) => setData("email", e.target.value)}
                        className="flex-1"
                    />
                    <PrimaryButton>Send</PrimaryButton>
                </div>
                <InputError message={errors.email} className="mt-1" />
            </form>

            <div className="overflow-auto mt-8 max-w-lg">
                <table className="min-w-full border">
                    <thead className="border-b bg-white">
                        <tr>
                            <th
                                scope="col"
                                className="border px-4 py-2 text-left text-sm font-semibold text-gray-900"
                            >
                                Email
                            </th>

                            <th
                                scope="col"
                                className="border px-4 py-2 text-left text-sm font-semibold text-gray-900"
                            >
                                Sent on
                            </th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {invitations.map((invitation, index) => (
                            <tr key={index} className="bg-white">
                                <td className="border px-4 py-2 text-sm font-normal text-gray-900">
                                    {invitation.email}
                                </td>
                                <td className="border px-4 py-2 text-sm font-normal text-gray-900">
                                    {invitation.created_at}
                                </td>
                                <td className="border px-4 py-2 text-sm font-normal text-gray-900">
                                    <DeleteInvitation invitation={invitation} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const DeleteInvitation = ({ invitation }) => {
    const { delete: destroy, processing, recentlySuccessful } = useForm();

    const submit = (e) => {
        e.preventDefault();

        destroy(route("invitations.delete", invitation.id));
    };

    return (
        <DangerButton onClick={submit} className="text-xs !px-2 !py-1 rounded">
            {processing ? ".." : "-"}
        </DangerButton>
    );
};

export default InviteForm;
