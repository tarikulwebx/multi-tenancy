import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import styles from "@/styles";
import { useForm } from "@inertiajs/react";
import React from "react";

const InviteForm = () => {
    const { data, setData, post, errors, processing, recentlySuccessful } =
        useForm({
            email: "",
        });

    const submit = (e) => {
        e.preventDefault();

        post(route("profile.update"));
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
        </div>
    );
};

export default InviteForm;
